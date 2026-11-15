import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  ListChecks,
  ShieldCheck,
  Users,
} from "lucide-react";
import { listAdminExamSets, loadAdminOverview } from "@/lib/admin/queries";

export const metadata: Metadata = { title: "Admin overview" };

export const instant = false;

export default async function AdminOverviewPage() {
  const [{ overview, error }, examSets] = await Promise.all([
    loadAdminOverview(),
    listAdminExamSets(),
  ]);

  const stats = [
    {
      label: "Students",
      value: overview.students,
      hint: "student accounts",
      icon: GraduationCap,
    },
    {
      label: "Staff",
      value: overview.staff,
      hint: "administrators",
      icon: Users,
    },
    {
      label: "Published papers",
      value: `${overview.publishedExams} / ${overview.totalExams}`,
      hint: "live in the catalogue",
      icon: BookOpen,
    },
    {
      label: "Active questions",
      value: overview.activeQuestions,
      hint: "available to papers",
      icon: ListChecks,
    },
    {
      label: "Exam attempts",
      value: overview.attempts,
      hint: `${overview.submitted} submitted`,
      icon: ShieldCheck,
    },
    {
      label: "Pass rate",
      value: `${overview.passRate}%`,
      hint: "across submitted papers",
      icon: CheckCircle2,
    },
  ];

  const readiness = examSets.map((exam) => ({
    ...exam,
    ready: exam.activeQuestions >= exam.questionCount,
  }));
  const notReady = readiness.filter((exam) => !exam.ready);

  return (
    <div className="space-y-7">
      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-[0.8rem] text-destructive"
        >
          {error}
        </p>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </p>
                <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 font-heading text-3xl text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-[0.7rem] text-muted-foreground">
                {stat.hint}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
        <section className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-heading text-lg text-foreground">
              Paper readiness
            </h2>
            <Link
              href="/admin/exams"
              className="inline-flex items-center gap-1 text-[0.72rem] font-semibold text-primary hover:underline"
            >
              Manage papers
              <ArrowRight className="size-3" aria-hidden="true" />
            </Link>
          </div>
          {readiness.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-border px-4 py-6 text-center text-[0.8rem] text-muted-foreground">
              No exam sets exist yet. Run the seed script or add a paper.
            </p>
          ) : (
            <ul className="mt-4 divide-y divide-border">
              {readiness.map((exam) => (
                <li
                  key={exam.id}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[0.8rem] font-medium text-foreground">
                      {exam.title}
                    </p>
                    <p className="text-[0.66rem] text-muted-foreground">
                      {exam.activeQuestions} active of {exam.questionCount} needed
                      {exam.isPublished ? " · published" : " · draft"}
                    </p>
                  </div>
                  {exam.ready ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-mint px-2 py-0.5 text-[0.62rem] font-semibold text-navy">
                      <CheckCircle2 className="size-3" aria-hidden="true" />
                      Ready
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber px-2 py-0.5 text-[0.62rem] font-semibold text-navy">
                      <AlertTriangle className="size-3" aria-hidden="true" />
                      Needs questions
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-border bg-card p-5">
          <h2 className="font-heading text-lg text-foreground">Activity</h2>
          <dl className="mt-4 space-y-3 text-[0.78rem]">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-muted-foreground">Session completions</dt>
              <dd className="font-semibold text-foreground">
                {overview.sessionCompletions}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-muted-foreground">Knowledge checks taken</dt>
              <dd className="font-semibold text-foreground">
                {overview.knowledgeChecks}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-muted-foreground">Papers needing questions</dt>
              <dd className="font-semibold text-foreground">{notReady.length}</dd>
            </div>
          </dl>
          <Link
            href="/admin/questions"
            className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-[0.75rem] font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Open question bank
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </div>
  );
}
