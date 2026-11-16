import { describe, expect, it } from "vitest";
import type { CheckQuestion } from "@/data/types";
import { course } from "@/lib/course";
import {
  getSessionAssessment,
  isAnswerComplete,
  isAnswerCorrect,
  scoreAssessment,
} from "./assessment";

function makeQuestion(
  id: string,
  correctOptionIds: string[],
  type: CheckQuestion["type"] = "single",
): CheckQuestion {
  return {
    id,
    type,
    prompt: id,
    options: ["a", "b", "c"].map((optionId) => ({
      id: optionId,
      label: optionId.toUpperCase(),
    })),
    correctOptionIds,
    explanation: "Because.",
    topic: "Principles",
  };
}

describe("isAnswerCorrect", () => {
  it("accepts an exact single answer", () => {
    const question = makeQuestion("q", ["b"]);
    expect(isAnswerCorrect(question, ["b"])).toBe(true);
    expect(isAnswerCorrect(question, ["a"])).toBe(false);
    expect(isAnswerCorrect(question, [])).toBe(false);
  });

  it("accepts multiple answers in any order", () => {
    const question = makeQuestion("q", ["a", "c"], "multiple");
    expect(isAnswerCorrect(question, ["c", "a"])).toBe(true);
  });

  it("gives no credit for partial or extra selections", () => {
    const question = makeQuestion("q", ["a", "c"], "multiple");
    expect(isAnswerCorrect(question, ["a"])).toBe(false);
    expect(isAnswerCorrect(question, ["a", "b", "c"])).toBe(false);
  });
});

describe("scoreAssessment", () => {
  it("scores the submitted answers", () => {
    const questions = [
      makeQuestion("q1", ["a"]),
      makeQuestion("q2", ["a", "c"], "multiple"),
      makeQuestion("q3", ["b"]),
    ];
    const result = scoreAssessment(questions, {
      q1: ["a"],
      q2: ["a"],
    });

    expect(result.correct).toBe(1);
    expect(result.total).toBe(3);
    expect(result.percent).toBe(33);
    expect(result.results.map((entry) => entry.correct)).toEqual([
      true,
      false,
      false,
    ]);
  });

  it("handles an empty assessment", () => {
    expect(scoreAssessment([], {})).toEqual({
      correct: 0,
      total: 0,
      percent: 0,
      results: [],
    });
  });
});

describe("isAnswerComplete", () => {
  it("requires one selection for single and boolean questions", () => {
    expect(isAnswerComplete(makeQuestion("q", ["a"]), [])).toBe(false);
    expect(isAnswerComplete(makeQuestion("q", ["a"]), ["a"])).toBe(true);
    expect(isAnswerComplete(makeQuestion("q", ["a"], "boolean"), ["a", "b"])).toBe(
      false,
    );
  });

  it("accepts any non-empty selection for multiple questions", () => {
    const question = makeQuestion("q", ["a"], "multiple");
    expect(isAnswerComplete(question, [])).toBe(false);
    expect(isAnswerComplete(question, ["a"])).toBe(true);
    expect(isAnswerComplete(question, ["a", "b"])).toBe(true);
  });
});

describe("getSessionAssessment", () => {
  it("uses the richer assessment when a session defines one", () => {
    const session = course.modules[0].sessions[0];
    expect(session.assessment?.length).toBeGreaterThan(0);
    expect(getSessionAssessment(session, "Principles")).toBe(
      session.assessment,
    );
  });

  it("falls back to the legacy knowledge check", () => {
    const session = { ...course.modules[0].sessions[0], assessment: undefined };

    const assessment = getSessionAssessment(session, "Principles");
    expect(assessment).toHaveLength(1);
    expect(assessment[0].type).toBe("single");
    expect(assessment[0].options.map((option) => option.id)).toEqual(
      session.knowledgeCheck.options.map((_, index) => "abcdef"[index]),
    );
    expect(assessment[0].correctOptionIds).toEqual([
      "abcdef"[session.knowledgeCheck.correctOption],
    ]);
    expect(assessment[0].explanation).toBe(session.knowledgeCheck.explanation);
  });
});
