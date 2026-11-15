import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { DashboardView } from "@/components/dashboard/dashboard-view";
import { getViewer } from "@/lib/auth/session";
import { loadCourse } from "@/lib/course-source";
import { getDashboardData } from "@/lib/progress/queries";

export const metadata: Metadata = {
  title: "Your dashboard",
  description:
    "Your PRINCE2 Foundation study overview: course progress, recent mock exam scores, topic performance and recommended lessons.",
};

// Personal data is always request-rendered.
export const instant = false;

export default async function DashboardPage() {
  const viewer = await getViewer();
  if (!viewer) redirect("/login?next=/dashboard");

  const [data, course] = await Promise.all([
    getDashboardData(viewer),
    loadCourse(),
  ]);

  return <DashboardView viewer={viewer} data={data} course={course} />;
}
