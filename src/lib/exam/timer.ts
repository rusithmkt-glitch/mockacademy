export const LOW_TIME_SECONDS = 5 * 60;

export function remainingSeconds(endAtMs: number, nowMs: number): number {
  return Math.max(0, Math.ceil((endAtMs - nowMs) / 1000));
}

export function formatClock(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function isLowTime(totalSeconds: number): boolean {
  return totalSeconds <= LOW_TIME_SECONDS;
}

export function shouldAutoSubmit(
  totalSeconds: number,
  alreadySubmitted: boolean,
): boolean {
  return totalSeconds <= 0 && !alreadySubmitted;
}
