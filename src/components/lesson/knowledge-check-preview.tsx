"use client";

import { useId, useState } from "react";
import {
  Check,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  X,
  XCircle,
} from "lucide-react";
import type { KnowledgeCheck } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function KnowledgeCheckPreview({
  check,
  topic,
}: {
  check: KnowledgeCheck;
  topic?: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const groupName = useId();
  const headingId = useId();
  const isCorrect = checked && selected === check.correctOption;

  function reset() {
    setSelected(null);
    setChecked(false);
  }

  return (
    <section
      aria-labelledby={headingId}
      data-reveal
      className="mt-12 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
    >
      <div className="flex items-center justify-between gap-3">
        <Badge tone="mint">
          <Sparkles className="size-3" aria-hidden="true" />
          Knowledge check
        </Badge>
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          Preview
        </span>
      </div>

      <h2 id={headingId} className="sr-only">
        Knowledge check
      </h2>

      <div className="mt-4 rounded-2xl border border-border/70 bg-background p-4 sm:p-5">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {topic ?? "Check your understanding"}
        </p>
        <p className="mt-2 text-pretty text-[1.02rem] font-medium leading-relaxed text-foreground">
          {check.question}
        </p>

        <fieldset className="mt-4" disabled={checked}>
          <legend className="sr-only">{check.question}</legend>
          <div className="space-y-2">
            {check.options.map((option, index) => {
              const isSelected = selected === index;
              const isRight = checked && index === check.correctOption;
              const isWrong = checked && isSelected && !isRight;

              return (
                <label
                  key={option}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/60",
                    checked
                      ? isRight
                        ? "border-mint bg-mint-soft"
                        : isWrong
                          ? "border-destructive/40 bg-destructive/5"
                          : "border-border/60 bg-white opacity-55"
                      : isSelected
                        ? "border-mint bg-mint-soft"
                        : "border-border/70 bg-white hover:border-mint/60 hover:bg-mint-soft/40",
                  )}
                >
                  <input
                    type="radio"
                    name={groupName}
                    value={option}
                    checked={isSelected}
                    onChange={() => setSelected(index)}
                    className="sr-only"
                  />
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-full border text-[0.65rem] font-semibold",
                      isRight
                        ? "border-mint bg-mint text-navy"
                        : isWrong
                          ? "border-destructive bg-destructive text-white"
                          : isSelected
                            ? "border-mint bg-mint text-navy"
                            : "border-border bg-white text-muted-foreground",
                    )}
                  >
                    {isRight ? (
                      <>
                        <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                        <span className="sr-only">Correct answer</span>
                      </>
                    ) : isWrong ? (
                      <>
                        <X className="size-3.5" strokeWidth={3} aria-hidden="true" />
                        <span className="sr-only">Your answer, incorrect</span>
                      </>
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span
                    className={cn(
                      "flex-1 text-[0.86rem] leading-relaxed",
                      isRight || isWrong
                        ? "font-medium text-foreground"
                        : "text-foreground/75",
                    )}
                  >
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {checked ? (
          <Button
            type="button"
            variant="outline"
            size="cta"
            onClick={reset}
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Try again
          </Button>
        ) : (
          <>
            <Button
              type="button"
              size="cta"
              onClick={() => setChecked(true)}
              disabled={selected === null}
            >
              Check answer
            </Button>
            <span className="text-[0.72rem] text-muted-foreground">
              Choose one answer to check.
            </span>
          </>
        )}
      </div>

      <div aria-live="polite">
        {checked ? (
          <div
            className={cn(
              "mt-4 flex items-start gap-3 rounded-xl border p-4",
              isCorrect
                ? "border-mint/60 bg-mint-soft"
                : "border-destructive/20 bg-destructive/5",
            )}
          >
            <span
              className={cn(
                "mt-0.5 shrink-0",
                isCorrect ? "text-navy" : "text-destructive",
              )}
            >
              {isCorrect ? (
                <CheckCircle2 className="size-4" aria-hidden="true" />
              ) : (
                <XCircle className="size-4" aria-hidden="true" />
              )}
            </span>
            <div>
              <p
                className={cn(
                  "text-[0.82rem] font-semibold",
                  isCorrect ? "text-navy" : "text-destructive",
                )}
              >
                {isCorrect ? "Correct" : "Not quite"}
              </p>
              <p className="mt-1 text-pretty text-[0.8rem] leading-relaxed text-foreground/70">
                {check.explanation}
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <p className="mt-4 border-t border-border pt-3 text-[0.65rem] leading-relaxed text-muted-foreground">
        Demonstration only — your answer is not saved and does not change your
        course progress.
      </p>
    </section>
  );
}
