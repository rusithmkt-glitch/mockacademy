import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import type { SessionRef } from "@/lib/course";
import { cn } from "@/lib/utils";

function CardContent({
  direction,
  label,
  title,
  meta,
}: {
  direction: "previous" | "next";
  label: string;
  title: string;
  meta: string;
}) {
  return (
    <>
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:bg-accent group-hover:text-primary",
        )}
      >
        {direction === "previous" ? (
          <ArrowLeft className="size-4" aria-hidden="true" />
        ) : (
          <ArrowRight className="size-4" aria-hidden="true" />
        )}
      </span>
      <span className={cn("min-w-0", direction === "next" && "sm:text-right")}>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block truncate font-heading text-[1.02rem] text-foreground">
          {title}
        </span>
        <span className="mt-0.5 block text-[0.68rem] text-muted-foreground">
          {meta}
        </span>
      </span>
    </>
  );
}

export function LessonNavigation({
  previous,
  next,
  courseSlug,
}: {
  previous: SessionRef | null;
  next: SessionRef | null;
  courseSlug: string;
}) {
  return (
    <nav
      aria-label="Lesson navigation"
      data-reveal
      className="mt-12 grid gap-3 border-t border-border pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/learning/${courseSlug}/${previous.module.slug}/${previous.session.slug}`}
          className="group flex items-center gap-3.5 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-soft"
        >
          <CardContent
            direction="previous"
            label="Previous session"
            title={previous.session.title}
            meta={`Module ${previous.module.order} · ${previous.session.durationMinutes} min`}
          />
        </Link>
      ) : (
        <Link
          href={`/learning/${courseSlug}`}
          className="group flex items-center gap-3.5 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-soft"
        >
          <CardContent
            direction="previous"
            label="Back to"
            title="Course overview"
            meta="All modules and sessions"
          />
        </Link>
      )}

      {next ? (
        <Link
          href={`/learning/${courseSlug}/${next.module.slug}/${next.session.slug}`}
          className="group flex items-center gap-3.5 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-soft sm:flex-row-reverse sm:text-right"
        >
          <CardContent
            direction="next"
            label="Next session"
            title={next.session.title}
            meta={`Module ${next.module.order} · ${next.session.durationMinutes} min`}
          />
        </Link>
      ) : (
        <Link
          href="/mock-exams"
          className="group flex items-center gap-3.5 rounded-2xl border border-primary/20 bg-accent/50 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-soft sm:flex-row-reverse sm:text-right"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <FileText className="size-4" aria-hidden="true" />
          </span>
          <span className="min-w-0 sm:text-right">
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
              Next step
            </span>
            <span className="mt-1 block font-heading text-[1.02rem] text-foreground">
              Put it to the test
            </span>
            <span className="mt-0.5 block text-[0.68rem] text-muted-foreground">
              Try a free mock exam
            </span>
          </span>
        </Link>
      )}
    </nav>
  );
}
