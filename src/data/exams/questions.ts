import { foundationMockQuestions } from "./foundation-mock";
import { practitionerMockQuestions } from "./practitioner-mock";
import { simulatorPoolQuestions } from "./simulator-pool";
import { ieltsReadingMockQuestions } from "./ielts-reading-mock";

/**
 * Original practice questions written for MockAcademy around the PRINCE2 7th
 * edition Foundation and Practitioner syllabuses and the Academic Reading
 * skill set. They are not PeopleCert or IELTS exam items.
 */
export const examQuestionBank = [
  ...foundationMockQuestions,
  ...practitionerMockQuestions,
  ...simulatorPoolQuestions,
  ...ieltsReadingMockQuestions,
];

export const examQuestionById = new Map(
  examQuestionBank.map((question) => [question.id, question]),
);
