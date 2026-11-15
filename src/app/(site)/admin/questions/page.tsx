import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { QuestionManager } from "@/components/admin/question-manager";
import { listAdminExamSets, loadQuestionBank } from "@/lib/admin/queries";

export const metadata: Metadata = { title: "Question bank" };

export const instant = false;

export default async function AdminQuestionsPage({
  searchParams,
}: {
  searchParams: Promise<{ exam?: string }>;
}) {
  const { exam: examParam } = await searchParams;
  const examSets = await listAdminExamSets();

  if (examSets.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
        <p className="font-heading text-lg text-foreground">
          No exam sets yet
        </p>
        <p className="mx-auto mt-2 max-w-md text-[0.8rem] leading-relaxed text-muted-foreground">
          Questions belong to a paper. Create an exam set first, then return here
          to build its question bank.
        </p>
        <Link
          href="/admin/exams"
          className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-[0.75rem] font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Go to exam sets
        </Link>
      </div>
    );
  }

  const selected =
    examSets.find((set) => set.slug === examParam) ?? examSets[0];
  const { questions, error } = await loadQuestionBank(selected.id);
  const shortfall = Math.max(0, selected.questionCount - selected.activeQuestions);

  return (
    <div className="space-y-5">
      <div className="scroll-slim -mx-1 flex gap-1 overflow-x-auto pb-1">
        {examSets.map((set) => {
          const active = set.id === selected.id;
          return (
            <Link
              key={set.id}
              href={`/admin/questions?exam=${encodeURIComponent(set.slug)}`}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "shrink-0 rounded-full bg-navy px-3.5 py-1.5 text-[0.72rem] font-semibold text-white"
                  : "shrink-0 rounded-full border border-border bg-card px-3.5 py-1.5 text-[0.72rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {set.title}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl text-foreground">{selected.title}</h2>
          <p className="mt-1 text-[0.74rem] text-muted-foreground">
            {selected.slug} · {selected.durationMinutes} minutes ·{" "}
            {selected.passPercent}% pass · {selected.selectionMode} selection
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-[0.64rem] font-semibold">
          <span
            className={
              selected.isPublished
                ? "rounded-full bg-mint px-2.5 py-1 text-navy"
                : "rounded-full bg-sand px-2.5 py-1 text-navy"
            }
          >
            {selected.isPublished ? "Published" : "Draft"}
          </span>
          <span
            className={
              shortfall > 0
                ? "inline-flex items-center gap-1 rounded-full bg-amber px-2.5 py-1 text-navy"
                : "rounded-full bg-accent px-2.5 py-1 text-accent-foreground"
            }
          >
            {shortfall > 0 ? (
              <>
                <AlertTriangle className="size-3" aria-hidden="true" />
                {shortfall} more question{shortfall === 1 ? "" : "s"} needed
              </>
            ) : (
              "Question target met"
            )}
          </span>
        </div>
      </div>

      <QuestionManager
        key={selected.id}
        examSet={selected}
        questions={questions}
        initialError={error}
      />
    </div>
  );
}
