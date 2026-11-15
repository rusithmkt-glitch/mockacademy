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
  durationUsedSeconds: number;
  completedAt: string;
}

function isCorrect(question: ExamQuestion, response?: StudentResponse): boolean {
  if (!response) return false;
  return response.selectedOptionIds.includes(question.correctOptionId);
}

export function passThreshold(total: number, passMarkPercent: number): number {
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
    const correct = isCorrect(question, response);
    if (correct) score += 1;
    if (response.selectedOptionIds.length === 0) unanswered += 1;

    const topic =
      topicTotals.get(question.topic) ??
      {
        topic: question.topic,
        correct: 0,
        total: 0,
        percent: 0,
      };
    topic.total += 1;
    if (correct) topic.correct += 1;
    topicTotals.set(question.topic, topic);

    return response;
  });

  const total = input.questions.length;
  const incorrect = total - score - unanswered;
  const percent = total ? Math.round((score / total) * 100) : 0;
  const threshold = passThreshold(total, input.passMarkPercent);

  return {
    examId: input.examId,
    examTitle: input.examTitle,
    score,
    incorrect,
    unanswered,
    total,
    percent,
    passMarkPercent: input.passMarkPercent,
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
