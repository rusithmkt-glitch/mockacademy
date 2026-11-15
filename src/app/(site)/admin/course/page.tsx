import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  CircleDashed,
  Layers,
} from "lucide-react";
import { DEFAULT_COURSE_SLUG, loadCourse } from "@/lib/course-source";
import { getPublishedCourse } from "@/lib/cms/course";
import { isSanityConfigured } from "@/lib/env";
import { formatDuration, getCourseStats } from "@/lib/course";

export const metadata: Metadata = { title: "Course content" };

export const instant = false;

export default async function AdminCoursePage() {
  const [course, published] = await Promise.all([
    loadCourse(),
    isSanityConfigured() ? getPublishedCourse(DEFAULT_COURSE_SLUG) : null,
  ]);
  const stats = getCourseStats(course);
  const usingCms = Boolean(published && published.modules.length > 0);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-heading text-xl text-foreground">Course content</h2>
        <p className="mt-1 max-w-2xl text-[0.78rem] leading-relaxed text-muted-foreground">
          Lessons, illustrations and knowledge checks are authored in Sanity.
          The learning pages read the published course structure directly, so
          edits appear after publishing in the studio.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-2xl border border-border bg-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Active course
              </p>
              <h3 className="mt-1 font-heading text-lg text-foreground">
                {course.title}
              </h3>
            </div>
            {usingCms ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-mint px-2.5 py-1 text-[0.64rem] font-semibold text-navy">
                <CheckCircle2 className="size-3" aria-hidden="true" />
                Sanity published
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-sand px-2.5 py-1 text-[0.64rem] font-semibold text-navy">
                <CircleDashed className="size-3" aria-hidden="true" />
                Bundled fallback
              </span>
            )}
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                label: "Modules",
                value: String(stats.moduleCount),
                icon: Layers,
              },
              {
                label: "Sessions",
                value: String(stats.sessionCount),
                icon: BookOpen,
              },
              {
                label: "Study time",
                value: formatDuration(stats.durationMinutes),
                icon: null,
              },
              {
                label: "Slug",
                value: course.slug,
                icon: null,
              },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-[0.82rem] font-semibold text-foreground">
                  {item.icon ? (
                    <item.icon className="size-3.5 text-primary" aria-hidden="true" />
                  ) : null}
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          {!usingCms ? (
            <p className="mt-5 rounded-xl border border-border bg-background px-4 py-3 text-[0.74rem] leading-relaxed text-muted-foreground">
              {isSanityConfigured()
                ? "No published course was found in Sanity yet, so the learning pages are using the bundled content. Publish the course document in the studio to switch over."
                : "Sanity is not configured, so the learning pages are using the bundled course. Add the Sanity environment variables to author content in the studio."}
            </p>
          ) : null}
        </section>

        <section className="flex flex-col justify-between rounded-2xl bg-navy p-5 text-white">
          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-white/50">
              Content studio
            </p>
            <h3 className="mt-2 font-heading text-xl leading-snug">
              Author lessons in Sanity
            </h3>
            <p className="mt-2 text-[0.76rem] leading-relaxed text-white/60">
              Manage modules, lesson scenes, illustrations and knowledge checks.
              Publish when a module is ready for students.
            </p>
          </div>
          <Link
            href="/studio"
            className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2 text-[0.75rem] font-semibold text-navy transition-colors hover:bg-white/90"
          >
            Open studio
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-heading text-lg text-foreground">Module order</h3>
        <ol className="mt-4 divide-y divide-border">
          {course.modules.map((module) => (
            <li
              key={module.id}
              className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2.5"
            >
              <div className="min-w-0">
                <p className="text-[0.8rem] font-medium text-foreground">
                  {module.order}. {module.title}
                </p>
                <p className="text-[0.66rem] text-muted-foreground">
                  {module.sessions.length} session
                  {module.sessions.length === 1 ? "" : "s"} ·{" "}
                  {formatDuration(
                    module.sessions.reduce(
                      (total, session) => total + session.durationMinutes,
                      0,
                    ),
                  )}
                </p>
              </div>
              <Link
                href={`/learning/prince2-foundation/${module.slug}/${module.sessions[0]?.slug ?? ""}`}
                className="text-[0.7rem] font-semibold text-primary hover:underline"
              >
                Preview
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
