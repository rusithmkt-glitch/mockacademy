import type { ExamConfig, ExamQuestion } from "./types";
import { examQuestionById } from "@/data/exams/questions";

export function selectExamQuestions(
  config: ExamConfig,
  bankIndex: Map<string, ExamQuestion> = examQuestionById,
  random: () => number = Math.random,
): ExamQuestion[] {
  const selection = config.selection;

  if (selection.mode === "fixed") {
    const unique = [...new Set(selection.questionIds)];
    if (unique.length !== selection.questionIds.length) {
      throw new Error(`Fixed selection for ${config.examId} contains duplicate questions.`);
    }
    const questions = unique.map((id) => {
      const question = bankIndex.get(id);
      if (!question) throw new Error(`Unknown question id: ${id}`);
      return question;
    });
    if (questions.length !== config.questionCount) {
      throw new Error(
        `Fixed selection for ${config.examId} has ${questions.length} questions, expected ${config.questionCount}.`,
      );
    }
    return questions;
  }

  const pool = selection.poolQuestionIds.map((id) => {
    const question = bankIndex.get(id);
    if (!question) throw new Error(`Unknown question id: ${id}`);
    return question;
  });
  if (new Set(pool.map((question) => question.id)).size !== pool.length) {
    throw new Error(`Random pool for ${config.examId} contains duplicate questions.`);
  }
  if (pool.length < config.questionCount) {
    throw new Error(
      `Random pool for ${config.examId} has ${pool.length} questions, needs ${config.questionCount}.`,
    );
  }

  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, config.questionCount);
}
