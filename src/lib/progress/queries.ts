import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";
import type { Viewer } from "@/lib/auth/session";
import type { ExamSummary } from "@/lib/exams/types";
import { listPublishedExams } from "@/lib/exams/queries";
import { DEFAULT_COURSE_SLUG } from "@/lib/course-source";

export interface TopicScore {
  topic: string;
  correct: number;
  total: number;
  percent: number;
}

export interface DashboardAttempt {
  id: string;
  examTitle: string;
  examSlug: string;
  score: number;
  total: number;
  percent: number;
  passPercent: number;
  passed: boolean;
  createdAt: string;
  topics: TopicScore[];
}

export interface DashboardData {
  memberSince: string | null;
  completedSessionIds: string[];
  checksTaken: number;
  checksPassed: number;
  attempts: DashboardAttempt[];
  latestTopics: TopicScore[];
  quickExams: ExamSummary[];
}

interface ResultRow {
  id: string;
  score: number;
  total: number;
  passed: boolean;
  pass_percent: number;
  topic_breakdown: Record<string, { score: number; total: number }> | null;
  created_at: string;
  exam_sets: { title: string; slug: string } | { title: string; slug: string }[] | null;
}

function percentOf(score: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((score / total) * 100);
}

function topicsFrom(
  breakdown: Record<string, { score: number; total: number }> | null,
): TopicScore[] {
  if (!breakdown) return [];
  return Object.entries(breakdown).map(([topic, value]) => ({
    topic,
    correct: value.score,
    total: value.total,
    percent: percentOf(value.score, value.total),
  }));
}

function examMeta(row: ResultRow): { title: string; slug: string } {
  const joined = Array.isArray(row.exam_sets) ? row.exam_sets[0] : row.exam_sets;
  return {
    title: joined?.title ?? "Mock exam",
    slug: joined?.slug ?? "",
  };
}

export async function getCompletedSessionIds(
  viewer: Viewer | null,
  courseSlug: string = DEFAULT_COURSE_SLUG,
): Promise<string[]> {
  if (!viewer || !isSupabaseConfigured()) return [];

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("session_progress")
      .select("session_key")
      .eq("course_slug", courseSlug);

    if (error || !data) return [];
    return (data as { session_key: string }[]).map((row) => row.session_key);
  } catch {
    return [];
  }
}

export async function getKnowledgeCheckStats(
  viewer: Viewer | null,
): Promise<{ taken: number; passed: number }> {
  if (!viewer || !isSupabaseConfigured()) return { taken: 0, passed: 0 };

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("knowledge_check_attempts")
      .select("passed");

    if (error || !data) return { taken: 0, passed: 0 };
    const rows = data as { passed: boolean }[];
    return {
      taken: rows.length,
      passed: rows.filter((row) => row.passed).length,
    };
  } catch {
    return { taken: 0, passed: 0 };
  }
}

export async function getDashboardData(viewer: Viewer): Promise<DashboardData> {
  const empty: DashboardData = {
    memberSince: null,
    completedSessionIds: [],
    checksTaken: 0,
    checksPassed: 0,
    attempts: [],
    latestTopics: [],
    quickExams: [],
  };

  if (!isSupabaseConfigured()) return empty;

  try {
    const supabase = await createSupabaseServerClient();
    const [profile, progress, checks, results, exams] = await Promise.all([
      supabase
        .from("profiles")
        .select("created_at")
        .eq("id", viewer.id)
        .maybeSingle(),
      supabase.from("session_progress").select("session_key"),
      supabase.from("knowledge_check_attempts").select("passed"),
      supabase
        .from("exam_results")
        .select(
          "id, score, total, passed, pass_percent, topic_breakdown, created_at, exam_sets(title, slug)",
        )
        .order("created_at", { ascending: false })
        .limit(20),
      listPublishedExams(),
    ]);

    const progressRows = (progress.data ?? []) as { session_key: string }[];
    const checkRows = (checks.data ?? []) as { passed: boolean }[];
    const resultRows = (results.data ?? []) as unknown as ResultRow[];

    const attempts: DashboardAttempt[] = resultRows.map((row) => {
      const meta = examMeta(row);
      return {
        id: row.id,
        examTitle: meta.title,
        examSlug: meta.slug,
        score: row.score,
        total: row.total,
        percent: percentOf(row.score, row.total),
        passPercent: row.pass_percent,
        passed: row.passed,
        createdAt: row.created_at,
        topics: topicsFrom(row.topic_breakdown),
      };
    });

    const latestTopics: TopicScore[] =
      attempts.find((attempt) => attempt.topics.length > 0)?.topics ?? [];

    return {
      memberSince: (profile.data as { created_at?: string } | null)?.created_at ?? null,
      completedSessionIds: progressRows.map((row) => row.session_key),
      checksTaken: checkRows.length,
      checksPassed: checkRows.filter((row) => row.passed).length,
      attempts,
      latestTopics,
      quickExams: exams.filter((exam) => !exam.isFeatured).slice(0, 3),
    };
  } catch {
    return empty;
  }
}
