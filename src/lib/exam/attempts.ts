import type { AttemptMode, AttemptPolicy } from "./types";

export interface AttemptRecord {
  examId: string;
}

export function getAttemptNumber(
  attempts: AttemptRecord[],
  examId: string,
  policy: AttemptPolicy,
): number {
  const relevant =
    policy.scope === "global"
      ? attempts
      : attempts.filter((attempt) => attempt.examId === examId);
  return relevant.length + 1;
}

export function getAttemptMode(
  attemptNumber: number,
  policy: AttemptPolicy,
): AttemptMode {
  return attemptNumber >= policy.formalFromAttempt ? "formal" : "study";
}

export function describeAttemptMode(mode: AttemptMode): string {
  return mode === "study"
    ? "Study attempt — check each answer and read the explanation"
    : "Formal simulation — feedback is revealed after submission";
}
