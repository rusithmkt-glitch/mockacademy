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

describe("matching and weighted items", () => {
  const matchQuestion: ExamQuestion = {
    id: "mq1",
    topic: "Risks",
    moduleId: "m9",
    prompt: "Match each situation to a response.",
    options: ["a", "b", "c"].map((optionId) => ({
      id: optionId,
      label: `Option ${optionId}`,
    })),
    correctOptionId: "",
    explanation: "Because.",
    kind: "match",
    marks: 3,
    stems: [
      { id: "s1", label: "First", correctOptionId: "a" },
      { id: "s2", label: "Second", correctOptionId: "b" },
      { id: "s3", label: "Third", correctOptionId: "c" },
    ],
  };

  function scoreMatch(selectedByStem: Record<string, string>) {
    return scoreExam({
      examId: "prac",
      examTitle: "Practitioner paper",
      questions: [makeQuestion("q1", "Principles"), matchQuestion],
      responses: [
        {
          questionId: "q1",
          selectedOptionIds: ["a"],
          flagged: false,
        },
        {
          questionId: "mq1",
          selectedOptionIds: [...new Set(Object.values(selectedByStem))],
          flagged: false,
          selectedByStem,
        },
      ],
      passMarkPercent: 60,
      passMark: 4,
      durationUsedSeconds: 60,
      completedAt: "2026-11-23T10:00:00.000Z",
    });
  }

  it("awards one mark per correct stem", () => {
    const result = scoreMatch({ s1: "a", s2: "c", s3: "c" });

    expect(result.score).toBe(3); // q1 + s1 + s3
    expect(result.total).toBe(4); // 1 mark + 3 marks
    expect(result.percent).toBe(75);
  });

  it("scores a fully correct matching item at full marks", () => {
    const result = scoreMatch({ s1: "a", s2: "b", s3: "c" });

    expect(result.score).toBe(4);
    expect(result.unanswered).toBe(0);
    expect(result.passed).toBe(true);
  });

  it("prefers the absolute pass mark over the percentage", () => {
    const result = scoreMatch({ s1: "a", s2: "b", s3: "z" });

    expect(result.score).toBe(3);
    expect(result.passed).toBe(false); // 75% would pass, 3 < passMark 4 does not
    expect(result.passMark).toBe(4);
  });

  it("reports topic totals in marks", () => {
    const result = scoreMatch({ s1: "a", s2: "b", s3: "z" });

    const risks = result.topics.find((topic) => topic.topic === "Risks");
    expect(risks).toEqual({
      topic: "Risks",
      correct: 2,
      total: 3,
      percent: 67,
    });
  });

  it("falls back to the percentage rule when no pass mark is set", () => {
    expect(passThreshold(68, 55, 38)).toBe(38);
    expect(passThreshold(68, 55)).toBe(38);
    expect(passThreshold(60, 60, undefined)).toBe(36);
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
