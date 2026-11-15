import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Layers,
  Sparkles,
  Target,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand } from "@/components/cta-band";
import { PageMotion } from "@/components/motion/page-motion";
import { CourseCard } from "@/components/course-card";
import { CatalogueIntro } from "@/components/catalogue/catalogue-intro";
import {
  ModuleCatalogue,
  type ModuleCatalogueItem,
} from "@/components/catalogue/module-catalogue";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { connection } from "next/server";
import { getViewer } from "@/lib/auth/session";
import { loadCourse } from "@/lib/course-source";
import {
  formatDuration,
  getCourseStats,
  getModuleDuration,
  getProgressPercent,
  getResumeSession,
} from "@/lib/course";
import { getCompletedSessionIds } from "@/lib/progress/queries";

export const instant = false;

export const metadata: Metadata = {
  title: "Free PRINCE2 Foundation learning",
  description:
    "Study the complete PRINCE2 Foundation syllabus with 6 modules, 23 illustrated lessons and knowledge checks. Free, structured and designed for UK learners.",
};

export default async function LearningPage() {
  await connection();
  const [course, viewer] = await Promise.all([loadCourse(), getViewer()]);
  const completedSessionIds = await getCompletedSessionIds(viewer);
  const stats = getCourseStats(course);
  const completed = completedSessionIds.length;
  const percent = getProgressPercent(completed, stats.sessionCount);
  const resume = getResumeSession(completedSessionIds);
  const resumeHref = `/learning/prince2-foundation/${resume.module.slug}/${resume.session.slug}`;
  const signedIn = Boolean(viewer);

  const moduleItems: ModuleCatalogueItem[] = course.modules.map((module) => {
    const completedSessions = module.sessions.filter((session) =>
      completedSessionIds.includes(session.id),
    ).length;

    return {
      id: module.id,
      order: module.order,
      title: module.title,
      tagline: module.tagline,
      href: `/learning/prince2-foundation/${module.slug}/${module.sessions[0].slug}`,
      sessionCount: module.sessions.length,
      durationLabel: formatDuration(getModuleDuration(module)),
      completedSessions,
      percent: getProgressPercent(completedSessions, module.sessions.length),
    };
  });

  return (
    <>
      <main id="main" className="flex-1">
        <PageMotion />
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden="true"
            className="absolute -right-24 top-0 size-96 rounded-full border border-primary/10"
          />
          <div
            aria-hidden="true"
            className="dot-grid absolute bottom-8 left-0 h-56 w-64 opacity-25"
          />
          <div className="shell relative grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
            <div>
              <nav aria-label="Breadcrumb" className="text-[0.75rem] text-muted-foreground">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="transition-colors hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-foreground">
                    Learning
                  </li>
                </ol>
              </nav>
              <p className="eyebrow mt-8">Guided learning</p>
              <h1 className="display mt-3 max-w-xl text-balance text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
                A clear path through PRINCE2 Foundation.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                One course, six modules and twenty-three short sessions. Learn
                the method in sequence, check your understanding as you go, and
                always know what comes next.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Badge tone="pink">Completely free</Badge>
                <Badge tone="outline">{stats.sessionCount} knowledge checks</Badge>
                <Badge tone="outline">PRINCE2 7th edition</Badge>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={resumeHref}
                  className={buttonVariants({ size: "cta-lg" })}
                >
                  <BookOpen className="size-4" aria-hidden="true" />
                  Continue learning
                </Link>
                <Link
                  href="/learning/prince2-foundation"
                  className={buttonVariants({
                    variant: "outline",
                    size: "cta-lg",
                    className: "bg-card",
                  })}
                >
                  Course details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <dl className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { label: "Modules", value: `${stats.moduleCount}` },
                  { label: "Sessions", value: `${stats.sessionCount}` },
                  { label: "Study time", value: formatDuration(stats.durationMinutes) },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-heading text-xl text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:pt-6">
              <CourseCard course={course} completed={completed} />
            </div>
          </div>
        </section>

        <section className="shell py-16 lg:py-20">
          <CatalogueIntro
            pill="Learning path"
            title="Six modules, built in the right order."
            description="Start with the principles and context, then follow the project lifecycle from start-up to closure. Filter by where you are."
          />
          <ModuleCatalogue modules={moduleItems} />
        </section>

        <section className="border-y border-border/70 bg-card">
          <div className="shell grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-20">
            <div>
              <SectionHeading
                eyebrow="Learning objectives"
                title="What you'll be able to do."
                description="By the end of the course, you should be able to explain and apply the full Foundation syllabus with confidence."
              />
              <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-[0.85rem] leading-relaxed text-foreground/80">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4 text-[0.75rem] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="size-3.5 text-primary" aria-hidden="true" />
                  {stats.moduleCount} modules
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5 text-primary" aria-hidden="true" />
                  {formatDuration(stats.durationMinutes)} of lessons
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                  {stats.sessionCount} knowledge checks
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-lift sm:p-8">
              <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-[0.14]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/50">
                    Continue learning
                  </p>
                  <Target className="size-5 text-gold" aria-hidden="true" />
                </div>
                <p className="mt-5 font-heading text-2xl leading-tight">
                  {resume.session.title}
                </p>
                <p className="mt-1.5 text-[0.8rem] text-white/55">
                  Module {resume.module.order} · {resume.module.title}
                </p>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-[0.72rem]">
                    <span className="text-white/55">Course progress</span>
                    <span className="font-medium">{percent}%</span>
                  </div>
                  <ProgressBar
                    value={percent}
                    className="mt-2 h-1.5 bg-white/15"
                    label="Course progress"
                  />
                  <p className="mt-2 text-[0.68rem] text-white/40">
                    {signedIn
                      ? `${completed} of ${stats.sessionCount} sessions complete`
                      : "Sign in to save your progress"}
                  </p>
                </div>

                <Link
                  href={resumeHref}
                  className={buttonVariants({
                    variant: "inverse",
                    size: "cta",
                    className: "mt-6 w-full",
                  })}
                >
                  Resume lesson
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          title="Learn the method. Then test it for real."
          description="Work through the lessons, then sit a full mock exam to see how your understanding holds up under time pressure."
        />
      </main>
      <SiteFooter />
    </>
  );
}
