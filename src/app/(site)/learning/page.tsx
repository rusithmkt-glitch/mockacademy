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
import type { Course } from "@/data/types";
import {
  formatDuration,
  getAllSessions,
  getCourseStats,
  getModuleDuration,
  getProgressPercent,
  getResumeSession,
} from "@/lib/course";
import { getCompletedSessionIds } from "@/lib/progress/queries";

export const instant = false;

export const metadata: Metadata = {
  title: "Free PRINCE2 Foundation and Practitioner learning",
  description:
    "Study the complete PRINCE2 7th edition syllabus for free: 13 Foundation modules and a full Practitioner course, with illustrated sessions and knowledge checks.",
};

function CoursePickerPanel({
  course,
  completedSessionIds,
  signedIn,
}: {
  course: Course;
  completedSessionIds: string[];
  signedIn: boolean;
}) {
  const stats = getCourseStats(course);
  const completed = getAllSessions(course).filter((session) =>
    completedSessionIds.includes(session.id),
  ).length;
  const percent = getProgressPercent(completed, stats.sessionCount);
  const resume = getResumeSession(completedSessionIds, course);
  const started = completed > 0;

  return (
    <div className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={course.level === "Practitioner" ? "outline" : "pink"}>
          {course.level}
        </Badge>
        <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.68rem] font-medium text-muted-foreground">
          Free
        </span>
      </div>
      <h3 className="mt-4 font-heading text-2xl leading-tight text-foreground">
        <Link
          href={`/learning/${course.slug}`}
          className="transition-colors hover:text-primary"
        >
          {course.title}
        </Link>
      </h3>
      <p className="mt-2 text-[0.85rem] leading-relaxed text-muted-foreground">
        {course.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.75rem] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Layers className="size-3.5 text-primary" aria-hidden="true" />
          {stats.moduleCount} modules
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="size-3.5 text-primary" aria-hidden="true" />
          {stats.sessionCount} sessions
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="size-3.5 text-primary" aria-hidden="true" />
          {formatDuration(stats.durationMinutes)}
        </span>
      </div>

      {signedIn ? (
        <div className="mt-5">
          <div className="flex items-center justify-between text-[0.7rem]">
            <span className="text-muted-foreground">Your progress</span>
            <span className="font-medium text-foreground">{percent}%</span>
          </div>
          <ProgressBar
            value={percent}
            className="mt-1.5 h-1.5"
            label={`${course.shortTitle} progress`}
          />
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3 pt-1">
        <Link
          href={`/learning/${course.slug}`}
          className={buttonVariants({ size: "cta" })}
        >
          {started ? "Continue course" : "View course"}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        {started ? (
          <Link
            href={`/learning/${course.slug}/${resume.module.slug}/${resume.session.slug}`}
            className={buttonVariants({
              variant: "outline",
              size: "cta",
              className: "bg-background",
            })}
          >
            Resume lesson
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function buildModuleItems(
  course: Course,
  completedSessionIds: string[],
): ModuleCatalogueItem[] {
  return course.modules.map((module) => {
    const completedSessions = module.sessions.filter((session) =>
      completedSessionIds.includes(session.id),
    ).length;

    return {
      id: module.id,
      order: module.order,
      title: module.title,
      tagline: module.tagline,
      href: `/learning/${course.slug}/${module.slug}/${module.sessions[0].slug}`,
      sessionCount: module.sessions.length,
      durationLabel: formatDuration(getModuleDuration(module)),
      completedSessions,
      percent: getProgressPercent(completedSessions, module.sessions.length),
    };
  });
}

export default async function LearningPage() {
  await connection();
  const viewer = await getViewer();
  const [foundation, practitioner] = await Promise.all([
    loadCourse("prince2-foundation"),
    loadCourse("prince2-practitioner"),
  ]);
  if (!foundation) {
    return (
      <main id="main" className="flex-1">
        <PageMotion />
      </main>
    );
  }

  const foundationCompleted = await getCompletedSessionIds(
    viewer,
    foundation.slug,
  );
  const practitionerCompleted = practitioner
    ? await getCompletedSessionIds(viewer, practitioner.slug)
    : [];

  const allCourses = [foundation, practitioner].filter(
    (item): item is Course => Boolean(item),
  );
  const allStats = allCourses.map((course) => getCourseStats(course));
  const totalModules = allStats.reduce(
    (total, stats) => total + stats.moduleCount,
    0,
  );
  const totalSessions = allStats.reduce(
    (total, stats) => total + stats.sessionCount,
    0,
  );
  const totalMinutes = allStats.reduce(
    (total, stats) => total + stats.durationMinutes,
    0,
  );

  const completed = foundationCompleted.length;
  const foundationStats = getCourseStats(foundation);
  const percent = getProgressPercent(completed, foundationStats.sessionCount);
  const resume = getResumeSession(foundationCompleted, foundation);
  const resumeHref = `/learning/${foundation.slug}/${resume.module.slug}/${resume.session.slug}`;
  const signedIn = Boolean(viewer);

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
                One method. Two courses. Fully free.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {totalModules} modules and {totalSessions} short sessions take
                PRINCE2 7th edition from first principles to practitioner-level
                application. Learn in sequence, check your understanding as you
                go, and always know what comes next.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Badge tone="pink">Completely free</Badge>
                <Badge tone="outline">{totalSessions} knowledge checks</Badge>
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
                  href="#courses"
                  className={buttonVariants({
                    variant: "outline",
                    size: "cta-lg",
                    className: "bg-card",
                  })}
                >
                  Choose a course
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <dl className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { label: "Modules", value: `${totalModules}` },
                  { label: "Sessions", value: `${totalSessions}` },
                  { label: "Study time", value: formatDuration(totalMinutes) },
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
              <CourseCard course={foundation} completed={completed} />
            </div>
          </div>
        </section>

        <section id="courses" className="shell py-16 lg:py-20">
          <CatalogueIntro
            pill="Choose your course"
            title="Foundation first. Then Practitioner."
            description="Foundation teaches you the method. Practitioner teaches you to apply it to a scenario under exam conditions — open book, weighted marks. Start where you are."
          />
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <CoursePickerPanel
              course={foundation}
              completedSessionIds={foundationCompleted}
              signedIn={signedIn}
            />
            {practitioner ? (
              <CoursePickerPanel
                course={practitioner}
                completedSessionIds={practitionerCompleted}
                signedIn={signedIn}
              />
            ) : null}
          </div>
        </section>

        <section className="shell pt-16 lg:pt-20">
          <CatalogueIntro
            pill="Foundation learning path"
            title={`${foundationStats.moduleCount} modules, built in the right order.`}
            description="Start with the principles and context, then follow the project lifecycle from start-up to closure. Filter by where you are."
          />
          <ModuleCatalogue
            modules={buildModuleItems(foundation, foundationCompleted)}
          />
        </section>

        {practitioner ? (
          <section className="shell py-16 lg:py-20">
            <CatalogueIntro
              pill="Practitioner learning path"
              title={`${getCourseStats(practitioner).moduleCount} modules, scenario-first.`}
              description="Apply the method the way the Practitioner exam expects: work the Fern & Flour scenario from business case to closure, then rehearse the open-book technique."
            />
            <ModuleCatalogue
              modules={buildModuleItems(practitioner, practitionerCompleted)}
            />
          </section>
        ) : (
          <div className="pb-16 lg:pb-20" />
        )}

        <section className="border-y border-border/70 bg-card">
          <div className="shell grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-20">
            <div>
              <SectionHeading
                eyebrow="Learning objectives"
                title="What you'll be able to do."
                description="By the end of the Foundation course, you should be able to explain and apply the full syllabus with confidence."
              />
              <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {foundation.outcomes.map((outcome) => (
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
                  {foundationStats.moduleCount} modules
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5 text-primary" aria-hidden="true" />
                  {formatDuration(foundationStats.durationMinutes)} of lessons
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                  {foundationStats.sessionCount} knowledge checks
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
                      ? `${completed} of ${foundationStats.sessionCount} sessions complete`
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
          description="Work through the lessons, then sit a full mock exam — Foundation or Practitioner — to see how your understanding holds up."
        />
      </main>
      <SiteFooter />
    </>
  );
}
