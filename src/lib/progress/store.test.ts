import { afterEach, describe, expect, it, vi } from "vitest";
import { student } from "@/data/student";
import type { ExamResult } from "@/lib/exam/types";
import {
  DEMO_STORAGE_KEY,
  completeSession,
  createInitialState,
  loadDemoState,
  recordExamAttempt,
  sanitizeState,
  saveDemoState,
} from "./store";

function stubLocalStorage() {
  const store = new Map<string, string>();
  vi.stubGlobal("window", {
    localStorage: {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    },
  });
  return store;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

const result: ExamResult = {
  examId: "mock-a",
  examTitle: "Foundation Mock Exam A",
  score: 40,
  incorrect: 20,
  unanswered: 0,
  total: 60,
  percent: 67,
  passMarkPercent: 60,
  passed: true,
  durationUsedSeconds: 3_000,
  completedAt: "2026-11-15T10:00:00.000Z",
  topics: [{ topic: "Principles", correct: 8, total: 12, percent: 67 }],
  responses: [],
};

describe("createInitialState", () => {
  it("seeds the demo student's completed sessions", () => {
    const state = createInitialState();

    expect(state.completedSessionIds).toEqual(student.completedSessionIds);
    expect(state.checks).toEqual([]);
    expect(state.attempts).toEqual([]);
  });
});

describe("completeSession", () => {
  it("marks a session complete and records the check", () => {
    const state = completeSession(createInitialState(), {
      sessionId: "m4-s1",
      percent: 100,
      completedAt: "2026-11-15T09:00:00.000Z",
    });

    expect(state.completedSessionIds).toContain("m4-s1");
    expect(state.checks).toEqual([
      {
        sessionId: "m4-s1",
        attempts: 1,
        bestPercent: 100,
        lastPercent: 100,
        completedAt: "2026-11-15T09:00:00.000Z",
      },
    ]);
  });

  it("does not duplicate a completed session id", () => {
    const first = completeSession(createInitialState(), {
      sessionId: "m4-s1",
      percent: 100,
      completedAt: "2026-11-15T09:00:00.000Z",
    });
    const second = completeSession(first, {
      sessionId: "m4-s1",
      percent: 60,
      completedAt: "2026-11-15T09:30:00.000Z",
    });

    expect(
      second.completedSessionIds.filter((id) => id === "m4-s1"),
    ).toHaveLength(1);
  });

  it("tracks attempts, best score and latest score on retry", () => {
    let state = completeSession(createInitialState(), {
      sessionId: "m4-s1",
      percent: 40,
      completedAt: "2026-11-15T09:00:00.000Z",
    });
    state = completeSession(state, {
      sessionId: "m4-s1",
      percent: 80,
      completedAt: "2026-11-15T09:10:00.000Z",
    });
    state = completeSession(state, {
      sessionId: "m4-s1",
      percent: 60,
      completedAt: "2026-11-15T09:20:00.000Z",
    });

    expect(state.checks[0]).toMatchObject({
      attempts: 3,
      bestPercent: 80,
      lastPercent: 60,
      completedAt: "2026-11-15T09:20:00.000Z",
    });
  });
});

describe("recordExamAttempt", () => {
  it("prepends the newest attempt with its result summary", () => {
    const state = recordExamAttempt(createInitialState(), result);

    expect(state.attempts).toHaveLength(1);
    expect(state.attempts[0]).toMatchObject({
      examId: "mock-a",
      score: 40,
      total: 60,
      percent: 67,
      passed: true,
      durationUsedSeconds: 3_000,
      topics: result.topics,
    });
    expect(state.attempts[0].id).toContain("mock-a");
  });

  it("keeps older attempts after newer ones", () => {
    let state = recordExamAttempt(createInitialState(), result);
    state = recordExamAttempt(state, {
      ...result,
      examId: "mock-b",
      completedAt: "2026-11-15T11:00:00.000Z",
    });

    expect(state.attempts.map((attempt) => attempt.examId)).toEqual([
      "mock-b",
      "mock-a",
    ]);
  });
});

describe("sanitizeState", () => {
  it("rejects values that are not objects", () => {
    expect(sanitizeState(null)).toBeNull();
    expect(sanitizeState("nope")).toBeNull();
    expect(sanitizeState(42)).toBeNull();
  });

  it("drops malformed checks and attempts while keeping valid data", () => {
    const state = sanitizeState({
      completedSessionIds: ["m1-s1", 7, "m1-s1", "m4-s2"],
      checks: [
        {
          sessionId: "m1-s1",
          attempts: "many",
          bestPercent: 50,
          lastPercent: 50,
          completedAt: "x",
        },
        {
          sessionId: "m4-s2",
          attempts: 1,
          bestPercent: 100,
          lastPercent: 100,
          completedAt: "2026-11-15T09:00:00.000Z",
        },
      ],
      attempts: [
        { id: "broken" },
        {
          id: "attempt-ok",
          examId: "mock-a",
          examTitle: "A",
          completedAt: "2026-11-15T10:00:00.000Z",
          score: 40,
          total: 60,
          percent: 67,
          passed: true,
          durationUsedSeconds: 3_000,
          topics: [],
        },
      ],
    });

    expect(state?.completedSessionIds).toEqual(["m1-s1", "m4-s2"]);
    expect(state?.checks).toHaveLength(1);
    expect(state?.attempts.map((attempt) => attempt.id)).toEqual([
      "attempt-ok",
    ]);
  });

  it("defaults missing collections to empty arrays", () => {
    expect(sanitizeState({})).toEqual({
      completedSessionIds: [],
      checks: [],
      attempts: [],
    });
  });
});

describe("loadDemoState and saveDemoState", () => {
  it("returns the base demo state when nothing is stored", () => {
    stubLocalStorage();
    expect(loadDemoState()).toEqual(createInitialState());
  });

  it("merges stored progress with the seeded demo sessions", () => {
    stubLocalStorage();
    saveDemoState({
      completedSessionIds: ["m5-s1"],
      checks: [],
      attempts: [],
    });

    const state = loadDemoState();
    expect(state.completedSessionIds).toEqual(
      expect.arrayContaining([...student.completedSessionIds, "m5-s1"]),
    );
  });

  it("falls back safely when storage is corrupted", () => {
    const store = stubLocalStorage();
    store.set(DEMO_STORAGE_KEY, "{not json");

    expect(loadDemoState()).toEqual(createInitialState());
  });

  it("persists the versioned demo key", () => {
    const store = stubLocalStorage();
    const state = createInitialState();
    saveDemoState(state);

    expect(JSON.parse(store.get(DEMO_STORAGE_KEY)!)).toEqual(state);
  });
});
