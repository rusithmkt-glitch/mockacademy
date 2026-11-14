import { SyllabusSidebar } from "@/components/syllabus/syllabus-sidebar";
import { student } from "@/data/student";
import { getAllSessions, toSyllabusCourse } from "@/lib/course";

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const syllabus = toSyllabusCourse();
  const totalSessions = getAllSessions().length;

  return (
    <div className="mx-auto flex w-full max-w-[112rem] flex-1 flex-col lg:flex-row">
      <SyllabusSidebar
        syllabus={syllabus}
        completedIds={student.completedSessionIds}
        totalSessions={totalSessions}
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
