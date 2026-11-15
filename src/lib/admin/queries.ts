import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type {
  AdminExamSet,
  AdminOverview,
  AdminQuestion,
  AdminUser,
} from "@/lib/admin/types";

const EMPTY_OVERVIEW: AdminOverview = {
  students: 0,
  staff: 0,
  publishedExams: 0,
  totalExams: 0,
  activeQuestions: 0,
  attempts: 0,
  submitted: 0,
  passRate: 0,
  sessionCompletions: 0,
  knowledgeChecks: 0,
};

function asCount(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

export async function loadAdminOverview(): Promise<{
  overview: AdminOverview;
  error: string | null;
}> {
  if (!isSupabaseConfigured()) {
    return { overview: EMPTY_OVERVIEW, error: "Supabase is not configured." };
  }
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.rpc("admin_overview");
    if (error || !data || typeof data !== "object") {
      return {
        overview: EMPTY_OVERVIEW,
        error: "We could not load the overview. Refresh the page to try again.",
      };
    }
    const raw = data as Record<string, unknown>;
    return {
      overview: {
        students: asCount(raw.students),
        staff: asCount(raw.staff),
        publishedExams: asCount(raw.publishedExams),
        totalExams: asCount(raw.totalExams),
        activeQuestions: asCount(raw.activeQuestions),
        attempts: asCount(raw.attempts),
        submitted: asCount(raw.submitted),
        passRate: asCount(raw.passRate),
        sessionCompletions: asCount(raw.sessionCompletions),
        knowledgeChecks: asCount(raw.knowledgeChecks),
      },
      error: null,
    };
  } catch {
    return {
      overview: EMPTY_OVERVIEW,
      error: "We could not reach the database. Check your connection and retry.",
    };
  }
}

interface ExamSetRow {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: AdminExamSet["difficulty"];
  question_count: number;
  duration_minutes: number;
  pass_percent: number;
  selection_mode: "fixed" | "random";
  max_attempts: number;
  feedback_attempts: number;
  is_published: boolean;
  is_free: boolean;
  is_featured: boolean;
  topics: string[] | null;
}

export async function listAdminExamSets(): Promise<AdminExamSet[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createSupabaseServerClient();
    const [{ data: sets, error }, { data: questions }] = await Promise.all([
      supabase
        .from("exam_sets")
        .select(
          "id, slug, title, description, difficulty, question_count, duration_minutes, pass_percent, selection_mode, max_attempts, feedback_attempts, is_published, is_free, is_featured, topics",
        )
        .order("created_at", { ascending: true }),
      supabase
        .from("exam_questions")
        .select("exam_set_id, is_active")
        .eq("is_active", true),
    ]);

    if (error || !sets) return [];

    const activeBySet = new Map<string, number>();
    for (const row of questions ?? []) {
      const key = (row as { exam_set_id: string }).exam_set_id;
      activeBySet.set(key, (activeBySet.get(key) ?? 0) + 1);
    }

    return (sets as ExamSetRow[]).map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      description: row.description,
      difficulty: row.difficulty,
      questionCount: row.question_count,
      durationMinutes: row.duration_minutes,
      passPercent: row.pass_percent,
      selectionMode: row.selection_mode,
      maxAttempts: row.max_attempts,
      feedbackAttempts: row.feedback_attempts,
      isPublished: row.is_published,
      isFree: row.is_free,
      isFeatured: row.is_featured,
      topics: Array.isArray(row.topics) ? row.topics : [],
      activeQuestions: activeBySet.get(row.id) ?? 0,
    }));
  } catch {
    return [];
  }
}

export async function loadQuestionBank(
  examSetId: string,
): Promise<{ questions: AdminQuestion[]; error: string | null }> {
  if (!isSupabaseConfigured()) {
    return { questions: [], error: "Supabase is not configured." };
  }
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.rpc("admin_question_bank", {
      p_exam_set_id: examSetId,
    });
    if (error) {
      return {
        questions: [],
        error: "We could not load questions for that paper.",
      };
    }
    if (!Array.isArray(data)) return { questions: [], error: null };
    return { questions: data as AdminQuestion[], error: null };
  } catch {
    return {
      questions: [],
      error: "We could not reach the database. Check your connection and retry.",
    };
  }
}

export async function listAdminUsers(): Promise<AdminUser[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.rpc("admin_list_users");
    if (error || !Array.isArray(data)) return [];
    return data as AdminUser[];
  } catch {
    return [];
  }
}
