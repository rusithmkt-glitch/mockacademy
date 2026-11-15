"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ListChecks,
  RotateCcw,
  Sparkles,
  X,
  XCircle,
} from "lucide-react";
import type { CheckQuestion } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress";
import {
  isAnswerComplete,
  isAnswerCorrect,
  scoreAssessment,
  type AssessmentScore,
} from "@/lib/lesson/assessment";
import {
  submitKnowledgeCheckAction,
  type KnowledgeCheckOutcome,
} from "@/lib/knowledge/actions";
import { cn } from "@/lib/utils";

const typeLabels: Record<CheckQuestion["type"], string> = {
  single: "Choose one answer",
  multiple: "Select all that apply",
  boolean: "True or false",
};

export function KnowledgeCheck({
  sessionId,
  questions,
  nextHref,
  nextTitle,
  signedIn,
  signInHref,
  completed,
}: {
  sessionId: string;
  questions: CheckQuestion[];
  nextHref: string | null;
  nextTitle?: string;
  signedIn: boolean;
  signInHref: string;
  completed: boolean;
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState<AssessmentScore | null>(null);
  const [saving, setSaving] = useState(false);
  const [outcome, setOutcome] = useState<KnowledgeCheckOutcome | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const headingId = useId();
  const promptId = useId();

  const question = questions[index];
  if (!question) return null;

  const selected = answers[question.id] ?? [];
  const answerComplete = isAnswerComplete(question, selected);
  const answerCorrect = submitted && isAnswerCorrect(question, selected);
  const isLastQuestion = index === questions.length - 1;

  function choose(optionId: string) {
    if (submitted) return;
    setAnswers((current) => {
      const existing = current[question.id] ?? [];
      const nextSelection =
        question.type === "multiple"
          ? existing.includes(optionId)
            ? existing.filter((id) => id !== optionId)
            : [...existing, optionId]
          : [optionId];
      return { ...current, [question.id]: nextSelection };
    });
  }

  function submitAnswer() {
    if (!answerComplete) return;
    setSubmitted(true);
  }

  async function persistAnswers(currentAnswers: Record<string, string[]>) {
    setSaving(true);
    setSaveError(null);

    const result = await submitKnowledgeCheckAction({
      sessionKey: sessionId,
      answers: currentAnswers,
    });

    if (result.ok) {
      setOutcome(result.data);
      router.refresh();
    } else {
      setSaveError(result.error);
    }
    setSaving(false);
  }

  function advance() {
    if (!isLastQuestion) {
      setIndex((current) => current + 1);
      setSubmitted(false);
      return;
    }

    const result = scoreAssessment(questions, answers);
    setSummary(result);
    if (signedIn) void persistAnswers(answers);
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    setIndex(0);
    setSummary(null);
    setOutcome(null);
    setSaveError(null);
  }

  if (summary) {
    return (
      <section
        id="knowledge-check"
        aria-labelledby={headingId}
        className="mt-12 scroll-mt-24 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge tone="mint">
            <Sparkles className="size-3" aria-hidden="true" />
            Knowledge check
          </Badge>
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {completed ? "Session complete" : "Results"}
          </span>
        </div>
        <h2
          id={headingId}
          className="mt-4 font-heading text-[1.4rem] text-foreground"
        >
          {summary.correct} of {summary.total} correct
        </h2>

        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-2xl border border-border/70 bg-background p-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-mint/50 font-heading text-xl text-navy">
            {summary.percent}%
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[0.86rem] font-medium text-foreground">
              {summary.percent === 100
                ? "Perfect score."
                : summary.percent >= 60
                  ? "That is a pass."
                  : "Good start. Review the explanations and try again."}
            </p>
            <p className="mt-1 text-[0.75rem] text-muted-foreground">
              {!signedIn
                ? "Sign in to save this result and mark the session complete."
                : saving
                  ? "Saving your result…"
                  : outcome
                    ? `Attempt ${outcome.attemptNumber} saved. ${
                        outcome.passed
                          ? "This session is now complete."
                          : "Pass the check to complete this session."
                      }`
                    : ""}
            </p>
            {signedIn && saveError ? (
              <div
                role="alert"
                className="mt-2 flex flex-wrap items-center gap-2 text-[0.75rem] text-destructive"
              >
                <span>{saveError}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => void persistAnswers(answers)}
                  disabled={saving}
                >
                  Try saving again
                </Button>
              </div>
            ) : null}
            <ProgressBar
              value={summary.percent}
              label="Knowledge check score"
              className="mt-3 h-1.5"
            />
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          {questions.map((item, questionIndex) => {
            const result = summary.results[questionIndex];
            const chosenLabels = item.options
              .filter((option) => result.selectedOptionIds.includes(option.id))
              .map((option) => option.label);
            const correctLabels = item.options
              .filter((option) => item.correctOptionIds.includes(option.id))
              .map((option) => option.label);

            return (
              <details
                key={item.id}
                className="rounded-xl border border-border/70 bg-background px-3.5 py-3"
              >
                <summary className="flex cursor-pointer items-start gap-2.5 text-[0.82rem] font-medium text-foreground">
                  <span
                    className={cn(
                      "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                      result.correct
                        ? "bg-mint text-navy"
                        : "bg-destructive/10 text-destructive",
                    )}
                  >
                    {result.correct ? (
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    ) : (
                      <X className="size-3" strokeWidth={3} aria-hidden="true" />
                    )}
                  </span>
                  {item.prompt}
                </summary>
                <div className="mt-2.5 space-y-1.5 pl-8 text-[0.76rem] leading-relaxed text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Your answer: </span>
                    {chosenLabels.length ? chosenLabels.join(", ") : "Not answered"}
                  </p>
                  {result.correct ? null : (
                    <p>
                      <span className="font-medium text-foreground">
                        Correct answer:{" "}
                      </span>
                      {correctLabels.join(", ")}
                    </p>
                  )}
                  <p>{item.explanation}</p>
                </div>
              </details>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {!signedIn ? (
            <Link href={signInHref} className={buttonVariants({ size: "cta" })}>
              Sign in to save result
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          ) : null}
          <Button type="button" variant="outline" size="cta" onClick={reset}>
            <RotateCcw className="size-4" aria-hidden="true" />
            Retry check
          </Button>
          {nextHref ? (
            <Link href={nextHref} className={buttonVariants({ size: "cta" })}>
              Continue to next lesson
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          ) : (
            <Link href="/mock-exams" className={buttonVariants({ size: "cta" })}>
              Try a mock exam
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
        {nextTitle ? (
          <p className="mt-2 text-[0.7rem] text-muted-foreground">
            Up next: {nextTitle}
          </p>
        ) : null}
      </section>
    );
  }

  return (
    <section
      id="knowledge-check"
      aria-labelledby={headingId}
      className="mt-12 scroll-mt-24 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge tone="mint">
          <Sparkles className="size-3" aria-hidden="true" />
          Knowledge check
        </Badge>
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          Question {index + 1} of {questions.length}
        </span>
      </div>

      <h2 id={headingId} className="sr-only">
        Knowledge check
      </h2>

      <ProgressBar
        value={((index + (submitted ? 1 : 0)) / questions.length) * 100}
        label="Knowledge check progress"
        className="mt-4 h-1.5"
      />

      <div className="mt-4 rounded-2xl border border-border/70 bg-background p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="inline-flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <ListChecks className="size-3" aria-hidden="true" />
            {typeLabels[question.type]}
          </p>
          <p className="text-[0.62rem] font-medium text-muted-foreground">
            {question.topic}
          </p>
        </div>

        <p
          id={promptId}
          className="mt-2.5 text-pretty text-[1.02rem] font-medium leading-relaxed text-foreground"
        >
          {question.prompt}
        </p>

        <fieldset
          className="mt-4"
          disabled={submitted}
          aria-describedby={promptId}
        >
          <legend className="sr-only">{question.prompt}</legend>
          <div className="space-y-2">
            {question.options.map((option, optionIndex) => {
              const isSelected = selected.includes(option.id);
              const isRight =
                submitted && question.correctOptionIds.includes(option.id);
              const isWrong = submitted && isSelected && !isRight;

              return (
                <label
                  key={option.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/60",
                    submitted
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
                    type={question.type === "multiple" ? "checkbox" : "radio"}
                    name={question.id}
                    value={option.id}
                    checked={isSelected}
                    onChange={() => choose(option.id)}
                    className="sr-only"
                  />
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center border text-[0.65rem] font-semibold",
                      question.type === "multiple"
                        ? "rounded-[0.4rem]"
                        : "rounded-full",
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
                      <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                    ) : isWrong ? (
                      <X className="size-3.5" strokeWidth={3} aria-hidden="true" />
                    ) : isSelected ? (
                      <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                    ) : (
                      String.fromCharCode(65 + optionIndex)
                    )}
                  </span>
                  <span className="flex-1 text-[0.86rem] leading-relaxed text-foreground/80">
                    {option.label}
                  </span>
                  {isRight ? (
                    <span className="sr-only">Correct answer</span>
                  ) : isWrong ? (
                    <span className="sr-only">Your answer, incorrect</span>
                  ) : null}
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {submitted ? (
          <Button type="button" size="cta" onClick={advance}>
            {isLastQuestion ? "See results" : "Next question"}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        ) : (
          <>
            <Button
              type="button"
              size="cta"
              onClick={submitAnswer}
              disabled={!answerComplete}
            >
              Submit answer
            </Button>
            <span className="text-[0.72rem] text-muted-foreground">
              {question.type === "multiple"
                ? "Select every answer that applies."
                : "Choose one answer to continue."}
            </span>
          </>
        )}
      </div>

      <div aria-live="polite">
        {submitted ? (
          <div
            className={cn(
              "mt-4 flex items-start gap-3 rounded-xl border p-4",
              answerCorrect
                ? "border-mint/60 bg-mint-soft"
                : "border-destructive/20 bg-destructive/5",
            )}
          >
            <span
              className={cn(
                "mt-0.5 shrink-0",
                answerCorrect ? "text-navy" : "text-destructive",
              )}
            >
              {answerCorrect ? (
                <CheckCircle2 className="size-4" aria-hidden="true" />
              ) : (
                <XCircle className="size-4" aria-hidden="true" />
              )}
            </span>
            <div>
              <p
                className={cn(
                  "text-[0.82rem] font-semibold",
                  answerCorrect ? "text-navy" : "text-destructive",
                )}
              >
                {answerCorrect ? "Correct" : "Not quite"}
              </p>
              <p className="mt-1 text-pretty text-[0.8rem] leading-relaxed text-foreground/70">
                {question.explanation}
              </p>
              {answerCorrect ? null : (
                <p className="mt-1.5 text-[0.76rem] leading-relaxed text-foreground/60">
                  Correct answer:{" "}
                  {question.options
                    .filter((option) =>
                      question.correctOptionIds.includes(option.id),
                    )
                    .map((option) => option.label)
                    .join(", ")}
                </p>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <p className="mt-4 border-t border-border pt-3 text-[0.65rem] leading-relaxed text-muted-foreground">
        {signedIn
          ? "Your answers are scored on the server and saved to your account. Passing at 60% or above marks this session complete; you can retry any time."
          : "Sign in to save your result. Knowledge checks can be retried any time."}
      </p>
    </section>
  );
}
