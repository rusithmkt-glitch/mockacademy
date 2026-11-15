import { describe, expect, it } from "vitest";
import {
  LOW_TIME_SECONDS,
  formatClock,
  isLowTime,
  remainingSeconds,
  shouldAutoSubmit,
} from "./timer";

describe("remainingSeconds", () => {
  it("derives the countdown from timestamps", () => {
    expect(remainingSeconds(1_000_000, 910_000)).toBe(90);
  });

  it("rounds partial seconds up so the clock never shows zero early", () => {
    expect(remainingSeconds(1_000_000, 909_600)).toBe(91);
  });

  it("never returns a negative count", () => {
    expect(remainingSeconds(1_000, 5_000)).toBe(0);
  });
});

describe("formatClock", () => {
  it("formats minutes and seconds", () => {
    expect(formatClock(0)).toBe("00:00");
    expect(formatClock(65)).toBe("01:05");
    expect(formatClock(3_599)).toBe("59:59");
    expect(formatClock(3_600)).toBe("60:00");
  });

  it("clamps negative values and ignores fractions", () => {
    expect(formatClock(-5)).toBe("00:00");
    expect(formatClock(59.9)).toBe("00:59");
  });
});

describe("isLowTime", () => {
  it("warns from five minutes or less", () => {
    expect(isLowTime(LOW_TIME_SECONDS + 1)).toBe(false);
    expect(isLowTime(LOW_TIME_SECONDS)).toBe(true);
    expect(isLowTime(0)).toBe(true);
  });
});

describe("shouldAutoSubmit", () => {
  it("submits once when the clock expires", () => {
    expect(shouldAutoSubmit(1, false)).toBe(false);
    expect(shouldAutoSubmit(0, false)).toBe(true);
  });

  it("does not submit a second time", () => {
    expect(shouldAutoSubmit(0, true)).toBe(false);
    expect(shouldAutoSubmit(-10, true)).toBe(false);
  });
});
