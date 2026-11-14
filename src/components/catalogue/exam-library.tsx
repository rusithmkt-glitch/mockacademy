"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Timer,
} from "lucide-react";
import { BrandMark } from "@/components/logo";
import { FilterTabs } from "@/components/catalogue/filter-tabs";
import type { ExamSet } from "@/data/types";
import { cn } from "@/lib/utils";

const headerTones = ["bg-lavender", "bg-amber", "bg-mint"] as const;

const filterGroups = [
  { id: "all", label: "All papers" },
  { id: "full", label: "Full simulations" },
  { id: "focused", label: "Focused practice" },
  { id: "rapid", label: "Rapid revision" },
] as const;

const difficultyGroup: Record<ExamSet["difficulty"], string> = {
  "Full simulation": "full",
  "Focused practice": "focused",
  "Rapid revision": "rapid",
};

function MetaChip({
  icon: Icon,
  children,
}: {
  icon: typeof FileText;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[0.65rem] font-medium text-foreground/75">
      <Icon className="size-3 text-plum" aria-hidden="true" />
      {children}
    </span>
  );
}

function ExamTile({ exam, index }: { exam: ExamSet; index: number }) {
  return (
    <Link
      href={`/login?next=${encodeURIComponent("/mock-exams")}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-card"
    >
      <div
        className={cn(
          "relative overflow-hidden px-5 pb-4 pt-5",
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

        <div className="relative flex items-start justify-between gap-3">
          <span className="flex items-center gap-2">
            <BrandMark className="size-6" />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy/70">
              MockAcademy
            </span>
          </span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>

        <div className="relative mt-6 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-white/50 px-2.5 py-1 text-[0.62rem] font-semibold text-navy">
            {exam.difficulty}
          </span>
          {exam.featured ? (
            <span className="rounded-full bg-navy px-2.5 py-1 text-[0.62rem] font-semibold text-white">
              Start here
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-foreground/45">
          Paper {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-heading text-xl leading-snug text-foreground">
          {exam.title}
        </h3>
        <p className="mt-2 text-pretty text-[0.82rem] leading-relaxed text-muted-foreground">
          {exam.description}
        </p>

        <p className="mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-foreground/45">
          What&apos;s included
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <MetaChip icon={FileText}>{exam.questionCount} questions</MetaChip>
          <MetaChip icon={Timer}>{exam.durationMinutes} minutes</MetaChip>
          <MetaChip icon={BookOpen}>Closed book</MetaChip>
        </div>
        <p className="mt-3 text-[0.68rem] leading-relaxed text-muted-foreground">
          Covers {exam.topics.join(" · ")}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/80 pt-4">
          <div>
            <p className="font-heading text-[1.3rem] leading-none text-navy">
              Free
            </p>
            <p className="mt-1.5 text-[0.62rem] text-muted-foreground">
              Free account required to start
            </p>
          </div>
          <span className="ribbon-tag bg-amber py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.06em] text-navy">
            Always free
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ExamLibrary({ exams }: { exams: ExamSet[] }) {
  const [active, setActive] = useState("all");

  const options = useMemo(
    () =>
      filterGroups.map((group) => ({
        ...group,
        count:
          group.id === "all"
            ? exams.length
            : exams.filter((exam) => difficultyGroup[exam.difficulty] === group.id)
                .length,
      })),
    [exams],
  );

  const filtered =
    active === "all"
      ? exams
      : exams.filter((exam) => difficultyGroup[exam.difficulty] === active);

  return (
    <>
      <FilterTabs
        options={options}
        value={active}
        onChange={setActive}
        label="Filter mock papers"
      />
      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} of {exams.length} papers
      </p>

      <div
        data-reveal
        className="mt-9 flex flex-wrap items-stretch justify-center gap-5"
      >
        {filtered.map((exam) => (
          <div
            key={exam.id}
            className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
          >
            <ExamTile
              exam={exam}
              index={exams.findIndex((item) => item.id === exam.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
