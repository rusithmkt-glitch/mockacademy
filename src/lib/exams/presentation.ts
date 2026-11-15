import type { PresentedQuestion } from "@/lib/exam/presentation";
import type { ResponseMap } from "@/lib/exam/responses";
import type { AttemptMode, ExamResult, TopicResult } from "@/lib/exam/types";
import type {
  AttemptQuestionView,
  DbExamMode,
  SubmittedAttemptPayload,
} from "./types";

export function toUiMode(mode: DbExamMode): AttemptMode {
  return mode === "immediate_feedback" ? "study" : "formal";
}

export function toPresentedQuestions(
  questions: AttemptQuestionView[],
): PresentedQuestion[] {
  return questions.map((question) => ({
    id: question.id,
    topic: question.topic,
    moduleId: "",
    prompt: question.prompt,
    options: question.options.map((option) => ({ ...option })),
  }));
}

export function toResponseMap(questions: AttemptQuestionView[]): ResponseMap {
  return Object.fromEntries(
    questions.map((question) => [
      question.id,
      {
        selectedOptionIds: [...question.selectedOptionIds],
        flagged: question.flagged,
      },
    ]),
  );
}

export function breakdownToTopics(
  breakdown: SubmittedAttemptPayload["result"]["topicBreakdown"],
): TopicResult[] {
  return Object.entries(breakdown).map(([topic, value]) => ({
    topic,
    correct: value.score,
    total: value.total,
    percent: value.total > 0 ? Math.round((value.score / value.total) * 100) : 0,
  }));
}

export function toExamResult(
  payload: SubmittedAttemptPayload,
): ExamResult {
  const { attempt, result, questions } = payload;
  const responses = questions.map((question) => ({
    questionId: question.questionId,
    selectedOptionIds: [...question.selectedOptionIds],
    flagged: question.flagged,
  }));
  const unanswered = responses.filter(
    (response) => response.selectedOptionIds.length === 0,
  ).length;
  const durationUsedSeconds = Math.max(
    1,
    Math.round(
      (new Date(attempt.submittedAt ?? attempt.serverTime).getTime() -
        new Date(attempt.startedAt).getTime()) /
        1000,
    ),
  );

  return {
    examId: attempt.examSlug,
    examTitle: attempt.examTitle,
    score: result.score,
    incorrect: Math.max(0, result.total - result.score - unanswered),
    unanswered,
    total: result.total,
    percent: result.percent,
    passMarkPercent: result.passPercent,
    passed: result.passed,
    durationUsedSeconds,
    completedAt: attempt.submittedAt ?? attempt.serverTime,
    topics: breakdownToTopics(result.topicBreakdown),
    responses,
  };
}

export function toReviewMap(
  payload: SubmittedAttemptPayload,
): Record<string, { correctOptionId: string; explanation: string }> {
  return Object.fromEntries(
    payload.review.map((question) => [
      question.questionId,
      {
        correctOptionId: question.correctOptionIds[0] ?? "",
        explanation: question.explanation,
      },
    ]),
  );
}
