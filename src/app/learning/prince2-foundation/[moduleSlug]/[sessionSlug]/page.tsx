import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Clock3, ListChecks } from "lucide-react";
import { SceneIllustration } from "@/components/illustrations/scene-illustration";
import { PageMotion } from "@/components/motion/page-motion";
import { KeyPoints, LessonSections } from "@/components/lesson/lesson-content";
import { KnowledgeCheckPreview } from "@/components/lesson/knowledge-check-preview";
import { LessonNavigation } from "@/components/lesson/lesson-navigation";
import { ProgressBar } from "@/components/ui/progress";
import { student } from "@/data/student";
import {
  course,
  getAdjacentSessions,
  getProgressPercent,
  getSession,
} from "@/lib/course";

type Params = {
  moduleSlug: string;
  sessionSlug: string;
};

export function generateStaticParams(): Params[] {
  return course.modules.flatMap((module) =>
    module.sessions.map((session) => ({
      moduleSlug: module.slug,
      sessionSlug: session.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { moduleSlug, sessionSlug } = await params;
  const ref = getSession(moduleSlug, sessionSlug);
  if (!ref) return {};
  return {
    title: `${ref.session.title} · ${ref.module.shortTitle}`,
    description: ref.session.summary,
  };
}

// Lesson content is entirely URL-dependent, so allow a blocking navigation.
export const instant = false;

export default async function LessonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { moduleSlug, sessionSlug } = await params;
  const ref = getSession(moduleSlug, sessionSlug);
  if (!ref) notFound();

  const { module, session } = ref;
  const { previous, next, index, total } = getAdjacentSessions(
    module.slug,
    session.slug,
  );
  const completed = student.completedSessionIds.length;
  const percent = getProgressPercent(completed, total);
  const sessionNumber = index + 1;

  return (
    <main id="main" className="min-w-0">
      <PageMotion />
      <article className="mx-auto w-full max-w-4xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <nav
          aria-label="Breadcrumb"
          className="text-[0.7rem] text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/learning" className="transition-colors hover:text-foreground">
                Learning
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/learning/prince2-foundation"
                className="transition-colors hover:text-foreground"
              >
                PRINCE2 Foundation
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              {module.shortTitle}
            </li>
          </ol>
        </nav>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] text-muted-foreground">
          <span className="rounded-full bg-accent px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-accent-foreground">
            Module {module.order}
          </span>
          <span>
            Session {sessionNumber} of {total}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock3 className="size-3" aria-hidden="true" />
            {session.durationMinutes} min
          </span>
          <span className="inline-flex items-center gap-1">
            <ListChecks className="size-3" aria-hidden="true" />
            Knowledge check
          </span>
        </div>

        <h1 className="display mt-4 text-balance text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-[2.9rem]">
          {session.title}
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {session.summary}
        </p>

        <div className="mt-6 flex max-w-md items-center gap-3">
          <ProgressBar value={percent} className="h-1.5 flex-1" />
          <span className="shrink-0 text-[0.65rem] text-muted-foreground">
            {completed} of {total} complete
          </span>
        </div>

        <SceneIllustration variant={module.scene} className="mt-8" />

        <section
          aria-labelledby="session-objectives"
          className="mt-6 rounded-2xl border border-border bg-card p-5"
        >
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-primary">
              <BookOpen className="size-3.5" aria-hidden="true" />
            </span>
            <h2
              id="session-objectives"
              className="font-heading text-[1.05rem] text-foreground"
            >
              In this session
            </h2>
          </div>
          <ul className="mt-3 space-y-2">
            {session.objectives.map((objective) => (
              <li key={objective} className="flex items-start gap-2.5">
                <span className="mt-[0.42rem] size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-[0.84rem] leading-relaxed text-foreground/75">
                  {objective}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <LessonSections sections={session.sections} />

        <KeyPoints points={session.keyPoints} />

        <KnowledgeCheckPreview
          check={session.knowledgeCheck}
          topic={module.shortTitle}
        />

        <LessonNavigation previous={previous} next={next} />

        <p className="mt-8 text-[0.65rem] leading-relaxed text-muted-foreground">
          PRINCE2® is a registered trademark of PeopleCert. MockAcademy is an
          independent study resource and is not affiliated with PeopleCert.
        </p>
      </article>
    </main>
  );
}
