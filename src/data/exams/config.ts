import type { ExamConfig, ExamTopic } from "@/lib/exam/types";
import { examQuestionBank } from "./questions";

function idsFor(topic: ExamTopic): string[] {
  return examQuestionBank
    .filter((question) => question.topic === topic)
    .map((question) => question.id);
}

function slice(topic: ExamTopic, from = 0, to?: number): string[] {
  return idsFor(topic).slice(from, to);
}

const defaultPolicy = { formalFromAttempt: 3, scope: "per-exam" } as const;

export const examConfigs: Record<string, ExamConfig> = {
  "mock-a": {
    examId: "mock-a",
    questionCount: 60,
    durationMinutes: 60,
    passMarkPercent: 60,
    selection: {
      mode: "fixed",
      questionIds: [
        ...slice("Principles", 0, 12),
        ...slice("People", 0, 10),
        ...slice("Practices", 0, 20),
        ...slice("Processes", 0, 12),
        ...slice("Project context", 0, 6),
      ],
    },
    attemptPolicy: defaultPolicy,
  },
  "mock-b": {
    examId: "mock-b",
    questionCount: 60,
    durationMinutes: 60,
    passMarkPercent: 60,
    selection: {
      mode: "fixed",
      questionIds: [
        ...slice("Principles", 2, 12),
        ...slice("People", 0, 10),
        ...slice("Practices", 2, 20),
        ...slice("Processes", 0, 12),
        ...slice("Project context", 0, 10),
      ],
    },
    attemptPolicy: defaultPolicy,
  },
  "mock-c": {
    examId: "mock-c",
    questionCount: 60,
    durationMinutes: 60,
    passMarkPercent: 60,
    selection: {
      mode: "random",
      poolQuestionIds: examQuestionBank.map((question) => question.id),
    },
    attemptPolicy: defaultPolicy,
  },
  "rapid-principles-people": {
    examId: "rapid-principles-people",
    questionCount: 20,
    durationMinutes: 20,
    passMarkPercent: 60,
    selection: {
      mode: "fixed",
      questionIds: [...slice("Principles", 0, 12), ...slice("People", 0, 8)],
    },
    attemptPolicy: defaultPolicy,
  },
  "processes-deep-dive": {
    examId: "processes-deep-dive",
    questionCount: 30,
    durationMinutes: 30,
    passMarkPercent: 60,
    selection: {
      mode: "fixed",
      questionIds: [...slice("Practices", 0, 20), ...slice("Processes", 0, 10)],
    },
    attemptPolicy: defaultPolicy,
  },
};

export function getExamConfig(examId: string): ExamConfig | undefined {
  return examConfigs[examId];
}

export const examTopics: ExamTopic[] = [
  "Principles",
  "People",
  "Practices",
  "Processes",
  "Project context",
];

export const topicModuleMap: Record<string, string> = {
  Principles: "foundations",
  People: "people",
  Practices: "planning-and-quality",
  Processes: "delivery-and-closure",
  "Project context": "starting-a-project",
};
