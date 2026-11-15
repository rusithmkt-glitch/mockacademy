"use client";

import { ProgressBar } from "@/components/ui/progress";
import { getProgressPercent } from "@/lib/course";
import { useDemoStore } from "@/lib/progress/provider";

export function LessonProgress({ sessionIds }: { sessionIds: string[] }) {
  const { completedSessionIds } = useDemoStore();
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
        {completed} of {sessionIds.length} complete
      </span>
    </div>
  );
}
