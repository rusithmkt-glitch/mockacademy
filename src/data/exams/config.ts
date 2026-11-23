import type { ExamConfig, ExamTopic } from "@/lib/exam/types";
import { examTopicModules } from "./build";
import { foundationMockQuestions } from "./foundation-mock";
import { practitionerMockQuestions } from "./practitioner-mock";
import { simulatorPoolQuestions } from "./simulator-pool";
import { ieltsReadingMockQuestions } from "./ielts-reading-mock";

export const FOUNDATION_MOCK_ID = "foundation-mock";
export const PRACTITIONER_MOCK_ID = "practitioner-mock";
export const EXAM_SIMULATOR_ID = "exam-simulator";
export const IELTS_READING_MOCK_ID = "ielts-reading-mock";

export const examConfigs: Record<string, ExamConfig> = {
  [FOUNDATION_MOCK_ID]: {
    examId: FOUNDATION_MOCK_ID,
    questionCount: 60,
    durationMinutes: 60,
    passMarkPercent: 60,
    selection: {
      mode: "fixed",
      questionIds: foundationMockQuestions.map((question) => question.id),
    },
    attemptPolicy: { formalFromAttempt: 3, scope: "per-exam" },
  },
  [PRACTITIONER_MOCK_ID]: {
    examId: PRACTITIONER_MOCK_ID,
    questionCount: 56,
    durationMinutes: 150,
    passMarkPercent: 56,
    passMark: 38,
    totalMarks: 68,
    selection: {
      mode: "fixed",
      questionIds: practitionerMockQuestions.map((question) => question.id),
    },
    attemptPolicy: { formalFromAttempt: 3, scope: "per-exam" },
  },
  [EXAM_SIMULATOR_ID]: {
    examId: EXAM_SIMULATOR_ID,
    questionCount: 60,
    durationMinutes: 60,
    passMarkPercent: 60,
    selection: {
      mode: "random",
      poolQuestionIds: simulatorPoolQuestions.map((question) => question.id),
    },
    attemptPolicy: { formalFromAttempt: 11, scope: "per-exam" },
  },
  [IELTS_READING_MOCK_ID]: {
    examId: IELTS_READING_MOCK_ID,
    questionCount: 28,
    durationMinutes: 60,
    passMarkPercent: 58,
    passMark: 23,
    totalMarks: 40,
    selection: {
      mode: "fixed",
      questionIds: ieltsReadingMockQuestions.map((question) => question.id),
    },
    attemptPolicy: { formalFromAttempt: 3, scope: "per-exam" },
  },
};

export function getExamConfig(examId: string): ExamConfig | undefined {
  return examConfigs[examId];
}

export const examTopics = Object.keys(examTopicModules) as ExamTopic[];

export const topicModuleMap: Record<string, string> = { ...examTopicModules };
