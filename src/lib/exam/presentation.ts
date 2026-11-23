import type {
  ExamConfig,
  ExamOption,
  ExamQuestion,
  ExamQuestionKind,
  ExamTopic,
} from "./types";

export interface PresentedQuestion {
  id: string;
  topic: ExamTopic;
  moduleId: string;
  prompt: string;
  options: ExamOption[];
  kind: ExamQuestionKind;
  marks: number;
  /** Display-safe stems: id and label only, never the correct option. */
  stems?: { id: string; label: string }[];
}

export function toPresentedQuestion(question: ExamQuestion): PresentedQuestion {
  return {
    id: question.id,
    topic: question.topic,
    moduleId: question.moduleId,
    prompt: question.prompt,
    options: question.options.map((option) => ({ ...option })),
    kind: question.kind ?? "single",
    marks: question.marks ?? question.stems?.length ?? 1,
    stems: question.stems?.map((stem) => ({ ...stem })),
  };
}

export function selectPresentedQuestions(
  config: ExamConfig,
  fixed: PresentedQuestion[],
  pool: PresentedQuestion[] = [],
  random: () => number = Math.random,
): PresentedQuestion[] {
  if (config.selection.mode === "fixed") {
    if (fixed.length !== config.questionCount) {
      throw new Error(
        `Exam ${config.examId} expected ${config.questionCount} fixed questions, received ${fixed.length}.`,
      );
    }
    const ids = new Set(fixed.map((question) => question.id));
    if (ids.size !== fixed.length) {
      throw new Error(`Exam ${config.examId} fixed questions contain duplicates.`);
    }
    return fixed;
  }

  if (new Set(pool.map((question) => question.id)).size !== pool.length) {
    throw new Error(`Exam ${config.examId} random pool contains duplicates.`);
  }
  if (pool.length < config.questionCount) {
    throw new Error(
      `Exam ${config.examId} random pool has ${pool.length} questions, needs ${config.questionCount}.`,
    );
  }

  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, config.questionCount);
}
