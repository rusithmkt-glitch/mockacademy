import { describe, expect, it } from "vitest";
import { examConfigs } from "@/data/exams/config";
import { examQuestionById } from "@/data/exams/questions";
import { selectExamQuestions } from "./selection";
import type { ExamConfig } from "./types";

function fixedIds(config: ExamConfig): string[] {
  if (config.selection.mode !== "fixed") {
    throw new Error("expected a fixed selection config");
  }
  return config.selection.questionIds;
}

function poolIds(config: ExamConfig): string[] {
  if (config.selection.mode !== "random") {
    throw new Error("expected a random selection config");
  }
  return config.selection.poolQuestionIds;
}

const policy = { formalFromAttempt: 3, scope: "per-exam" } as const;

describe("selectExamQuestions", () => {
  it("returns the fixed paper in the configured order", () => {
    const config = examConfigs["mock-a"];
    const selected = selectExamQuestions(config);

    expect(selected).toHaveLength(config.questionCount);
    expect(selected.map((question) => question.id)).toEqual(fixedIds(config));
    expect(new Set(selected.map((question) => question.id)).size).toBe(
      config.questionCount,
    );
  });

  it("samples a unique subset of the pool for randomised papers", () => {
    const config = examConfigs["mock-c"];
    const selected = selectExamQuestions(config, examQuestionById, () => 0.5);

    expect(selected).toHaveLength(config.questionCount);
    expect(new Set(selected.map((question) => question.id)).size).toBe(
      config.questionCount,
    );
    for (const question of selected) {
      expect(poolIds(config)).toContain(question.id);
    }
  });

  it("varies the sample when the random stream changes", () => {
    const config = examConfigs["mock-c"];
    const low = selectExamQuestions(config, examQuestionById, () => 0);
    const high = selectExamQuestions(config, examQuestionById, () => 0.999);

    expect(low.map((question) => question.id)).not.toEqual(
      high.map((question) => question.id),
    );
  });

  it("rejects duplicate ids in a fixed paper", () => {
    const config: ExamConfig = {
      examId: "duplicate",
      questionCount: 2,
      durationMinutes: 10,
      passMarkPercent: 60,
      selection: {
        mode: "fixed",
        questionIds: ["q-principles-1", "q-principles-1"],
      },
      attemptPolicy: policy,
    };

    expect(() => selectExamQuestions(config)).toThrow(/duplicate/i);
  });

  it("rejects unknown question ids", () => {
    const config: ExamConfig = {
      examId: "missing",
      questionCount: 1,
      durationMinutes: 10,
      passMarkPercent: 60,
      selection: { mode: "fixed", questionIds: ["q-does-not-exist"] },
      attemptPolicy: policy,
    };

    expect(() => selectExamQuestions(config)).toThrow(/unknown question/i);
  });

  it("rejects a fixed paper whose length does not match the config", () => {
    const config: ExamConfig = {
      examId: "short",
      questionCount: 5,
      durationMinutes: 10,
      passMarkPercent: 60,
      selection: { mode: "fixed", questionIds: ["q-principles-1"] },
      attemptPolicy: policy,
    };

    expect(() => selectExamQuestions(config)).toThrow(/expected 5/i);
  });

  it("rejects duplicate ids in a random pool", () => {
    const config: ExamConfig = {
      examId: "duplicate-pool",
      questionCount: 1,
      durationMinutes: 10,
      passMarkPercent: 60,
      selection: {
        mode: "random",
        poolQuestionIds: ["q-principles-1", "q-principles-1"],
      },
      attemptPolicy: policy,
    };

    expect(() => selectExamQuestions(config)).toThrow(/duplicate/i);
  });

  it("rejects a random pool smaller than the paper", () => {
    const config: ExamConfig = {
      examId: "small-pool",
      questionCount: 5,
      durationMinutes: 10,
      passMarkPercent: 60,
      selection: { mode: "random", poolQuestionIds: ["q-principles-1"] },
      attemptPolicy: policy,
    };

    expect(() => selectExamQuestions(config)).toThrow(/needs 5/i);
  });
});
