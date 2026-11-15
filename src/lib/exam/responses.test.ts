import { describe, expect, it } from "vitest";
import type { PresentedQuestion } from "./presentation";
import {
  countAnswered,
  countFlagged,
  isAnswered,
  selectOption,
  toStudentResponses,
  toggleFlag,
} from "./responses";

const questions: PresentedQuestion[] = ["q1", "q2", "q3"].map((id) => ({
  id,
  topic: "Principles",
  moduleId: "m1",
  prompt: id,
  options: [
    { id: "a", label: "A" },
    { id: "b", label: "B" },
  ],
}));

describe("selectOption", () => {
  it("records a single selection per question", () => {
    let responses = selectOption({}, "q1", "a");
    responses = selectOption(responses, "q1", "b");

    expect(responses.q1.selectedOptionIds).toEqual(["b"]);
  });

  it("preserves the marked-for-review flag", () => {
    let responses = toggleFlag({}, "q1");
    responses = selectOption(responses, "q1", "a");

    expect(responses.q1).toEqual({ selectedOptionIds: ["a"], flagged: true });
  });

  it("keeps answers for other questions untouched", () => {
    const first = selectOption({}, "q1", "a");
    const second = selectOption(first, "q2", "b");

    expect(second.q1.selectedOptionIds).toEqual(["a"]);
    expect(second.q2.selectedOptionIds).toEqual(["b"]);
  });
});

describe("toggleFlag", () => {
  it("toggles the flag without losing the selected answer", () => {
    let responses = selectOption({}, "q1", "b");
    responses = toggleFlag(responses, "q1");
    expect(responses.q1).toEqual({ selectedOptionIds: ["b"], flagged: true });

    responses = toggleFlag(responses, "q1");
    expect(responses.q1).toEqual({ selectedOptionIds: ["b"], flagged: false });
  });
});

describe("counts", () => {
  it("tracks answered and flagged questions", () => {
    const responses = {
      q1: { selectedOptionIds: ["a"], flagged: true },
      q2: { selectedOptionIds: [], flagged: false },
      q3: { selectedOptionIds: ["b"], flagged: true },
    };

    expect(isAnswered("q1", responses)).toBe(true);
    expect(isAnswered("q2", responses)).toBe(false);
    expect(isAnswered("missing", responses)).toBe(false);
    expect(countAnswered(questions, responses)).toBe(2);
    expect(countFlagged(questions, responses)).toBe(2);
  });
});

describe("toStudentResponses", () => {
  it("emits a response for every question in paper order", () => {
    const responses = { q2: { selectedOptionIds: ["a"], flagged: true } };

    expect(toStudentResponses(questions, responses)).toEqual([
      { questionId: "q1", selectedOptionIds: [], flagged: false },
      { questionId: "q2", selectedOptionIds: ["a"], flagged: true },
      { questionId: "q3", selectedOptionIds: [], flagged: false },
    ]);
  });
});
