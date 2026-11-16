import { foundationMockQuestions } from "./foundation-mock";
import { simulatorPoolQuestions } from "./simulator-pool";

/**
 * Original practice questions written for MockAcademy around the PRINCE2 7th
 * edition Foundation syllabus. They are not PeopleCert exam items.
 */
export const examQuestionBank = [
  ...foundationMockQuestions,
  ...simulatorPoolQuestions,
];

export const examQuestionById = new Map(
  examQuestionBank.map((question) => [question.id, question]),
);
