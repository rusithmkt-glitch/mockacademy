import type { Metadata } from "next";
import { ExamSetManager } from "@/components/admin/exam-set-manager";
import { listAdminExamSets } from "@/lib/admin/queries";

export const metadata: Metadata = { title: "Exam sets" };

export const instant = false;

export default async function AdminExamSetsPage() {
  const examSets = await listAdminExamSets();

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-heading text-xl text-foreground">Exam sets</h2>
        <p className="mt-1 max-w-2xl text-[0.78rem] leading-relaxed text-muted-foreground">
          Publish papers to the catalogue and adjust timing, pass marks and
          attempt policy. Question content is managed in the question bank.
        </p>
      </div>
      <ExamSetManager examSets={examSets} />
    </div>
  );
}
