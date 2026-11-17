import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Clock3, FileText, Target } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { PageMotion } from "@/components/motion/page-motion";
import { BackendSetupNotice } from "@/components/setup/backend-setup-notice";
import { ExamRunner } from "@/components/exams/exam-runner";
import { Badge } from "@/components/ui/badge";
import { getViewer } from "@/lib/auth/session";
import { isSupabaseConfigured } from "@/lib/env";
import { getExamBySlug, getExamPageState } from "@/lib/exams/queries";

type Params = { examSlug: string };

// The exam runner replaces this page's content once an attempt starts, so a
// blocking navigation to the paper is acceptable and avoids instant-shell
// validation around the dynamic slug.
export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { examSlug } = await params;
  const exam = await getExamBySlug(examSlug);
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
  await connection();

  if (!isSupabaseConfigured()) {
    return (
      <>
        <main id="main" className="flex-1">
          <PageMotion />
          <div className="shell py-16 lg:py-20">
            <BackendSetupNotice
              title="Mock papers are not connected yet"
              description="Exam papers, attempts and scoring are stored in Supabase. Add your project credentials to .env.local and run the database migrations to make this paper available."
              envVars={[
                "NEXT_PUBLIC_SUPABASE_URL",
                "NEXT_PUBLIC_SUPABASE_ANON_KEY",
                "SUPABASE_SERVICE_ROLE_KEY",
              ]}
              steps={[
                "Create a Supabase project and copy the API credentials.",
                "Copy .env.example to .env.local and fill in the Supabase values.",
                "Apply the SQL migrations in supabase/migrations.",
                "Seed the exam bank so published papers and questions exist.",
              ]}
            />
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  const exam = await getExamBySlug(examSlug);
  if (!exam) notFound();

  const viewer = await getViewer();
  const initialState = await getExamPageState(exam, viewer);

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
              {exam.isFeatured ? <Badge tone="navy">Start here</Badge> : null}
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
                {exam.questionCount} questions
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5 text-plum" aria-hidden="true" />
                {exam.durationMinutes} minutes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Target className="size-3.5 text-plum" aria-hidden="true" />
                {exam.passPercent}% pass mark
              </span>
              <span>Closed book</span>
            </div>

            <ExamRunner
              exam={exam}
              initialState={initialState}
              isAuthenticated={Boolean(viewer)}
              participantName={viewer?.fullName ?? ""}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
