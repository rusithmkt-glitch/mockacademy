import { SyllabusSidebar } from "@/components/syllabus/syllabus-sidebar";
import { getViewer } from "@/lib/auth/session";
import { loadCourse } from "@/lib/course-source";
import { getAllSessions, toSyllabusCourse } from "@/lib/course";
import { getCompletedSessionIds } from "@/lib/progress/queries";

// The syllabus reflects saved progress, so the shell is request-rendered.
export const instant = false;

export default async function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [course, viewer] = await Promise.all([loadCourse(), getViewer()]);
  const completedIds = await getCompletedSessionIds(viewer);
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
