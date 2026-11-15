import type { ExamResult, TopicResult } from "@/lib/exam/types";
import { student } from "@/data/student";

export const DEMO_STORAGE_KEY = "mockacademy.demo.v1";

export interface StoredCheckResult {
  sessionId: string;
  attempts: number;
  bestPercent: number;
  lastPercent: number;
  completedAt: string;
}

export interface StoredAttempt {
  id: string;
  examId: string;
  examTitle: string;
  completedAt: string;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  durationUsedSeconds: number;
  topics: TopicResult[];
}

export interface DemoState {
  completedSessionIds: string[];
  checks: StoredCheckResult[];
  attempts: StoredAttempt[];
}

export interface CheckOutcome {
  sessionId: string;
  percent: number;
  completedAt: string;
}

export function createInitialState(): DemoState {
  return {
    completedSessionIds: [...student.completedSessionIds],
    checks: [],
    attempts: [],
  };
}

export function completeSession(
  state: DemoState,
  outcome: CheckOutcome,
): DemoState {
  const existing = state.checks.find(
    (check) => check.sessionId === outcome.sessionId,
  );
  const checks = existing
    ? state.checks.map((check) =>
        check.sessionId === outcome.sessionId
          ? {
              ...check,
              attempts: check.attempts + 1,
              bestPercent: Math.max(check.bestPercent, outcome.percent),
              lastPercent: outcome.percent,
              completedAt: outcome.completedAt,
            }
          : check,
      )
    : [
        ...state.checks,
        {
          sessionId: outcome.sessionId,
          attempts: 1,
          bestPercent: outcome.percent,
          lastPercent: outcome.percent,
          completedAt: outcome.completedAt,
        },
      ];

  return {
    ...state,
    completedSessionIds: state.completedSessionIds.includes(outcome.sessionId)
      ? state.completedSessionIds
      : [...state.completedSessionIds, outcome.sessionId],
    checks,
  };
}

export function recordExamAttempt(
  state: DemoState,
  result: ExamResult,
): DemoState {
  const attempt: StoredAttempt = {
    id: `attempt-${result.examId}-${result.completedAt}-${state.attempts.length + 1}`,
    examId: result.examId,
    examTitle: result.examTitle,
    completedAt: result.completedAt,
    score: result.score,
    total: result.total,
    percent: result.percent,
    passed: result.passed,
    durationUsedSeconds: result.durationUsedSeconds,
    topics: result.topics,
  };

  return { ...state, attempts: [attempt, ...state.attempts] };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function sanitizeState(raw: unknown): DemoState | null {
  if (!isRecord(raw)) return null;

  const completedSessionIds = Array.isArray(raw.completedSessionIds)
    ? raw.completedSessionIds.filter(
        (id): id is string => typeof id === "string",
      )
    : [];

  const checks = Array.isArray(raw.checks)
    ? raw.checks.filter(isRecord).flatMap((check) => {
        if (
          typeof check.sessionId !== "string" ||
          typeof check.attempts !== "number" ||
          typeof check.bestPercent !== "number" ||
          typeof check.lastPercent !== "number" ||
          typeof check.completedAt !== "string"
        ) {
          return [];
        }
        return [check as unknown as StoredCheckResult];
      })
    : [];

  const attempts = Array.isArray(raw.attempts)
    ? raw.attempts.filter(isRecord).flatMap((attempt) => {
        if (
          typeof attempt.id !== "string" ||
          typeof attempt.examId !== "string" ||
          typeof attempt.examTitle !== "string" ||
          typeof attempt.completedAt !== "string" ||
          typeof attempt.score !== "number" ||
          typeof attempt.total !== "number" ||
          typeof attempt.percent !== "number" ||
          typeof attempt.passed !== "boolean" ||
          typeof attempt.durationUsedSeconds !== "number" ||
          !Array.isArray(attempt.topics)
        ) {
          return [];
        }
        return [attempt as unknown as StoredAttempt];
      })
    : [];

  return {
    completedSessionIds: [...new Set(completedSessionIds)],
    checks,
    attempts,
  };
}

export function loadDemoState(): DemoState {
  const base = createInitialState();
  if (typeof window === "undefined") return base;

  try {
    const raw = window.localStorage.getItem(DEMO_STORAGE_KEY);
    if (!raw) return base;
    const parsed = sanitizeState(JSON.parse(raw));
    if (!parsed) return base;
    return {
      ...parsed,
      completedSessionIds: [
        ...new Set([...base.completedSessionIds, ...parsed.completedSessionIds]),
      ],
    };
  } catch {
    return base;
  }
}

export function saveDemoState(state: DemoState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable in private modes; demo progress then lives
    // only for the current page session.
  }
}
