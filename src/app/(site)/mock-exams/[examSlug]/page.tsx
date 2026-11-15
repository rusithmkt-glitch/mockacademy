import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, FileText, Target } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { PageMotion } from "@/components/motion/page-motion";
import { ExamRunner } from "@/components/exams/exam-runner";
import { Badge } from "@/components/ui/badge";
import { examSets } from "@/data/mock-exams";
import { examQuestionBank } from "@/data/exams/questions";
import { getExamConfig } from "@/data/exams/config";
import { selectExamQuestions } from "@/lib/exam/selection";
import { toPresentedQuestion } from "@/lib/exam/presentation";

type Params = { examSlug: string };

// The exam runner replaces this page's content once an attempt starts, so a
// blocking navigation to the paper is acceptable and avoids instant-shell
// validation around the dynamic slug.
export const instant = false;

export function generateStaticParams(): Params[] {
  return examSets.map((exam) => ({ examSlug: exam.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { examSlug } = await params;
  const exam = examSets.find((item) => item.slug === examSlug);
  if (!exam) return {};
  return {
    title: exam.title,
    description: exam.description,
  };
}

export default async function MockExamPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { examSlug } = await params;
  const exam = examSets.find((item) => item.slug === examSlug);
  const config = exam ? getExamConfig(exam.id) : undefined;
  if (!exam || !config) notFound();

  const fixedQuestions =
    config.selection.mode === "fixed"
      ? selectExamQuestions(config).map(toPresentedQuestion)
      : [];
  const pool =
    config.selection.mode === "random"
      ? examQuestionBank.map(toPresentedQuestion)
      : [];

  return (
    <>
      <main id="main" className="flex-1">
        <PageMotion />
        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="dot-grid absolute -right-8 top-8 h-64 w-72 opacity-20"
          />
          <div
            aria-hidden="true"
            className="absolute -left-24 top-24 size-64 rounded-full bg-lilac/60 blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8 lg:pb-20">
            <nav
              aria-label="Breadcrumb"
              className="text-[0.7rem] text-muted-foreground"
            >
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/mock-exams"
                    className="transition-colors hover:text-foreground"
                  >
                    Mock exams
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {exam.title}
                </li>
              </ol>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge tone="lavender">{exam.difficulty}</Badge>
              {exam.featured ? <Badge tone="navy">Start here</Badge> : null}
              <Badge tone="outline">PRINCE2 7th edition</Badge>
            </div>

            <h1 className="display mt-4 text-balance text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-[2.75rem]">
              {exam.title}
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {exam.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.72rem] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <FileText className="size-3.5 text-plum" aria-hidden="true" />
                {config.questionCount} questions
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5 text-plum" aria-hidden="true" />
                {config.durationMinutes} minutes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Target className="size-3.5 text-plum" aria-hidden="true" />
                {config.passMarkPercent}% pass mark
              </span>
              <span>Closed book</span>
            </div>

            <ExamRunner
              examId={exam.id}
              examTitle={exam.title}
              config={config}
              fixedQuestions={fixedQuestions}
              pool={pool}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
