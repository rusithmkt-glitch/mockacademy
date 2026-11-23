"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock3,
  FileText,
  Flag,
  Layers,
  Send,
} from "lucide-react";
import type { AttemptMode } from "@/lib/exam/types";
import type { PresentedQuestion } from "@/lib/exam/presentation";
import {
  countAnswered,
  countFlagged,
  isAnswered,
  type ResponseMap,
} from "@/lib/exam/responses";
import { formatClock } from "@/lib/exam/timer";
import type { DbReferenceMaterial } from "@/lib/exams/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress";
import { PromptStatements, splitPrompt } from "./question-prompt";
import { MatchQuestion } from "./match-question";
import { ScenarioPanel } from "./scenario-panel";
import { scrollToElement } from "@/components/motion/smooth-scroll";
import { cn } from "@/lib/utils";

export interface ExamFeedback {
  kind: "single" | "match";
  marks: number;
  stems: {
    id: string;
    label: string;
    selectedOptionId?: string;
    correctOptionId?: string;
  }[];
  correctOptionId: string;
  explanation: string;
  isCorrect: boolean;
}

export function ExamSession({
  examTitle,
  attemptNumber,
  mode,
  questions,
  index,
  responses,
  remaining,
  lowTime,
  saveError,
  submitting = false,
  referenceMaterials = [],
  onSelect,
  onSelectStem,
  onToggleFlag,
  onNavigate,
  onSubmit,
}: {
  examTitle: string;
  attemptNumber: number;
  mode: AttemptMode;
  questions: PresentedQuestion[];
  index: number;
  responses: ResponseMap;
  remaining: number;
  lowTime: boolean;
  saveError?: string | null;
  submitting?: boolean;
  referenceMaterials?: DbReferenceMaterial[];
  onSelect: (optionId: string) => void;
  onSelectStem: (stemId: string, optionId: string | null) => void;
  onToggleFlag: () => void;
  onNavigate: (index: number) => void;
  onSubmit: () => void;
}) {
  const [confirming, setConfirming] = useState(false);
  const [scenarioOpen, setScenarioOpen] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    if (cardRef.current) scrollToElement(cardRef.current);
  }, [index]);

  const question = questions[index];
  if (!question) return null;

  const total = questions.length;
  const answered = countAnswered(questions, responses);
  const flagged = countFlagged(questions, responses);
  const unanswered = total - answered;
  const current = responses[question.id];
  const selectedId = current?.selectedOptionIds[0];
  const selectedByStem = current?.selectedByStem ?? {};
  const isFlagged = current?.flagged ?? false;
  const isMatch = question.kind === "match";

  return (
    <div className="mt-6">
      <div className="sticky top-16 z-30 -mx-5 border-b border-border bg-background/95 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="min-w-0">
            <p className="truncate text-[0.72rem] font-semibold text-foreground">
              {examTitle}
            </p>
            <p className="mt-0.5 text-[0.62rem] text-muted-foreground">
              Attempt {attemptNumber} ·{" "}
              {mode === "study" ? "Study mode" : "Formal mode"} · Answered{" "}
              {answered} of {total}
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            {referenceMaterials.length > 0 ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setScenarioOpen(true)}
              >
                <FileText className="size-3.5" aria-hidden="true" />
                Scenario
              </Button>
            ) : null}
            <span
              role="timer"
              aria-label="Time remaining"
              className={cn(
                "inline-flex h-9 items-center gap-1.5 rounded-full border px-3 font-mono text-[0.8rem] font-semibold tabular-nums",
                lowTime
                  ? "border-destructive/30 bg-destructive/10 text-destructive"
                  : "border-border bg-card text-foreground",
              )}
            >
              <Clock3 className="size-3.5" aria-hidden="true" />
              {formatClock(remaining)}
            </span>
            <Button
              type="button"
              variant="navy"
              onClick={() => setConfirming(true)}
              disabled={submitting}
            >
              <Send className="size-3.5" aria-hidden="true" />
              {submitting ? "Submitting…" : "Submit"}
            </Button>
          </div>
        </div>

        {confirming ? (
          <div
            role="alert"
            className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber/70 bg-amber-soft px-3.5 py-2.5"
          >
            <p className="text-[0.78rem] text-navy">
              {unanswered > 0
                ? `${unanswered} question${unanswered === 1 ? "" : "s"} still unanswered. `
                : "All questions answered. "}
              Submit the paper now?
            </p>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setConfirming(false)}
              >
                Keep working
              </Button>
              <Button type="button" variant="navy" size="sm" onClick={onSubmit} disabled={submitting}>
                {submitting ? "Submitting…" : "Submit paper"}
              </Button>
            </div>
          </div>
        ) : null}

        {lowTime ? (
          <p className="mt-2 text-[0.66rem] font-medium text-destructive">
            Low time — the paper submits automatically when the timer reaches
            zero.
          </p>
        ) : null}
      </div>

      {saveError ? (
        <div
          role="alert"
          className="mt-3 flex items-start gap-2.5 rounded-xl border border-destructive/25 bg-destructive/5 p-3.5 text-[0.75rem] leading-relaxed text-destructive"
        >
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>{saveError}</p>
        </div>
      ) : null}

      <div className="grid gap-5 pt-5 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <section
          ref={cardRef}
          aria-labelledby="exam-question-title"
          className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge tone="lavender">
                Question {index + 1} of {total}
              </Badge>
              <span className="rounded-full bg-muted/60 px-2.5 py-1 text-[0.62rem] font-medium text-muted-foreground">
                {question.topic}
              </span>
              {isMatch ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-lavender px-2.5 py-1 text-[0.62rem] font-medium text-navy">
                  <Layers className="size-3" aria-hidden="true" />
                  {question.marks} marks · 1 per correct match
                </span>
              ) : question.marks > 1 ? (
                <span className="rounded-full bg-lavender px-2.5 py-1 text-[0.62rem] font-medium text-navy">
                  {question.marks} marks
                </span>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onToggleFlag}
              aria-pressed={isFlagged}
              className={cn(
                "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-[0.68rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                isFlagged
                  ? "border-amber bg-amber-soft text-navy"
                  : "border-border bg-background text-muted-foreground hover:bg-muted",
              )}
            >
              <Flag
                className={cn("size-3.5", isFlagged && "fill-current")}
                aria-hidden="true"
              />
              {isFlagged ? "Flagged" : "Flag for review"}
            </button>
          </div>

          <h2
            id="exam-question-title"
            className="mt-4 text-pretty font-heading text-[1.22rem] font-semibold leading-relaxed text-foreground sm:text-[1.32rem]"
          >
            {splitPrompt(question.prompt).lead}
          </h2>
          {isMatch ? (
            <MatchQuestion
              stems={question.stems ?? []}
              options={question.options}
              selectedByStem={selectedByStem}
              onSelectStem={onSelectStem}
              questionNumber={index + 1}
            />
          ) : (
            <>
              <PromptStatements prompt={question.prompt} />

              <fieldset className="mt-5">
                <legend className="sr-only">
                  Choose one answer for question {index + 1}
                </legend>
                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selectedId === option.id;

                    return (
                      <label
                        key={option.id}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/60",
                          isSelected
                            ? "border-primary/40 bg-accent"
                            : "border-border/70 bg-background hover:border-primary/25 hover:bg-accent/40",
                        )}
                      >
                        <input
                          type="radio"
                          name="exam-option"
                          value={option.id}
                          checked={isSelected}
                          onChange={() => onSelect(option.id)}
                          className="sr-only"
                        />
                        <span
                          className={cn(
                            "flex size-6 shrink-0 items-center justify-center rounded-full border text-[0.65rem] font-semibold",
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background text-muted-foreground",
                          )}
                        >
                          {isSelected ? (
                            <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                          ) : (
                            String.fromCharCode(65 + optionIndex)
                          )}
                        </span>
                        <span className="flex-1 text-[0.86rem] leading-relaxed text-foreground/80">
                          {option.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </>
          )}

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
            <Button
              type="button"
              variant="outline"
              size="cta"
              onClick={() => onNavigate(index - 1)}
              disabled={index === 0}
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              Previous
            </Button>
            <span className="text-[0.68rem] tabular-nums text-muted-foreground">
              {index + 1} / {total}
            </span>
            {index === total - 1 ? (
              <Button
                type="button"
                variant="navy"
                size="cta"
                onClick={() => setConfirming(true)}
                disabled={submitting}
              >
                Review &amp; submit
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            ) : (
              <Button
                type="button"
                size="cta"
                onClick={() => onNavigate(index + 1)}
              >
                Next
                <ChevronRight className="size-4" aria-hidden="true" />
              </Button>
            )}
          </div>
        </section>

        <aside className="self-start lg:sticky lg:top-36">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Question palette
              </p>
              <span className="text-[0.62rem] tabular-nums text-muted-foreground">
                {answered}/{total}
              </span>
            </div>
            <ProgressBar
              value={(answered / total) * 100}
              label="Answered questions"
              className="mt-2 h-1"
            />
            <div className="mt-3 grid grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-5">
              {questions.map((item, itemIndex) => {
                const itemAnswered = isAnswered(item.id, responses);
                const itemFlagged = responses[item.id]?.flagged;
                const isCurrent = itemIndex === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(itemIndex)}
                    aria-label={`Question ${itemIndex + 1}${itemAnswered ? ", answered" : ", unanswered"}${itemFlagged ? ", flagged" : ""}`}
                    aria-current={isCurrent ? "step" : undefined}
                    className={cn(
                      "relative flex h-9 items-center justify-center rounded-lg border text-[0.7rem] font-semibold tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      itemAnswered
                        ? "border-navy bg-navy text-white"
                        : "border-border bg-background text-foreground hover:bg-muted",
                      isCurrent && "ring-2 ring-primary ring-offset-1",
                    )}
                  >
                    {itemIndex + 1}
                    {itemFlagged ? (
                      <span className="absolute -right-1 -top-1 size-2.5 rounded-full border border-card bg-amber" />
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-[0.6rem] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm bg-navy" /> Answered
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm border border-border bg-background" />{" "}
                Unanswered
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-amber" /> Flagged
              </span>
            </div>

            <dl className="mt-3 grid grid-cols-3 gap-1.5 border-t border-border pt-3 text-center">
              <div>
                <dt className="text-[0.56rem] uppercase tracking-[0.1em] text-muted-foreground">
                  Answered
                </dt>
                <dd className="mt-0.5 text-[0.82rem] font-semibold tabular-nums text-foreground">
                  {answered}
                </dd>
              </div>
              <div>
                <dt className="text-[0.56rem] uppercase tracking-[0.1em] text-muted-foreground">
                  Flagged
                </dt>
                <dd className="mt-0.5 text-[0.82rem] font-semibold tabular-nums text-foreground">
                  {flagged}
                </dd>
              </div>
              <div>
                <dt className="text-[0.56rem] uppercase tracking-[0.1em] text-muted-foreground">
                  Left
                </dt>
                <dd className="mt-0.5 text-[0.82rem] font-semibold tabular-nums text-foreground">
                  {unanswered}
                </dd>
              </div>
            </dl>

            <Button
              type="button"
              variant="navy"
              size="cta"
              className="mt-4 w-full"
              onClick={() => setConfirming(true)}
              disabled={submitting}
            >
              <Send className="size-4" aria-hidden="true" />
              Submit paper
            </Button>
          </div>
          <p className="mt-2 px-1 text-[0.62rem] leading-relaxed text-muted-foreground">
            {mode === "study"
              ? "Study attempt — full answer review unlocks after you submit."
              : "Formal mode — score and topic breakdown after you submit; explanations withheld."}
            {referenceMaterials.length > 0
              ? " Scenario documents stay available for the whole paper, as on the real open-book exam."
              : ""}
          </p>
        </aside>
      </div>

      {scenarioOpen ? (
        <ScenarioPanel
          materials={referenceMaterials}
          onClose={() => setScenarioOpen(false)}
        />
      ) : null}
    </div>
  );
}
