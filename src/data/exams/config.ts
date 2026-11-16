import type { ExamConfig, ExamTopic } from "@/lib/exam/types";
import { examTopicModules } from "./build";
import { foundationMockQuestions } from "./foundation-mock";
import { simulatorPoolQuestions } from "./simulator-pool";

export const FOUNDATION_MOCK_ID = "foundation-mock";
export const EXAM_SIMULATOR_ID = "exam-simulator";

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
};

export function getExamConfig(examId: string): ExamConfig | undefined {
  return examConfigs[examId];
}

export const examTopics = Object.keys(examTopicModules) as ExamTopic[];

export const topicModuleMap: Record<string, string> = { ...examTopicModules };
