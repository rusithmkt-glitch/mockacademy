"use server";

import { getViewer } from "@/lib/auth/session";
import { isSupabaseAdminConfigured } from "@/lib/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { courses } from "@/data/courses";
import type { CourseModule, Session } from "@/data/types";
import { getSessionAssessment, scoreAssessment } from "@/lib/lesson/assessment";

export interface KnowledgeCheckOutcome {
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  attemptNumber: number;
  completedAt: string | null;
}

export type KnowledgeCheckResult =
  | { ok: true; data: KnowledgeCheckOutcome }
  | { ok: false; error: string; code?: string };

const PASS_PERCENT = 60;
const MAX_QUESTIONS = 20;
const MAX_OPTIONS = 10;

const COURSE_UNAVAILABLE = "That lesson is no longer available.";
const NO_CHECK = "This session does not have a knowledge check yet.";
const NETWORK_ERROR =
  "We could not save your check result. Check your connection and try again.";

function sanitiseAnswers(
  answers: unknown,
): Record<string, string[]> | null {
  if (!answers || typeof answers !== "object" || Array.isArray(answers)) {
    return null;
  }

  const entries = Object.entries(answers as Record<string, unknown>).slice(
    0,
    MAX_QUESTIONS,
  );
  const result: Record<string, string[]> = {};

  for (const [questionId, value] of entries) {
    if (typeof questionId !== "string" || !Array.isArray(value)) return null;
    const selected = value
      .filter((option): option is string => typeof option === "string")
      .slice(0, MAX_OPTIONS);
    result[questionId] = selected;
  }

  return result;
}

export async function submitKnowledgeCheckAction(input: {
  sessionKey: string;
  answers: Record<string, string[]>;
}): Promise<KnowledgeCheckResult> {
  const viewer = await getViewer();
  if (!viewer) {
    return {
      ok: false,
      code: "auth",
      error: "Sign in to save knowledge-check results and track your progress.",
    };
  }

  const answers = sanitiseAnswers(input?.answers);
  if (!answers || typeof input?.sessionKey !== "string") {
    return { ok: false, error: "That submission could not be read. Try again." };
  }

  // Session keys are module-namespaced and unique per registered course,
  // so the owning course slug is resolved from the registry itself.
  let ref: { courseSlug: string; module: CourseModule; session: Session } | null =
    null;
  for (const [slug, entry] of Object.entries(courses)) {
    for (const courseModule of entry.course.modules) {
      const session = courseModule.sessions.find(
        (item) => item.id === input.sessionKey,
      );
      if (session) {
        ref = { courseSlug: slug, module: courseModule, session };
        break;
      }
    }
    if (ref) break;
  }

  if (!ref) return { ok: false, error: COURSE_UNAVAILABLE };

  const questions = getSessionAssessment(ref.session, ref.module.shortTitle);
  if (questions.length === 0) return { ok: false, error: NO_CHECK };

  const validIds = new Set(questions.map((question) => question.id));
  const scopedAnswers = Object.fromEntries(
    Object.entries(answers).filter(([questionId]) => validIds.has(questionId)),
  );

  const scored = scoreAssessment(questions, scopedAnswers);
  const passed = scored.percent >= PASS_PERCENT;

  if (!isSupabaseAdminConfigured()) {
    return {
      ok: false,
      code: "not_configured",
      error: "Knowledge-check storage is not configured yet.",
    };
  }

  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin.rpc("record_knowledge_check", {
      p_user_id: viewer.id,
      p_course_slug: ref.courseSlug,
      p_session_key: ref.session.id,
      p_answers: scored.results.map((result) => ({
        questionId: result.questionId,
        selectedOptionIds: result.selectedOptionIds,
        correct: result.correct,
      })),
      p_score: scored.correct,
      p_total: scored.total,
      p_passed: passed,
    });

    if (error || !data) {
      return { ok: false, error: NETWORK_ERROR };
    }

    const payload = data as {
      attemptNumber?: number;
      completedAt?: string | null;
    };

    return {
      ok: true,
      data: {
        score: scored.correct,
        total: scored.total,
        percent: scored.percent,
        passed,
        attemptNumber: payload.attemptNumber ?? 1,
        completedAt: payload.completedAt ?? null,
      },
    };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}
