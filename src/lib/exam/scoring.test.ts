import { describe, expect, it } from "vitest";
import type { ExamQuestion, ExamTopic, StudentResponse } from "./types";
import {
  formatReviewAnswer,
  getCorrectOption,
  passThreshold,
  scoreExam,
} from "./scoring";

function makeQuestion(
  id: string,
  topic: ExamTopic,
  correctOptionId = "a",
): ExamQuestion {
  return {
    id,
    topic,
    moduleId: "m1",
    prompt: `Question ${id}`,
    options: ["a", "b", "c", "d"].map((optionId) => ({
      id: optionId,
      label: `Option ${optionId}`,
    })),
    correctOptionId,
    explanation: "Because.",
  };
}

const questions: ExamQuestion[] = [
  makeQuestion("q1", "Principles"),
  makeQuestion("q2", "Principles", "b"),
  makeQuestion("q3", "People"),
  makeQuestion("q4", "People"),
];

function response(
  questionId: string,
  selectedOptionIds: string[],
): StudentResponse {
  return { questionId, selectedOptionIds, flagged: false };
}

function score(responses: StudentResponse[], passMarkPercent = 60) {
  return scoreExam({
    examId: "test",
    examTitle: "Test paper",
    questions,
    responses,
    passMarkPercent,
    durationUsedSeconds: 120,
    completedAt: "2026-11-15T10:00:00.000Z",
  });
}

describe("passThreshold", () => {
  it("uses the configured pass percentage, rounded up", () => {
    expect(passThreshold(60, 60)).toBe(36);
    expect(passThreshold(30, 60)).toBe(18);
    expect(passThreshold(20, 60)).toBe(12);
    expect(passThreshold(59, 60)).toBe(36);
    expect(passThreshold(0, 60)).toBe(0);
  });
});

describe("scoreExam", () => {
  it("scores a perfect attempt", () => {
    const result = score([
      response("q1", ["a"]),
      response("q2", ["b"]),
      response("q3", ["a"]),
      response("q4", ["a"]),
    ]);

    expect(result.score).toBe(4);
    expect(result.incorrect).toBe(0);
    expect(result.unanswered).toBe(0);
    expect(result.percent).toBe(100);
    expect(result.passed).toBe(true);
    expect(result.topics).toEqual([
      { topic: "Principles", correct: 2, total: 2, percent: 100 },
      { topic: "People", correct: 2, total: 2, percent: 100 },
    ]);
  });

  it("separates incorrect answers from unanswered questions", () => {
    const result = score([response("q1", ["a"]), response("q2", ["c"])]);

    expect(result.score).toBe(1);
    expect(result.incorrect).toBe(1);
    expect(result.unanswered).toBe(2);
    expect(result.percent).toBe(25);
    expect(result.passed).toBe(false);
  });

  it("aggregates topic performance", () => {
    const result = score([
      response("q1", ["a"]),
      response("q2", ["c"]),
      response("q3", ["b"]),
    ]);

    const principles = result.topics.find(
      (topic) => topic.topic === "Principles",
    );
    const people = result.topics.find((topic) => topic.topic === "People");

    expect(principles).toEqual({
      topic: "Principles",
      correct: 1,
      total: 2,
      percent: 50,
    });
    expect(people).toEqual({
      topic: "People",
      correct: 0,
      total: 2,
      percent: 0,
    });
  });

  it("passes exactly at the threshold and fails one below it", () => {
    const passing = score(
      [response("q1", ["a"]), response("q2", ["b"]), response("q3", []) , response("q4", [])],
      50,
    );
    expect(passThreshold(4, 50)).toBe(2);
    expect(passing.passed).toBe(true);

    const failing = score(
      [response("q1", ["a"]), response("q2", ["c"]), response("q3", []), response("q4", [])],
      50,
    );
    expect(failing.score).toBe(1);
    expect(failing.passed).toBe(false);
  });

  it("keeps the response order aligned with the question order", () => {
    const result = score([
      response("q3", ["a"]),
      response("q1", ["a"]),
    ]);

    expect(result.responses.map((entry) => entry.questionId)).toEqual([
      "q1",
      "q2",
      "q3",
      "q4",
    ]);
    expect(result.responses[1].selectedOptionIds).toEqual([]);
  });
});

describe("review helpers", () => {
  it("returns the correct option for a question", () => {
    expect(getCorrectOption(questions[1])).toEqual({
      id: "b",
      label: "Option b",
    });
  });

  it("formats selected option labels for review", () => {
    expect(formatReviewAnswer(questions[0], ["a", "c"])).toBe(
      "Option a, Option c",
    );
    expect(formatReviewAnswer(questions[0], [])).toBe("No answer selected");
  });
});
