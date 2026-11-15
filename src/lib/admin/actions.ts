"use server";

import { revalidatePath } from "next/cache";
import { getViewer } from "@/lib/auth/session";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type {
  AdminDifficulty,
  AdminResult,
  AdminRole,
  ExamSetInput,
  QuestionInput,
} from "@/lib/admin/types";

const NOT_ALLOWED = "You do not have permission to manage this content.";
const SESSION_EXPIRED = "Your session has expired. Sign in again to continue.";
const NETWORK_ERROR =
  "We could not reach the admin service. Check your connection and try again.";

const DIFFICULTIES: AdminDifficulty[] = [
  "full_simulation",
  "focused_practice",
  "rapid_revision",
];

const ROLES: AdminRole[] = [
  "student",
  "administrator",
  "super_administrator",
];

function mapAdminError(message: string | undefined): string {
  const normalized = (message ?? "").toLowerCase();
  if (normalized.includes("not_authenticated")) return SESSION_EXPIRED;
  if (normalized.includes("not_authorized")) return NOT_ALLOWED;
  if (normalized.includes("cannot_change_own_role")) {
    return "You cannot change your own role.";
  }
  if (normalized.includes("super_admin_required")) {
    return "Only a super administrator can change administrator roles.";
  }
  if (normalized.includes("user_not_found")) {
    return "That user no longer exists.";
  }
  if (normalized.includes("exactly_one_correct_option")) {
    return "Mark exactly one option as the correct answer.";
  }
  if (normalized.includes("prompt_required")) {
    return "Add a question prompt before saving.";
  }
  if (normalized.includes("option_label_required")) {
    return "Every answer option needs a label.";
  }
  if (normalized.includes("invalid_options")) {
    return "Add between 2 and 10 answer options.";
  }
  if (normalized.includes("question_not_found")) {
    return "That question no longer exists. Refresh the list.";
  }
  if (normalized.includes("question_in_use")) {
    return "This question has been used in an attempt and can no longer be deleted. Deactivate it instead.";
  }
  if (normalized.includes("duplicate key")) {
    return "Another question already uses that position in this paper.";
  }
  if (
    normalized.includes("fetch") ||
    normalized.includes("network") ||
    normalized.includes("timeout")
  ) {
    return NETWORK_ERROR;
  }
  return "That action could not be completed. Please try again.";
}

function toInt(value: unknown, fallback: number): number {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? Math.round(parsed) : fallback;
}

function normaliseTopics(topics: unknown): string[] {
  if (!Array.isArray(topics)) return [];
  return topics
    .filter((topic): topic is string => typeof topic === "string")
    .map((topic) => topic.trim())
    .filter(Boolean)
    .slice(0, 12);
}

export async function saveQuestionAction(
  input: QuestionInput,
): Promise<AdminResult<{ questionId: string }>> {
  const viewer = await getViewer();
  if (!viewer) return { ok: false, error: SESSION_EXPIRED };
  if (!viewer.isAdmin) return { ok: false, error: NOT_ALLOWED };
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "The backend is not configured yet." };
  }

  const options = Array.isArray(input.options)
    ? input.options
        .filter((option) => typeof option?.label === "string")
        .map((option) => ({
          id: option.id || null,
          label: option.label.trim(),
          isCorrect: Boolean(option.isCorrect),
        }))
    : [];

  if (!input.examSetId) {
    return { ok: false, error: "Choose the paper this question belongs to." };
  }
  if (!input.prompt?.trim()) {
    return { ok: false, error: "Add a question prompt before saving." };
  }
  if (options.length < 2 || options.length > 10) {
    return { ok: false, error: "Add between 2 and 10 answer options." };
  }
  if (options.some((option) => option.label.length === 0)) {
    return { ok: false, error: "Every answer option needs a label." };
  }
  if (options.filter((option) => option.isCorrect).length !== 1) {
    return { ok: false, error: "Mark exactly one option as the correct answer." };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.rpc("admin_save_question", {
      p_exam_set_id: input.examSetId,
      p_question_id: input.questionId ?? null,
      p_prompt: input.prompt.trim(),
      p_topic: input.topic?.trim() || "General",
      p_explanation: input.explanation ?? "",
      p_order: Math.max(1, toInt(input.order, 1)),
      p_is_active: input.isActive !== false,
      p_options: options,
    });
    if (error || !data) {
      return { ok: false, error: mapAdminError(error?.message) };
    }
    revalidatePath("/admin/questions");
    revalidatePath("/mock-exams");
    return { ok: true, data: { questionId: data as string } };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}

