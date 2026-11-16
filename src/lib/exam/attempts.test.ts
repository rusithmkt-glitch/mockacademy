import { describe, expect, it } from "vitest";
import { describeAttemptMode, getAttemptMode, getAttemptNumber } from "./attempts";
import type { AttemptPolicy } from "./types";

const perExam: AttemptPolicy = { formalFromAttempt: 3, scope: "per-exam" };
const global: AttemptPolicy = { formalFromAttempt: 3, scope: "global" };

const attempts = [
  { examId: "foundation-mock" },
  { examId: "exam-simulator" },
  { examId: "foundation-mock" },
];

describe("getAttemptNumber", () => {
  it("counts prior attempts per exam", () => {
    expect(getAttemptNumber([], "foundation-mock", perExam)).toBe(1);
    expect(getAttemptNumber(attempts, "foundation-mock", perExam)).toBe(3);
    expect(getAttemptNumber(attempts, "future-paper", perExam)).toBe(1);
  });

  it("counts all attempts when the policy scope is global", () => {
    expect(getAttemptNumber(attempts, "future-paper", global)).toBe(4);
  });
});

describe("getAttemptMode", () => {
  it("allows feedback on the first two attempts by default", () => {
    expect(getAttemptMode(1, perExam)).toBe("study");
    expect(getAttemptMode(2, perExam)).toBe("study");
    expect(getAttemptMode(3, perExam)).toBe("formal");
    expect(getAttemptMode(9, perExam)).toBe("formal");
  });

  it("describes each mode for the learner", () => {
    expect(describeAttemptMode("study")).toMatch(/check each answer/i);
    expect(describeAttemptMode("formal")).toMatch(/after submission/i);
  });
});
