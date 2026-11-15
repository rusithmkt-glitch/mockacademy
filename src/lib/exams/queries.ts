import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";
import type { Viewer } from "@/lib/auth/session";
import type {
  ExamAttemptPayload,
  ExamPageState,
  ExamSummary,
} from "@/lib/exams/types";

const DIFFICULTY_LABELS = {
  full_simulation: "Full simulation",
  focused_practice: "Focused practice",
  rapid_revision: "Rapid revision",
} as const;

interface ExamRow {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: keyof typeof DIFFICULTY_LABELS;
  question_count: number;
  duration_minutes: number;
  pass_percent: number;
  selection_mode: "fixed" | "random";
  max_attempts: number;
  feedback_attempts: number;
  is_free: boolean;
  is_featured: boolean;
  topics: string[] | null;
}

function toExamSummary(row: ExamRow): ExamSummary {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    difficulty: DIFFICULTY_LABELS[row.difficulty] ?? "Full simulation",
    questionCount: row.question_count,
    durationMinutes: row.duration_minutes,
    passPercent: row.pass_percent,
    selectionMode: row.selection_mode,
    maxAttempts: row.max_attempts,
    feedbackAttempts: row.feedback_attempts,
    isFree: row.is_free,
    isFeatured: row.is_featured,
    topics: Array.isArray(row.topics) ? row.topics : [],
  };
}

const EXAM_COLUMNS =
  "id, slug, title, description, difficulty, question_count, duration_minutes, pass_percent, selection_mode, max_attempts, feedback_attempts, is_free, is_featured, topics";

export async function listPublishedExams(): Promise<ExamSummary[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("exam_sets")
      .select(EXAM_COLUMNS)
      .eq("is_published", true)
      .order("created_at", { ascending: true });

    if (error || !data) return [];
    return (data as ExamRow[]).map(toExamSummary);
  } catch {
    return [];
  }
}

export async function getExamBySlug(slug: string): Promise<ExamSummary | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("exam_sets")
      .select(EXAM_COLUMNS)
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();

    if (error || !data) return null;
    return toExamSummary(data as ExamRow);
  } catch {
    return null;
  }
}

export async function getExamPageState(
  exam: ExamSummary,
  viewer: Viewer | null,
): Promise<ExamPageState> {
  if (!viewer || !isSupabaseConfigured()) {
    return { attemptsUsed: 0, active: null };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase
      .from("exam_attempts")
      .select("id, status")
      .eq("exam_set_id", exam.id)
      .order("attempt_number", { ascending: false });

    const attempts = (data ?? []) as { id: string; status: string }[];
    const activeRow = attempts.find((attempt) => attempt.status === "in_progress");

    let active: ExamAttemptPayload | null = null;
    if (activeRow) {
      const { data: payload } = await supabase.rpc("get_exam_attempt", {
        p_attempt_id: activeRow.id,
      });
      if (payload) active = payload as ExamAttemptPayload;
    }

    return { attemptsUsed: attempts.length, active };
  } catch {
    return { attemptsUsed: 0, active: null };
  }
}
