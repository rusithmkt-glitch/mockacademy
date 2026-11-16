"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Flag,
  LayoutDashboard,
  RotateCcw,
  ShieldCheck,
  Target,
  X,
  XCircle,
} from "lucide-react";
import type { AttemptMode, ExamResult } from "@/lib/exam/types";
import type { ExamFeedback } from "./exam-session";
import type { PresentedQuestion } from "@/lib/exam/presentation";
import { getRecommendedLessons } from "@/lib/exam/recommendations";
import { passThreshold } from "@/lib/exam/scoring";
import { formatClock } from "@/lib/exam/timer";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { PromptStatements, splitPrompt } from "./question-prompt";

export function ExamResults({
  examTitle,
  result,
  attemptNumber,
  mode,
  questions,
  review,
  reviewAvailable = true,
  onRetake,
}: {
  examTitle: string;
  result: ExamResult;
  attemptNumber: number;
  mode: AttemptMode;
  questions: PresentedQuestion[];
  review: Record<string, ExamFeedback>;
  reviewAvailable?: boolean;
  onRetake: () => void;
}) {
  const responseById = new Map(
    result.responses.map((response) => [response.questionId, response]),
  );
  const threshold = passThreshold(result.total, result.passMarkPercent);
  const recommendations = getRecommendedLessons(result.topics);

  return (
    <div className="mt-6 space-y-5">
      <section
        aria-labelledby="exam-result-title"
        className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background/60 px-5 py-3 sm:px-7">
          <Badge tone="lavender">Exam result</Badge>
          <p className="text-[0.64rem] text-muted-foreground">
            Attempt {attemptNumber} ·{" "}
            {mode === "study" ? "Study mode" : "Formal simulation"} ·{" "}
            {examTitle}
          </p>
        </div>

        <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_16rem]">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.72rem] font-semibold",
                  result.passed
                    ? "bg-mint-soft text-navy"
                    : "bg-destructive/10 text-destructive",
                )}
              >
                {result.passed ? (
                  <CheckCircle2 className="size-3.5" aria-hidden="true" />
                ) : (
                  <XCircle className="size-3.5" aria-hidden="true" />
                )}
                {result.passed ? "Passed" : "Not passed"}
              </span>
              <span className="text-[0.68rem] text-muted-foreground">
                Pass mark {result.passMarkPercent}% ({threshold} of{" "}
                {result.total})
              </span>
            </div>

            <h2
              id="exam-result-title"
              className="mt-3 font-heading text-3xl leading-tight text-foreground sm:text-[2.2rem]"
            >
              {result.score} of {result.total} correct
            </h2>
            <p className="mt-1 text-[0.92rem] text-muted-foreground">
              {result.percent}% overall
              {result.passed
                ? " — this sits above the pass mark."
                : reviewAvailable
                  ? " — review the explanations below before your next attempt."
                  : " — review the topic breakdown before your next attempt."}
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { label: "Correct", value: String(result.score) },
                { label: "Incorrect", value: String(result.incorrect) },
                { label: "Unanswered", value: String(result.unanswered) },
                { label: "Time taken", value: formatClock(result.durationUsedSeconds) },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/70 bg-background px-3 py-2.5"
                >
                  <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-heading text-base leading-none tabular-nums text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-border/70 bg-lavender-soft/70 p-5 text-center">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-plum">
              Overall score
            </p>
            <p className="mt-2 font-heading text-5xl leading-none text-navy">
              {result.percent}%
            </p>
            <ProgressBar
              value={result.percent}
              label="Exam score"
              className="mt-4 h-2"
            />
            <p className="mt-3 text-[0.68rem] leading-relaxed text-muted-foreground">
              Completed {new Date(result.completedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section
          aria-labelledby="topic-performance-title"
          className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
        >
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-primary">
              <Target className="size-3.5" aria-hidden="true" />
            </span>
            <h2
              id="topic-performance-title"
              className="font-heading text-[1.1rem] text-foreground"
            >
              Topic performance
            </h2>
          </div>
          <div className="mt-4 space-y-3.5">
            {result.topics.map((topic) => (
              <div key={topic.topic}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[0.8rem] font-medium text-foreground">
                    {topic.topic}
                  </p>
                  <p className="text-[0.68rem] tabular-nums text-muted-foreground">
                    {topic.correct} of {topic.total} · {topic.percent}%
                  </p>
                </div>
                <ProgressBar
                  value={topic.percent}
                  label={`${topic.topic} score`}
                  className="mt-1.5 h-1.5"
                />
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <p className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <BookOpen className="size-3" aria-hidden="true" />
              Recommended lessons
            </p>
            {recommendations.length ? (
              <ul className="mt-3 space-y-2">
                {recommendations.map((lesson) => (
                  <li key={lesson.moduleId}>
                    <Link
                      href={lesson.href}
                      className="group block rounded-xl border border-border/70 bg-background px-3 py-2.5 transition-colors hover:border-primary/25 hover:bg-accent/50"
                    >
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-primary">
                        {lesson.topic} · {lesson.percent}%
                      </p>
                      <p className="mt-0.5 text-[0.78rem] font-medium leading-snug text-foreground">
                        {lesson.sessionTitle}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1 text-[0.64rem] text-muted-foreground">
                        {lesson.moduleTitle}
                        <ArrowRight
                          className="size-3 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-[0.76rem] leading-relaxed text-muted-foreground">
                Every topic is at 100%. Browse the course for a fresh
                perspective or sit another paper.
              </p>
            )}
            <Link
              href="/learning/prince2-foundation"
              className={cn(
                buttonVariants({ variant: "outline", size: "cta" }),
                "mt-3 w-full",
              )}
            >
              <BookOpen className="size-4" aria-hidden="true" />
              Browse the course
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Next steps
            </p>
            <div className="mt-3 space-y-2">
              <Button
                type="button"
                variant="navy"
                size="cta"
                className="w-full"
                onClick={onRetake}
              >
                <RotateCcw className="size-4" aria-hidden="true" />
                Retake this paper
              </Button>
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ variant: "outline", size: "cta" }),
                  "w-full",
                )}
              >
                <LayoutDashboard className="size-4" aria-hidden="true" />
                Return to dashboard
              </Link>
              <Link
                href="/mock-exams"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "cta" }),
                  "w-full text-muted-foreground",
                )}
              >
                All mock papers
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {reviewAvailable ? (
      <section
        aria-labelledby="answer-review-title"
        className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-primary">
              <Check className="size-3.5" aria-hidden="true" />
            </span>
            <h2
              id="answer-review-title"
              className="font-heading text-[1.1rem] text-foreground"
            >
              Review answers
            </h2>
          </div>
          <p className="text-[0.64rem] text-muted-foreground">
            {result.score} correct · {result.incorrect} incorrect ·{" "}
            {result.unanswered} unanswered
          </p>
        </div>

        <div className="mt-4 space-y-2">
          {questions.map((question, questionIndex) => {
            const response = responseById.get(question.id);
            const answer = review[question.id];
            const selected = response?.selectedOptionIds[0];
            const correct = selected !== undefined && selected === answer?.correctOptionId;

            return (
              <details
                key={question.id}
                className="rounded-xl border border-border/70 bg-background px-3.5 py-3"
              >
                <summary className="flex cursor-pointer items-start gap-2.5">
                  <span
                    className={cn(
                      "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                      correct
                        ? "bg-mint text-navy"
                        : "bg-destructive/10 text-destructive",
                    )}
                  >
                    {correct ? (
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    ) : (
                      <X className="size-3" strokeWidth={3} aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.8rem] font-medium leading-snug text-foreground">
                      {questionIndex + 1}. {splitPrompt(question.prompt).lead}
                    </span>
                    <PromptStatements prompt={question.prompt} compact />
                    <span className="mt-0.5 flex flex-wrap items-center gap-2 text-[0.62rem] text-muted-foreground">
                      {question.topic}
                      {response?.flagged ? (
                        <span className="inline-flex items-center gap-1 text-plum">
                          <Flag className="size-2.5" aria-hidden="true" />
                          Flagged
                        </span>
                      ) : null}
                      {selected ? null : (
                        <span className="text-destructive">Not answered</span>
                      )}
                    </span>
                  </span>
                </summary>

                <div className="mt-3 space-y-1.5 pl-7">
                  {question.options.map((option, optionIndex) => {
                    const isCorrect = option.id === answer?.correctOptionId;
                    const isSelected = option.id === selected;
                    return (
                      <p
                        key={option.id}
                        className={cn(
                          "flex items-start gap-2 rounded-lg px-2 py-1 text-[0.76rem] leading-relaxed",
                          isCorrect
                            ? "bg-mint-soft text-navy"
                            : isSelected
                              ? "bg-destructive/5 text-destructive"
                              : "text-foreground/65",
                        )}
                      >
                        <span className="mt-px font-semibold">
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        <span className="flex-1">{option.label}</span>
                        {isCorrect ? (
                          <Check className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
                        ) : isSelected ? (
                          <X className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
                        ) : null}
                      </p>
                    );
                  })}
                  {answer?.explanation ? (
                    <p className="pt-1.5 text-[0.76rem] leading-relaxed text-muted-foreground">
                      {answer.explanation}
                    </p>
                  ) : null}
                </div>
              </details>
            );
          })}
        </div>
      </section>
      ) : (
        <section
          aria-labelledby="answer-review-withheld-title"
          className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
        >
          <div className="flex items-start gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <ShieldCheck className="size-4" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="answer-review-withheld-title"
                className="font-heading text-[1.1rem] text-foreground"
              >
                Answer review withheld
              </h2>
              <p className="mt-1.5 max-w-2xl text-[0.8rem] leading-relaxed text-muted-foreground">
                This was a formal simulation, so explanations are not shown for
                this attempt. Your score and topic breakdown above are final and
                stored on your account. Your next study attempt will include a
                full review.
              </p>
            </div>
          </div>
        </section>
      )}

      <p className="text-[0.65rem] leading-relaxed text-muted-foreground">
        This attempt is saved to your account. Your score was calculated on the
        server from your submitted answers.
      </p>
    </div>
  );
}
