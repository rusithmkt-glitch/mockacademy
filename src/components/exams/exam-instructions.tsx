"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Check,
  Clock3,
  FileText,
  Info,
  Play,
  ShieldCheck,
  Target,
} from "lucide-react";
import type { ExamConfig, AttemptMode } from "@/lib/exam/types";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const facts = (config: ExamConfig) => [
  {
    icon: FileText,
    label: "Questions",
    value: String(config.questionCount),
  },
  {
    icon: Clock3,
    label: "Time allowed",
    value: `${config.durationMinutes} min`,
  },
  {
    icon: Target,
    label: "Pass mark",
    value: `${config.passMarkPercent}%`,
  },
  {
    icon: Award,
    label: "Format",
    value: "Closed book",
  },
];

export function ExamInstructions({
  examTitle,
  config,
  attemptNumber,
  mode,
  onBegin,
}: {
  examTitle: string;
  config: ExamConfig;
  attemptNumber: number;
  mode: AttemptMode;
  onBegin: () => void;
}) {
  return (
    <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <section
        aria-labelledby="exam-instructions-title"
        className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge tone="lavender">Before you begin</Badge>
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[0.62rem] font-semibold",
              mode === "study"
                ? "bg-mint-soft text-navy"
                : "bg-navy text-white",
            )}
          >
            Attempt {attemptNumber} ·{" "}
            {mode === "study" ? "Study mode" : "Formal mode"}
          </span>
        </div>
        <h2
          id="exam-instructions-title"
          className="mt-3 font-heading text-[1.5rem] leading-snug text-foreground"
        >
          {examTitle}
        </h2>
        <p className="mt-2 max-w-[62ch] text-pretty text-[0.86rem] leading-relaxed text-muted-foreground">
          {mode === "study"
            ? "This study attempt shows whether each answer is right and explains why as you work. Use it to learn the syllabus before sitting a formal simulation."
            : "This is a formal simulation. You will see your score, topic breakdown and full answer review only after you submit."}
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {facts(config).map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-border/70 bg-background px-3 py-2.5"
            >
              <dt className="flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <fact.icon className="size-3 text-plum" aria-hidden="true" />
                {fact.label}
              </dt>
              <dd className="mt-1 font-heading text-base leading-none text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 rounded-2xl border border-primary/15 bg-accent/50 p-4">
          <div className="flex items-start gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.8rem] font-semibold text-foreground">
                How attempts work in this demo
              </p>
              <p className="mt-1 text-[0.78rem] leading-relaxed text-foreground/70">
                Attempts 1–2 give immediate feedback. From attempt{" "}
                {config.attemptPolicy.formalFromAttempt} this paper becomes a
                formal simulation with feedback withheld until submission. Your
                attempt count is stored in this browser.
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {[
            "Answer one question at a time. You can move backwards and forwards freely.",
            "Flag questions you want to revisit using the review marker.",
            "The timer starts when you press Begin and keeps counting while you work.",
            "The paper submits automatically when time runs out. Unanswered questions are marked incorrect.",
            "A full answer review and recommended lessons appear after you submit.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-soft text-navy">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-[0.82rem] leading-relaxed text-foreground/80">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button type="button" size="cta" onClick={onBegin}>
            <Play className="size-4" aria-hidden="true" />
            Begin {mode === "study" ? "study attempt" : "formal exam"}
          </Button>
          <Link
            href="/mock-exams"
            className={buttonVariants({ variant: "outline", size: "cta" })}
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All papers
          </Link>
        </div>

        <p className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground">
          Frontend demonstration only. The timer and attempt policy run in your
          browser; server-side enforcement and secure scoring belong to Phase 3.
        </p>
      </section>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
          <p className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <Info className="size-3" aria-hidden="true" />
            Exam tips
          </p>
          <ul className="mt-2.5 space-y-2.5">
            <li className="text-[0.78rem] leading-relaxed text-foreground/75">
              Read the whole question before looking at the options. Distractors
              are written to feel plausible.
            </li>
            <li className="text-[0.78rem] leading-relaxed text-foreground/75">
              Use the review marker for anything you are unsure about, then come
              back with fresh eyes.
            </li>
            <li className="text-[0.78rem] leading-relaxed text-foreground/75">
              Keep an eye on the timer, but do not rush the first half of the
              paper.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-amber/50 bg-amber-soft p-4">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-navy/70">
            Independent practice
          </p>
          <p className="mt-1.5 text-[0.78rem] leading-relaxed text-navy/75">
            MockAcademy papers are original study material. They are not
            official PeopleCert questions and do not guarantee a real exam
            result.
          </p>
        </div>
      </aside>
    </div>
  );
}
