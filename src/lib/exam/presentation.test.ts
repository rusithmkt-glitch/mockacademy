import { describe, expect, it } from "vitest";
import { EXAM_SIMULATOR_ID, FOUNDATION_MOCK_ID, examConfigs } from "@/data/exams/config";
import { examQuestionBank } from "@/data/exams/questions";
import { selectPresentedQuestions, toPresentedQuestion } from "./presentation";

describe("toPresentedQuestion", () => {
  it("exposes only student-facing fields", () => {
    const question = examQuestionBank[0];
    const presented = toPresentedQuestion(question);

    expect(presented).not.toHaveProperty("correctOptionId");
    expect(presented).not.toHaveProperty("explanation");
    expect(presented.id).toBe(question.id);
    expect(presented.prompt).toBe(question.prompt);
    expect(presented.options).toEqual(question.options);
  });

  it("copies the option list so presentation cannot mutate the bank", () => {
    const question = examQuestionBank[0];
    const presented = toPresentedQuestion(question);

    expect(presented.options).not.toBe(question.options);
    expect(presented.options[0]).not.toBe(question.options[0]);
  });
});

describe("selectPresentedQuestions", () => {
  it("passes a valid fixed set through unchanged", () => {
    const config = examConfigs[FOUNDATION_MOCK_ID];
    const presented = examQuestionBank
      .slice(0, config.questionCount)
      .map(toPresentedQuestion);

    expect(selectPresentedQuestions(config, presented)).toEqual(presented);
  });

  it("rejects a fixed set with the wrong number of questions", () => {
    const config = examConfigs[FOUNDATION_MOCK_ID];
    const presented = [toPresentedQuestion(examQuestionBank[0])];

    expect(() => selectPresentedQuestions(config, presented)).toThrow(
      /expected/i,
    );
  });

  it("rejects duplicate questions in a fixed set", () => {
    const config = examConfigs[FOUNDATION_MOCK_ID];
    const question = toPresentedQuestion(examQuestionBank[0]);
    const presented = Array.from({ length: config.questionCount }, () => ({
      ...question,
      options: question.options.map((option) => ({ ...option })),
    }));

    expect(() => selectPresentedQuestions(config, presented)).toThrow(
      /duplicate/i,
    );
  });

  it("samples unique pool questions for randomised papers", () => {
    const config = examConfigs[EXAM_SIMULATOR_ID];
    const pool = examQuestionBank.map(toPresentedQuestion);
    const selected = selectPresentedQuestions(config, [], pool, () => 0.5);

    expect(selected).toHaveLength(config.questionCount);
    expect(new Set(selected.map((question) => question.id)).size).toBe(
      config.questionCount,
    );
  });

  it("rejects an undersized random pool", () => {
    const config = examConfigs[EXAM_SIMULATOR_ID];
    const pool = [toPresentedQuestion(examQuestionBank[0])];

    expect(() => selectPresentedQuestions(config, [], pool)).toThrow(
      /needs 60/i,
    );
  });
});
