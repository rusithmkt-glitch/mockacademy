"use server";

import { getViewer } from "@/lib/auth/session";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getExamBySlug, getExamPageState } from "@/lib/exams/queries";
import type {
  ActionResult,
  ExamAttemptPayload,
  ExamPageState,
} from "@/lib/exams/types";

const NETWORK_ERROR =
  "We could not reach the exam service. Check your connection and try again.";

function mapExamError(message: string | undefined): string {
  const normalized = (message ?? "").toLowerCase();
  if (normalized.includes("not_authenticated")) {
    return "Your session has expired. Sign in again to continue.";
  }
  if (normalized.includes("attempt_limit_reached")) {
    return "You have used every attempt for this paper.";
  }
  if (normalized.includes("exam_not_ready")) {
    return "This paper is not ready yet. Please try another paper.";
  }
  if (normalized.includes("exam_not_found")) {
    return "That paper is no longer available.";
  }
  if (normalized.includes("attempt_already_submitted")) {
    return "This paper has already been submitted.";
  }
  if (normalized.includes("attempt_not_found")) {
    return "We could not find that attempt. Refresh the page and try again.";
  }
  if (
    normalized.includes("fetch") ||
    normalized.includes("network") ||
    normalized.includes("timeout")
  ) {
    return NETWORK_ERROR;
  }
  return "That exam action could not be completed. Please try again.";
}

export async function startExamAttempt(
  examSlug: string,
): Promise<ActionResult<ExamAttemptPayload>> {
  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      code: "not_configured",
      error: "Exams are not connected to the backend yet.",
    };
  }

  const viewer = await getViewer();
  if (!viewer) {
    return {
      ok: false,
      code: "auth",
      error: "Sign in to start this paper. Your timer and answers are stored as you work.",
    };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.rpc("start_exam_attempt", {
      p_exam_slug: examSlug,
    });
    if (error || !data) {
      return { ok: false, error: mapExamError(error?.message) };
    }
    return { ok: true, data: data as ExamAttemptPayload };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}

export async function saveExamResponseAction(input: {
  attemptId: string;
  questionId: string;
  selectedOptionIds: string[];
  flagged: boolean;
  selectedByStem?: Record<string, string>;
}): Promise<ActionResult<{ status: "saved" | "expired" }>> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Exams are not connected to the backend yet." };
  }

  const viewer = await getViewer();
  if (!viewer) {
    return {
      ok: false,
      code: "auth",
      error: "Your session has expired. Sign in again to continue.",
    };
  }

  const selected = Array.isArray(input.selectedOptionIds)
    ? input.selectedOptionIds.filter((id) => typeof id === "string").slice(0, 10)
    : [];

  const byStem: Record<string, string> = {};
  for (const [stemId, optionId] of Object.entries(input.selectedByStem ?? {})) {
    if (
      typeof stemId === "string" &&
      typeof optionId === "string" &&
      Object.keys(byStem).length < 6
    ) {
      byStem[stemId] = optionId;
    }
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.rpc("save_exam_response", {
      p_attempt_id: input.attemptId,
      p_question_id: input.questionId,
      p_selected_option_ids: selected,
      p_flagged: Boolean(input.flagged),
      p_selected_by_stem: byStem,
    });
    if (error || !data) {
      return { ok: false, error: mapExamError(error?.message) };
    }
    const status = (data as { status?: string }).status;
    return {
      ok: true,
      data: { status: status === "expired" ? "expired" : "saved" },
    };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}

export async function submitExamAttemptAction(
  attemptId: string,
): Promise<ActionResult<ExamAttemptPayload>> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Exams are not connected to the backend yet." };
  }

  const viewer = await getViewer();
  if (!viewer) {
    return {
      ok: false,
      code: "auth",
      error: "Your session has expired. Sign in again to view this result.",
    };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.rpc("submit_exam_attempt", {
      p_attempt_id: attemptId,
    });
    if (error || !data) {
      return { ok: false, error: mapExamError(error?.message) };
    }
    return { ok: true, data: data as ExamAttemptPayload };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}

export async function refreshExamStateAction(
  examSlug: string,
): Promise<ActionResult<ExamPageState>> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Exams are not connected to the backend yet." };
  }

  const viewer = await getViewer();
  const exam = await getExamBySlug(examSlug);
  if (!exam) {
    return { ok: false, error: "That paper is no longer available." };
  }

  const state = await getExamPageState(exam, viewer);
  return { ok: true, data: state };
}
