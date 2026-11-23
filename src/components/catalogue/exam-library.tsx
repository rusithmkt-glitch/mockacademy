"use client";

import { useMemo, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  FileText,
  Repeat,
  Shuffle,
  Target,
  Timer,
} from "lucide-react";
import { BrandMark } from "@/components/logo";
import type { ExamSummary } from "@/lib/exams/types";
import { cn } from "@/lib/utils";

const headerTones = ["bg-lavender", "bg-amber", "bg-mint"] as const;

const levelOrder = ["foundation", "practitioner", "intermediate", "advanced"];

function levelWeight(level: string) {
  const index = levelOrder.indexOf(level.toLowerCase());
  return index === -1 ? levelOrder.length : index;
}

function capitalise(value: string) {
  return value ? `${value[0]?.toUpperCase()}${value.slice(1)}` : value;
}

function MetaChip({
  icon: Icon,
  children,
}: {
  icon: typeof FileText;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-muted/40 px-2 py-1 text-[0.62rem] font-medium text-foreground/70">
      <Icon className="size-3 text-plum" aria-hidden="true" />
      {children}
    </span>
  );
}

function ExamTile({ exam, index }: { exam: ExamSummary; index: number }) {
  return (
    <Link
      href={`/mock-exams/${exam.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-card"
    >
      <div
        className={cn(
          "relative overflow-hidden px-5 py-5",
          headerTones[index % headerTones.length],
        )}
      >
        <span
          aria-hidden="true"
          className="absolute -right-8 -top-10 size-32 rounded-full bg-white/30"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-14 left-1/4 size-28 rounded-full border border-white/35"
        />
        <span
          aria-hidden="true"
          className="absolute right-10 top-10 size-3 rounded-full bg-white/60"
        />

        <div className="relative flex items-center justify-between gap-3">
          <span className="flex items-center gap-2.5">
            <BrandMark className="size-6" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-navy/75">
              MockAcademy
            </span>
          </span>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Paper {String(index + 1).padStart(2, "0")}
          </p>
          <span className="flex flex-wrap items-center justify-end gap-1.5">
            <span className="rounded-md border border-border/80 bg-muted/40 px-2 py-0.5 text-[0.6rem] font-semibold text-foreground/70">
              {exam.difficulty}
            </span>
            {exam.isFeatured ? (
              <span className="rounded-md bg-navy px-2 py-0.5 text-[0.6rem] font-semibold text-white">
                Start here
              </span>
            ) : null}
          </span>
        </div>
        <h3 className="mt-2 font-heading text-[1.05rem] font-semibold leading-snug text-foreground">
          {exam.title}
        </h3>
        <p className="mt-1.5 text-pretty text-[0.8rem] leading-relaxed text-muted-foreground">
          {exam.description}
        </p>

        <p className="mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          What&apos;s included
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <MetaChip icon={FileText}>
            {exam.questionCount} questions
            {exam.totalMarks !== exam.questionCount
              ? ` · ${exam.totalMarks} marks`
              : ""}
          </MetaChip>
          <MetaChip icon={Timer}>{exam.durationMinutes} minutes</MetaChip>
          <MetaChip icon={Award}>
            {exam.isOpenBook ? "Open book" : "Closed book"}
          </MetaChip>
          <MetaChip icon={exam.selectionMode === "random" ? Shuffle : Repeat}>
            {exam.selectionMode === "random"
              ? "New paper every attempt"
              : "Same paper every attempt"}
          </MetaChip>
          <MetaChip icon={Target}>
            {exam.passMark
              ? `${exam.passMark} of ${exam.totalMarks} marks to pass`
              : `${exam.passPercent}% to pass`}
          </MetaChip>
        </div>
        <p className="mt-3 text-[0.68rem] leading-relaxed text-muted-foreground">
          Covers {exam.topics.join(" · ")}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/80 pt-4">
          <div>
            <p className="font-heading text-[1.4rem] font-semibold leading-none text-navy">
              Free
            </p>
            <p className="mt-1.5 text-[0.62rem] text-muted-foreground">
              Starts instantly in your browser
            </p>
          </div>
          <span className="ribbon-tag bg-amber py-2 text-[0.64rem] font-bold uppercase tracking-[0.06em] text-navy">
            Always free
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ExamLibrary({ exams }: { exams: ExamSummary[] }) {
  const sections = useMemo(() => {
    const map = new Map<string, { title: string; exams: ExamSummary[] }>();
    for (const exam of exams) {
      const title = `${exam.certification} ${capitalise(exam.level)}`;
      const section = map.get(title);
      if (section) {
        section.exams.push(exam);
      } else {
        map.set(title, { title, exams: [exam] });
      }
    }
    return [...map.values()].sort(
      (a, b) =>
        levelWeight(a.exams[0]?.level ?? "") -
          levelWeight(b.exams[0]?.level ?? "") ||
        a.title.localeCompare(b.title),
    );
  }, [exams]);

  const showHeadings = sections.length > 1;

  return (
    <div className={cn("mt-9", showHeadings ? "space-y-14" : "")}>
      {sections.map((section, sectionIndex) => (
        <section key={section.title} aria-labelledby={`library-${sectionIndex}`}>
          {showHeadings ? (
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2
                id={`library-${sectionIndex}`}
                className="font-heading text-[1.3rem] text-foreground"
              >
                {section.title} papers
              </h2>
              <p className="text-[0.72rem] text-muted-foreground">
                {section.exams.length} free
                {section.exams.length === 1 ? " paper" : " papers"} ·{" "}
                {(() => {
                  const first = section.exams[0];
                  const binding = first?.isOpenBook ? "open book" : "closed book";
                  const marks =
                    first && first.totalMarks !== first.questionCount
                      ? "weighted marks"
                      : "one mark each";
                  return `${binding}, ${marks}`;
                })()}
              </p>
            </div>
          ) : null}

          <div
            data-reveal
            className={cn(
              showHeadings ? "mt-5" : "",
              "grid items-stretch gap-5 sm:grid-cols-2",
              section.exams.length > 2
                ? "lg:grid-cols-3"
                : !showHeadings && "mx-auto max-w-4xl",
            )}
          >
            {section.exams.map((exam, index) => (
              <ExamTile key={exam.id} exam={exam} index={index} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
