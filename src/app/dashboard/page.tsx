import type { Metadata } from "next";
import { DashboardView } from "@/components/dashboard/dashboard-view";

export const metadata: Metadata = {
  title: "Your dashboard",
  description:
    "Your PRINCE2 Foundation study overview: course progress, recent mock exam scores, topic performance and recommended lessons.",
};

export default function DashboardPage() {
  return <DashboardView />;
}
