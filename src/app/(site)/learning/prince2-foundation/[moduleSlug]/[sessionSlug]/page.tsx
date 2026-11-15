import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { BookOpen, Clock3, ListChecks } from "lucide-react";
import { PageMotion } from "@/components/motion/page-motion";
import { KeyPoints, LessonSections } from "@/components/lesson/lesson-content";
import { LessonNavigation } from "@/components/lesson/lesson-navigation";
import { LessonProgress } from "@/components/learning/lesson-progress";
import { ScenePlayer } from "@/components/learning/scene-player";
import { KnowledgeCheck } from "@/components/learning/knowledge-check";
import { getViewer } from "@/lib/auth/session";
import { loadCourse } from "@/lib/course-source";
import { getAllSessionRefs } from "@/lib/course";
import { getSessionAssessment } from "@/lib/lesson/assessment";
import { buildSessionScenes } from "@/lib/lesson/scenes";
import { getCompletedSessionIds } from "@/lib/progress/queries";

type Params = {
  moduleSlug: string;
  sessionSlug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { moduleSlug, sessionSlug } = await params;
  const course = await loadCourse();
  const courseModule = course.modules.find(
    (module) => module.slug === moduleSlug,
  );
  const session = courseModule?.sessions.find(
    (item) => item.slug === sessionSlug,
  );
  if (!courseModule || !session) return {};
  return {
    title: `${session.title} · ${courseModule.shortTitle}`,
    description: session.summary,
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
  await connection();

  const [course, viewer] = await Promise.all([loadCourse(), getViewer()]);
  const refs = getAllSessionRefs(course);
  const index = refs.findIndex(
    (ref) => ref.module.slug === moduleSlug && ref.session.slug === sessionSlug,
  );
  if (index === -1) notFound();

  const { module, session } = refs[index];
  const previous = index > 0 ? refs[index - 1] : null;
  const next = index < refs.length - 1 ? refs[index + 1] : null;
  const sessionNumber = index + 1;
  const scenes =
    session.scenes && session.scenes.length > 0
      ? session.scenes
      : buildSessionScenes(session, module);
  const assessment = getSessionAssessment(session, module.shortTitle);
  const nextHref = next
    ? `/learning/prince2-foundation/${next.module.slug}/${next.session.slug}`
    : null;

  const completedIds = await getCompletedSessionIds(viewer);
  const signedIn = Boolean(viewer);
  const lessonPath = `/learning/prince2-foundation/${module.slug}/${session.slug}`;

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
            Session {sessionNumber} of {refs.length}
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

        <LessonProgress
          sessionIds={refs.map((ref) => ref.session.id)}
          completedSessionIds={completedIds}
          signedIn={signedIn}
        />

        <ScenePlayer scenes={scenes} />

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

        <KnowledgeCheck
          sessionId={session.id}
          questions={assessment}
          nextHref={nextHref}
          nextTitle={next?.session.title}
          signedIn={signedIn}
          signInHref={`/login?next=${encodeURIComponent(lessonPath)}`}
          completed={completedIds.includes(session.id)}
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
