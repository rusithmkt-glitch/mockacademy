"use client";

import type { ExamOption } from "@/lib/exam/types";
import { cn } from "@/lib/utils";

/**
 * Matching item from the Practitioner paper: every stem takes exactly one
 * answer from the shared option list, worth one mark per correct pair.
 */
export function MatchQuestion({
  stems,
  options,
  selectedByStem,
  onSelectStem,
  questionNumber,
}: {
  stems: { id: string; label: string }[];
  options: ExamOption[];
  selectedByStem: Record<string, string>;
  onSelectStem: (stemId: string, optionId: string | null) => void;
  questionNumber: number;
}) {
  return (
    <fieldset className="mt-5">
      <legend className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Match each situation to one option — 1 mark each
      </legend>
      <div className="space-y-2.5">
        {stems.map((stem, stemIndex) => {
          const selectedId = selectedByStem[stem.id] ?? "";
          return (
            <div
              key={stem.id}
              className={cn(
                "flex flex-col gap-2 rounded-xl border px-3.5 py-3 transition-colors sm:flex-row sm:items-center",
                selectedId
                  ? "border-primary/40 bg-accent/60"
                  : "border-border/70 bg-background",
              )}
            >
              <label
                htmlFor={`stem-${questionNumber}-${stem.id}`}
                className="flex flex-1 items-start gap-2.5 text-[0.84rem] leading-relaxed text-foreground/85"
              >
                <span className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full bg-navy text-[0.6rem] font-semibold tabular-nums text-white">
                  {stemIndex + 1}
                </span>
                <span>{stem.label}</span>
              </label>
              <div className="relative shrink-0 sm:w-[58%]">
                <select
                  id={`stem-${questionNumber}-${stem.id}`}
                  value={selectedId}
                  onChange={(event) =>
                    onSelectStem(stem.id, event.target.value || null)
                  }
                  className={cn(
                    "w-full appearance-none rounded-lg border bg-card px-3 py-2.5 pr-9 text-[0.8rem] leading-relaxed text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                    selectedId ? "border-primary/40" : "border-border",
                  )}
                >
                  <option value="">Choose an option…</option>
                  {options.map((option, optionIndex) => (
                    <option key={option.id} value={option.id}>
                      {String.fromCharCode(65 + optionIndex)}. {option.label}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  className="pointer-events-none absolute right-3 top-1/2 size-3 -translate-y-1/2 text-muted-foreground"
                >
                  <path
                    d="M2.5 4.5 6 8l3.5-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
