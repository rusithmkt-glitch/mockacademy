import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Layers,
  ListChecks,
  Sparkles,
  Timer,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { PageMotion } from "@/components/motion/page-motion";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { student } from "@/data/student";
import {
  course,
  formatDuration,
  getCourseStats,
  getModuleDuration,
} from "@/lib/course";

export const metadata: Metadata = {
  title: "PRINCE2 Foundation course",
  description:
    "The complete free PRINCE2 Foundation course: 6 modules, 23 illustrated sessions, learning objectives and full syllabus. Start learning today.",
};

const benefitIcons = [ListChecks, Sparkles, CheckCircle2, Clock3];

export default function CoursePage() {
  const stats = getCourseStats(course);
  const completed = new Set(student.completedSessionIds);
  const firstModule = course.modules[0];
  const firstSession = firstModule.sessions[0];
  const longestModule = Math.max(
    ...course.modules.map((module) => getModuleDuration(module)),
  );

  return (
    <>
      <main id="main" className="flex-1">
        <PageMotion />
        <section className="relative overflow-hidden bg-navy text-white">
          <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-[0.12]" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-[26rem] rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 right-32 size-80 rounded-full bg-magenta/30 blur-3xl"
          />

          <div className="shell relative py-14 sm:py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="text-[0.75rem] text-white/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/learning" className="transition-colors hover:text-white">
                    Learning
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white/80">
                  PRINCE2 Foundation
                </li>
              </ol>
            </nav>

            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="gold">
                    Free course
                  </Badge>
                  <span className="rounded-full border border-white/15 px-2.5 py-1 text-[0.7rem] font-semibold text-white/65">
                    Foundation level
                  </span>
                  <span className="rounded-full border border-white/15 px-2.5 py-1 text-[0.7rem] font-semibold text-white/65">
                    7th edition
                  </span>
                </div>
                <h1 className="display mt-5 max-w-2xl text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
                  PRINCE2® Foundation, explained properly.
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                  A complete, illustrated course covering the full PRINCE2
                  Foundation syllabus. Study in order or jump straight to the
                  topic you need — every session is short, visual and followed by
                  a knowledge check.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/learning/prince2-foundation/${firstModule.slug}/${firstSession.slug}`}
                    className={buttonVariants({
                      variant: "inverse",
                      size: "cta-lg",
                    })}
                  >
                    <BookOpen className="size-4" aria-hidden="true" />
                    Start learning
                  </Link>
                  <Link
                    href="/mock-exams"
                    className={buttonVariants({
                      variant: "outline-light",
                      size: "cta-lg",
                    })}
                  >
                    Try a mock exam
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <aside className="rounded-3xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                  At a glance
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-4">
                  {[
                    { label: "Modules", value: `${stats.moduleCount}` },
                    { label: "Sessions", value: `${stats.sessionCount}` },
                    {
                      label: "Guided study",
                      value: formatDuration(stats.durationMinutes),
                    },
                    { label: "Cost", value: "£0" },
                  ].map((item) => (
                    <div key={item.label}>
                      <dt className="text-[0.6rem] font-medium uppercase tracking-[0.12em] text-white/40">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-heading text-xl leading-none text-white">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 space-y-2.5 border-t border-white/10 pt-5 text-[0.75rem] text-white/60">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2">
                      <Timer className="size-3.5 text-gold" aria-hidden="true" />
                      Exam time
                    </span>
                    <span className="text-white/85">60 minutes</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2">
                      <ListChecks className="size-3.5 text-gold" aria-hidden="true" />
                      Questions
                    </span>
                    <span className="text-white/85">60, multiple choice</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-gold" aria-hidden="true" />
                      Pass mark
                    </span>
                    <span className="text-white/85">55% (33/60)</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="shell py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Course overview" title="Understand the method, not just the vocabulary." />
              <div className="mt-6 space-y-4">
                {course.overview.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-pretty text-[0.92rem] leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-7 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card p-4">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Format
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">Self-paced</p>
                </div>
                <div className="border-x border-border px-3">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Level
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">Foundation</p>
                </div>
                <div className="pl-2">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Edition
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">7th (2023)</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-primary">
                  <Layers className="size-4" aria-hidden="true" />
                </span>
                <h2 className="font-heading text-xl text-foreground">
                  Learning objectives
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-[0.82rem] leading-relaxed text-foreground/80">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card">
          <div className="shell py-16 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Complete syllabus"
                title="Every module and session."
                description="Open a module to see its sessions. Lesson progress below is demonstration data until accounts launch."
              />
              <span className="rounded-full border border-border bg-background px-3 py-1.5 text-[0.7rem] text-muted-foreground">
                {stats.moduleCount} modules · {stats.sessionCount} sessions
              </span>
            </div>

            <div className="mt-9 space-y-3">
              {course.modules.map((module, index) => (
                <details
                  key={module.id}
                  className="syllabus-item group rounded-2xl border border-border bg-background transition-colors hover:border-primary/20"
                  open={index === 0}
                >
                  <summary className="flex items-center gap-4 p-4 sm:p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent font-heading text-sm text-primary">
                      {String(module.order).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Module {module.order}
                      </p>
                      <h3 className="mt-0.5 truncate font-heading text-[1.05rem] text-foreground sm:text-lg">
                        {module.title}
                      </h3>
                    </div>
                    <div className="hidden shrink-0 text-right text-[0.68rem] text-muted-foreground sm:block">
                      <p>{module.sessions.length} sessions</p>
                      <p className="mt-0.5">{formatDuration(getModuleDuration(module))}</p>
                    </div>
                    <ChevronDown
                      className="syllabus-chevron size-4 shrink-0 text-muted-foreground transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </summary>

                  <div className="border-t border-border px-4 pb-4 sm:px-5">
                    <p className="mt-4 max-w-3xl text-[0.82rem] leading-relaxed text-muted-foreground">
                      {module.description}
                    </p>
                    <ul className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
                      {module.sessions.map((session) => {
                        const isComplete = completed.has(session.id);
                        return (
                          <li key={session.id}>
                            <Link
                              href={`/learning/prince2-foundation/${module.slug}/${session.slug}`}
                              className="group/session flex items-center gap-3 px-3.5 py-3 transition-colors hover:bg-accent/40"
                            >
                              <span
                                className={
                                  isComplete
                                    ? "flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                                    : "flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-[0.6rem] text-muted-foreground"
                                }
                              >
                                {isComplete ? (
                                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                                ) : (
                                  module.sessions.indexOf(session) + 1
                                )}
                              </span>
                              <span className="min-w-0 flex-1 text-[0.83rem] font-medium text-foreground">
                                {session.title}
                              </span>
                              <span className="hidden shrink-0 text-[0.65rem] text-muted-foreground sm:inline">
                                {session.durationMinutes} min
                              </span>
                              <ArrowRight
                                className="size-3.5 shrink-0 text-muted-foreground/50 transition-all group-hover/session:translate-x-0.5 group-hover/session:text-primary"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="shell py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Study time"
                title="Around six focused hours."
                description="Lesson time is only part of the picture. Leave room for knowledge checks and at least one full mock exam before test day."
              />
              <div className="mt-7 rounded-2xl border border-border bg-card p-5">
                <div className="space-y-4">
                  {course.modules.map((module) => (
                    <div key={module.id}>
                      <div className="flex items-center justify-between gap-4 text-[0.7rem]">
                        <span className="font-medium text-foreground">
                          {module.order}. {module.shortTitle}
                        </span>
                        <span className="text-muted-foreground">
                          {formatDuration(getModuleDuration(module))}
                        </span>
                      </div>
                      <ProgressBar
                        value={(getModuleDuration(module) / longestModule) * 100}
                        className="mt-1.5 h-1"
                        label={`${module.shortTitle} study time`}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-[0.75rem] font-medium text-foreground">
                    Total guided study
                  </span>
                  <span className="font-heading text-lg text-foreground">
                    {formatDuration(stats.durationMinutes)}
                  </span>
                </div>
                <p className="mt-2 text-[0.7rem] leading-relaxed text-muted-foreground">
                  Add roughly 1–2 hours per mock exam for sitting and reviewing
                  your answers.
                </p>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Course benefits"
                title="Why this course works."
              />
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {course.benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index % benefitIcons.length];
                  return (
                    <div
                      key={benefit.title}
                      className="rounded-2xl border border-border bg-card p-5"
                    >
                      <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-primary">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <h3 className="mt-3 font-heading text-[0.98rem] text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted-foreground">
                        {benefit.body}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl bg-accent/60 p-5 sm:flex-row sm:items-center">
                <div>
                  <p className="font-heading text-lg text-foreground">
                    Ready to begin?
                  </p>
                  <p className="mt-1 text-[0.75rem] text-muted-foreground">
                    Start with session one — no account needed to browse.
                  </p>
                </div>
                <Link
                  href={`/learning/prince2-foundation/${firstModule.slug}/${firstSession.slug}`}
                  className={buttonVariants({ size: "cta", className: "shrink-0" })}
                >
                  Start learning
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
