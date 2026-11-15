"use client";

import { ProgressBar } from "@/components/ui/progress";
import { getProgressPercent } from "@/lib/course";

export function LessonProgress({
  sessionIds,
  completedSessionIds,
  signedIn,
}: {
  sessionIds: string[];
  completedSessionIds: string[];
  signedIn: boolean;
}) {
  const completed = sessionIds.filter((id) =>
    completedSessionIds.includes(id),
  ).length;
  const percent = getProgressPercent(completed, sessionIds.length);

  return (
    <div className="mt-6 flex max-w-md items-center gap-3">
      <ProgressBar
        value={percent}
        className="h-1.5 flex-1"
        label="Course progress"
      />
      <span className="shrink-0 text-[0.65rem] text-muted-foreground">
        {signedIn
          ? `${completed} of ${sessionIds.length} complete`
          : "Sign in to track progress"}
      </span>
    </div>
  );
}
