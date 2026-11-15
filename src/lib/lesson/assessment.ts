import type { CheckQuestion, Session } from "@/data/types";

const LETTERS = ["a", "b", "c", "d", "e", "f"];

export interface QuestionResult {
  questionId: string;
  correct: boolean;
  selectedOptionIds: string[];
}

export interface AssessmentScore {
  correct: number;
  total: number;
  percent: number;
  results: QuestionResult[];
}

export function getSessionAssessment(
  session: Session,
  topic: string,
): CheckQuestion[] {
  if (session.assessment?.length) return session.assessment;

  const check = session.knowledgeCheck;
  return [
    {
      id: check.id,
      type: "single",
      prompt: check.question,
      options: check.options.map((label, index) => ({
        id: LETTERS[index],
        label,
      })),
      correctOptionIds: [LETTERS[check.correctOption]],
      explanation: check.explanation,
      topic,
    },
  ];
}

export function isAnswerCorrect(
  question: CheckQuestion,
  selectedOptionIds: string[],
): boolean {
  const correct = new Set(question.correctOptionIds);
  if (selectedOptionIds.length !== correct.size) return false;
  return selectedOptionIds.every((id) => correct.has(id));
}

export function scoreAssessment(
  questions: CheckQuestion[],
  answers: Record<string, string[]>,
): AssessmentScore {
  const results = questions.map((question) => {
    const selected = answers[question.id] ?? [];
    return {
      questionId: question.id,
      correct: isAnswerCorrect(question, selected),
      selectedOptionIds: selected,
    };
  });
  const correct = results.filter((result) => result.correct).length;

  return {
    correct,
    total: questions.length,
    percent: questions.length
      ? Math.round((correct / questions.length) * 100)
      : 0,
    results,
  };
}

export function isAnswerComplete(
  question: CheckQuestion,
  selectedOptionIds: string[],
): boolean {
  if (question.type === "multiple") return selectedOptionIds.length > 0;
  return selectedOptionIds.length === 1;
}
