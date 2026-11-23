import { notFound } from "next/navigation";
import { connection } from "next/server";
import { SyllabusSidebar } from "@/components/syllabus/syllabus-sidebar";
import { getViewer } from "@/lib/auth/session";
import { loadCourse } from "@/lib/course-source";
import { getAllSessions, toSyllabusCourse } from "@/lib/course";
import { getCompletedSessionIds } from "@/lib/progress/queries";
import { courses } from "@/data/courses";

// The syllabus reflects saved progress, so the shell is request-rendered.
export const instant = false;

export default async function LessonLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ courseSlug: string; moduleSlug: string }>;
}) {
  const { courseSlug, moduleSlug } = await params;
  if (
    !courses[courseSlug]?.course.modules.some((module) => module.slug === moduleSlug)
  ) {
    notFound();
  }
  await connection();
  const course = await loadCourse(courseSlug);
  if (!course) notFound();
  const viewer = await getViewer();
  const completedIds = await getCompletedSessionIds(viewer, course.slug);
  const syllabus = toSyllabusCourse(course);
  const totalSessions = getAllSessions(course).length;

  return (
    <div className="mx-auto flex w-full max-w-[112rem] flex-1 flex-col lg:flex-row">
      <SyllabusSidebar
        syllabus={syllabus}
        totalSessions={totalSessions}
        completedIds={completedIds}
        signedIn={Boolean(viewer)}
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
