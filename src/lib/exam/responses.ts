import type { StudentResponse } from "./types";
import type { PresentedQuestion } from "./presentation";

export interface ResponseState {
  selectedOptionIds: string[];
  flagged: boolean;
  /** Matching items: stemId -> chosen optionId. */
  selectedByStem?: Record<string, string>;
}

export type ResponseMap = Record<string, ResponseState>;

export function selectOption(
  responses: ResponseMap,
  questionId: string,
  optionId: string,
): ResponseMap {
  const existing = responses[questionId];
  return {
    ...responses,
    [questionId]: {
      selectedOptionIds: [optionId],
      flagged: existing?.flagged ?? false,
    },
  };
}

/** Answer one stem of a matching item; re-choosing the same option clears it. */
export function selectStemOption(
  responses: ResponseMap,
  questionId: string,
  stemId: string,
  optionId: string | null,
): ResponseMap {
  const existing = responses[questionId];
  const selectedByStem = { ...(existing?.selectedByStem ?? {}) };
  if (optionId) {
    if (selectedByStem[stemId] === optionId) {
      delete selectedByStem[stemId];
    } else {
      selectedByStem[stemId] = optionId;
    }
  } else {
    delete selectedByStem[stemId];
  }
  return {
    ...responses,
    [questionId]: {
      selectedOptionIds: [...new Set(Object.values(selectedByStem))],
      selectedByStem,
      flagged: existing?.flagged ?? false,
    },
  };
}

export function toggleFlag(
  responses: ResponseMap,
  questionId: string,
): ResponseMap {
  const existing = responses[questionId];
  return {
    ...responses,
    [questionId]: {
      selectedOptionIds: existing?.selectedOptionIds ?? [],
      selectedByStem: existing?.selectedByStem,
      flagged: !existing?.flagged,
    },
  };
}

export function isAnswered(
  questionId: string,
  responses: ResponseMap,
): boolean {
  return (responses[questionId]?.selectedOptionIds.length ?? 0) > 0;
}

export function countAnswered(
  questions: PresentedQuestion[],
  responses: ResponseMap,
): number {
  return questions.filter((question) => isAnswered(question.id, responses))
    .length;
}

export function countFlagged(
  questions: PresentedQuestion[],
  responses: ResponseMap,
): number {
  return questions.filter((question) => responses[question.id]?.flagged)
    .length;
}

export function toStudentResponses(
  questions: PresentedQuestion[],
  responses: ResponseMap,
): StudentResponse[] {
  return questions.map((question) => ({
    questionId: question.id,
    selectedOptionIds: responses[question.id]?.selectedOptionIds ?? [],
    flagged: responses[question.id]?.flagged ?? false,
    selectedByStem: responses[question.id]?.selectedByStem,
  }));
}
