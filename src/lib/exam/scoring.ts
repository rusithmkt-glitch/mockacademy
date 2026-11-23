import type {
  ExamQuestion,
  ExamResult,
  ExamTopic,
  StudentResponse,
  TopicResult,
} from "./types";

export interface ScoreExamInput {
  examId: string;
  examTitle: string;
  questions: ExamQuestion[];
  responses: StudentResponse[];
  passMarkPercent: number;
  passMark?: number;
  durationUsedSeconds: number;
  completedAt: string;
}

export function questionMarks(question: ExamQuestion): number {
  return question.marks ?? 1;
}

/** Marks earned for one answer: matching items score one per correct stem. */
export function marksAwarded(
  question: ExamQuestion,
  response?: StudentResponse,
): number {
  if (!response) return 0;
  if (question.kind === "match") {
    const selected = response.selectedByStem ?? {};
    return (question.stems ?? []).filter(
      (stem) => selected[stem.id] === stem.correctOptionId,
    ).length;
  }
  return response.selectedOptionIds.includes(question.correctOptionId) ? 1 : 0;
}

export function passThreshold(
  total: number,
  passMarkPercent: number,
  passMark?: number,
): number {
  if (passMark != null) return passMark;
  return Math.ceil((total * passMarkPercent) / 100);
}

export function scoreExam(input: ScoreExamInput): ExamResult {
  const responseMap = new Map(
    input.responses.map((response) => [response.questionId, response]),
  );

  let score = 0;
  let unanswered = 0;
  const topicTotals = new Map<ExamTopic, TopicResult>();

  const responses = input.questions.map((question) => {
    const response = responseMap.get(question.id) ?? {
      questionId: question.id,
      selectedOptionIds: [],
      flagged: false,
    };
    const marks = questionMarks(question);
    const earned = marksAwarded(question, response);
    score += earned;
    if (response.selectedOptionIds.length === 0) unanswered += 1;

    const topic =
      topicTotals.get(question.topic) ??
      {
        topic: question.topic,
        correct: 0,
        total: 0,
        percent: 0,
      };
    topic.total += marks;
    topic.correct += earned;
    topicTotals.set(question.topic, topic);

    return response;
  });

  const total = input.questions.reduce(
    (sum, question) => sum + questionMarks(question),
    0,
  );
  const incorrect = total - score - unanswered;
  const percent = total ? Math.round((score / total) * 100) : 0;
  const threshold = passThreshold(total, input.passMarkPercent, input.passMark);

  return {
    examId: input.examId,
    examTitle: input.examTitle,
    score,
    incorrect,
    unanswered,
    total,
    percent,
    passMarkPercent: input.passMarkPercent,
    passMark: input.passMark,
    passed: score >= threshold,
    durationUsedSeconds: input.durationUsedSeconds,
    completedAt: input.completedAt,
    topics: [...topicTotals.values()].map((topic) => ({
      ...topic,
      percent: Math.round((topic.correct / topic.total) * 100),
    })),
    responses,
  };
}

export function getCorrectOption(question: ExamQuestion) {
  return question.options.find(
    (option) => option.id === question.correctOptionId,
  );
}

export function formatReviewAnswer(
  question: ExamQuestion,
  optionIds: string[],
): string {
  if (!optionIds.length) return "No answer selected";
  return optionIds
    .map((id) => question.options.find((option) => option.id === id)?.label)
    .filter(Boolean)
    .join(", ");
}