export async function deleteQuestionAction(
  questionId: string,
): Promise<AdminResult> {
  const viewer = await getViewer();
  if (!viewer) return { ok: false, error: SESSION_EXPIRED };
  if (!viewer.isAdmin) return { ok: false, error: NOT_ALLOWED };

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.rpc("admin_delete_question", {
      p_question_id: questionId,
    });
    if (error) return { ok: false, error: mapAdminError(error.message) };
    revalidatePath("/admin/questions");
    revalidatePath("/mock-exams");
    return { ok: true };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}

export async function setExamPublishedAction(
  examSetId: string,
  isPublished: boolean,
): Promise<AdminResult> {
  const viewer = await getViewer();
  if (!viewer) return { ok: false, error: SESSION_EXPIRED };
  if (!viewer.isAdmin) return { ok: false, error: NOT_ALLOWED };

  try {
    const supabase = await createSupabaseServerClient();
    const { data: current, error: readError } = await supabase
      .from("exam_sets")
      .select("slug")
      .eq("id", examSetId)
      .maybeSingle();
    if (readError || !current) {
      return { ok: false, error: "That paper could not be found." };
    }

    const { data: updated, error } = await supabase
      .from("exam_sets")
      .update({ is_published: isPublished })
      .eq("id", examSetId)
      .select("id")
      .maybeSingle();
    if (error || !updated) return { ok: false, error: NOT_ALLOWED };

    revalidatePath("/admin/exams");
    revalidatePath("/mock-exams");
    revalidatePath(`/mock-exams/${current.slug}`);
    return { ok: true };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}

export async function saveExamSetAction(
  input: ExamSetInput,
): Promise<AdminResult> {
  const viewer = await getViewer();
  if (!viewer) return { ok: false, error: SESSION_EXPIRED };
  if (!viewer.isAdmin) return { ok: false, error: NOT_ALLOWED };

  const title = input.title?.trim();
  if (!title) return { ok: false, error: "Give the paper a title." };
  if (!DIFFICULTIES.includes(input.difficulty)) {
    return { ok: false, error: "Choose a valid difficulty." };
  }

  const questionCount = toInt(input.questionCount, 0);
  const durationMinutes = toInt(input.durationMinutes, 0);
  const passPercent = toInt(input.passPercent, 0);
  const maxAttempts = toInt(input.maxAttempts, 0);
  const feedbackAttempts = toInt(input.feedbackAttempts, 0);

  if (questionCount < 1 || questionCount > 200) {
    return { ok: false, error: "Questions per paper must be between 1 and 200." };
  }
  if (durationMinutes < 1 || durationMinutes > 300) {
    return { ok: false, error: "Duration must be between 1 and 300 minutes." };
  }
  if (passPercent < 0 || passPercent > 100) {
    return { ok: false, error: "The pass mark must be between 0 and 100." };
  }
  if (maxAttempts < 1 || maxAttempts > 20) {
    return { ok: false, error: "Allowed attempts must be between 1 and 20." };
  }
  if (feedbackAttempts < 0 || feedbackAttempts > maxAttempts) {
    return {
      ok: false,
      error: "Feedback attempts cannot exceed the number of allowed attempts.",
    };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("exam_sets")
      .update({
        title,
        description: input.description?.trim() ?? "",
        difficulty: input.difficulty,
        question_count: questionCount,
        duration_minutes: durationMinutes,
        pass_percent: passPercent,
        selection_mode: input.selectionMode === "random" ? "random" : "fixed",
        max_attempts: maxAttempts,
        feedback_attempts: feedbackAttempts,
        is_published: Boolean(input.isPublished),
        is_free: Boolean(input.isFree),
        is_featured: Boolean(input.isFeatured),
        topics: normaliseTopics(input.topics),
      })
      .eq("id", input.id)
      .select("slug")
      .maybeSingle();

    if (error || !data) {
      return { ok: false, error: mapAdminError(error?.message) };
    }

    revalidatePath("/admin/exams");
    revalidatePath("/mock-exams");
    revalidatePath(`/mock-exams/${data.slug}`);
    return { ok: true };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}

export async function setUserRoleAction(
  userId: string,
  role: AdminRole,
): Promise<AdminResult> {
  const viewer = await getViewer();
  if (!viewer) return { ok: false, error: SESSION_EXPIRED };
  if (!viewer.isSuperAdmin) {
    return { ok: false, error: "Only a super administrator can manage roles." };
  }
  if (!ROLES.includes(role)) {
    return { ok: false, error: "Choose a valid role." };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.rpc("admin_set_user_role", {
      p_target_user_id: userId,
      p_role: role,
    });
    if (error) return { ok: false, error: mapAdminError(error.message) };
    revalidatePath("/admin/administrators");
    return { ok: true };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}
