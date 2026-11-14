import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Clock3, Layers } from "lucide-react";
import type { Course } from "@/data/types";
import {
  formatDuration,
  getCourseStats,
  getModuleDuration,
  getProgressPercent,
} from "@/lib/course";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { BrandMark } from "@/components/logo";
import { cn } from "@/lib/utils";

const moduleTones = ["bg-lavender", "bg-amber", "bg-mint"];

export function CourseCard({
  course,
  completed = 0,
  className,
}: {
  course: Course;
  completed?: number;
  className?: string;
}) {
  const stats = getCourseStats(course);
  const percent = getProgressPercent(completed, stats.sessionCount);

  return (
    <div
      data-reveal
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-card sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 size-44 rounded-full bg-lilac"
      />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="navy">PRINCE2®</Badge>
          <Badge tone="pink">Free course</Badge>
          <Badge tone="outline">Foundation</Badge>
        </div>
        <h3 className="mt-5 font-heading text-2xl leading-tight text-foreground sm:text-[1.7rem]">
          {course.title}
        </h3>
        <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        <dl className="mt-6 grid grid-cols-3 gap-2 border-y border-border py-4">
          <div>
            <dt className="flex items-center gap-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              <Layers className="size-3" aria-hidden="true" /> Modules
            </dt>
            <dd className="mt-1 font-heading text-lg text-foreground">
              {stats.moduleCount}
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              <BookOpen className="size-3" aria-hidden="true" /> Sessions
            </dt>
            <dd className="mt-1 font-heading text-lg text-foreground">
              {stats.sessionCount}
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              <Clock3 className="size-3" aria-hidden="true" /> Study time
            </dt>
            <dd className="mt-1 font-heading text-lg text-foreground">
              {formatDuration(stats.durationMinutes)}
            </dd>
          </div>
        </dl>

        {completed > 0 ? (
          <div className="mt-5">
            <div className="flex items-center justify-between text-[0.72rem]">
              <span className="font-medium text-foreground">Your progress</span>
              <span className="text-muted-foreground">
                {completed} of {stats.sessionCount} · {percent}%
              </span>
            </div>
            <ProgressBar value={percent} className="mt-2" />
          </div>
        ) : null}

        <Link
          href={`/learning/${course.slug}`}
          className={buttonVariants({
            size: "cta",
            className: "mt-6 w-full",
          })}
        >
          View the course
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function ModuleCard({
  module,
  href,
  completedIds = [],
}: {
  module: Course["modules"][number];
  href: string;
  completedIds?: string[];
}) {
  const completed = module.sessions.filter((session) =>
    completedIds.includes(session.id),
  ).length;
  const percent = getProgressPercent(completed, module.sessions.length);
  const tone = moduleTones[(module.order - 1) % moduleTones.length];

  return (
    <Link
      href={href}
      data-reveal
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-card"
    >
      <div className={cn("flex items-center justify-between px-5 py-4", tone)}>
        <span className="flex items-center gap-2">
          <BrandMark className="size-5" />
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-navy/70">
            Module {String(module.order).padStart(2, "0")}
          </span>
        </span>
        <span className="flex size-7 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg leading-snug text-foreground">
          {module.title}
        </h3>
        <p className="mt-1.5 flex-1 text-pretty text-[0.82rem] leading-relaxed text-muted-foreground">
          {module.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-3 text-[0.68rem] text-muted-foreground">
          <span className="flex items-center gap-1">
            <BookOpen className="size-3 text-plum" aria-hidden="true" />
            {module.sessions.length} sessions
          </span>
          <span className="flex items-center gap-1">
            <Clock3 className="size-3 text-plum" aria-hidden="true" />
            {formatDuration(getModuleDuration(module))}
          </span>
          {completed > 0 ? (
            <span className="font-medium text-primary">{percent}%</span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
