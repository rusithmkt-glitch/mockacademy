import { foundationMockQuestions } from "./foundation-mock";
import { practitionerMockQuestions } from "./practitioner-mock";
import { simulatorPoolQuestions } from "./simulator-pool";

/**
 * Original practice questions written for MockAcademy around the PRINCE2 7th
 * edition Foundation and Practitioner syllabuses. They are not PeopleCert
 * exam items.
 */
export const examQuestionBank = [
  ...foundationMockQuestions,
  ...practitionerMockQuestions,
  ...simulatorPoolQuestions,
];

export const examQuestionById = new Map(
  examQuestionBank.map((question) => [question.id, question]),
);
