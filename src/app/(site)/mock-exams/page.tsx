import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { PageMotion } from "@/components/motion/page-motion";
import { CatalogueIntro } from "@/components/catalogue/catalogue-intro";
import { ExamLibrary } from "@/components/catalogue/exam-library";
import { BackendSetupNotice } from "@/components/setup/backend-setup-notice";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { examBlueprint, practitionerBlueprint } from "@/data/mock-exams";
import { FOUNDATION_MOCK_ID, getExamConfig } from "@/data/exams/config";
import { isSupabaseConfigured } from "@/lib/env";
import { listPublishedExams } from "@/lib/exams/queries";

export const metadata: Metadata = {
  title: "Free PRINCE2 Foundation and Practitioner mock exams",
  description:
    "Free PRINCE2 7th edition mock exams: a fixed 60-question Foundation paper, a random Foundation simulator, and an open-book Practitioner paper with a project scenario worth 68 marks.",
};

export const instant = false;

const defaultConfig = getExamConfig(FOUNDATION_MOCK_ID);

const examFormat = [
  { label: "Questions", value: String(defaultConfig?.questionCount ?? 60) },
  {
    label: "Time allowed",
    value: `${defaultConfig?.durationMinutes ?? 60} min`,
  },
  { label: "Pass mark", value: `${defaultConfig?.passMarkPercent ?? 60}%` },
  { label: "Format", value: "Closed book" },
];

const tips = [
  {
    title: "Sit the mock exam early",
    body: "A baseline score tells you more than another hour of reading. Take the Foundation mock exam before you feel ready, then retake it to see how far you have come.",
  },
  {
    title: "Review every miss",
    body: "The value is in the review. Note the syllabus area behind each wrong answer, not just the correct letter.",
  },
  {
    title: "Finish with the simulator",
    body: "Each simulator attempt draws a fresh paper from a larger bank, so you cannot rely on memory. Use it in the final weeks to check you are ready for exam day.",
  },
];

export default async function MockExamsPage() {
  const configured = isSupabaseConfigured();
  const exams = configured ? await listPublishedExams() : [];

  return (
    <>
      <main id="main" className="flex-1">
        <PageMotion />

        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="dot-grid absolute -right-8 top-10 h-72 w-80 opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute -left-24 top-32 size-72 rounded-full bg-lilac/70 blur-3xl"
          />

          <div className="shell relative pb-16 pt-8 sm:pt-10 lg:pb-20">
            <nav
              aria-label="Breadcrumb"
              className="text-[0.75rem] text-muted-foreground"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  Mock exams
                </li>
              </ol>
            </nav>

            <div className="mt-10">
              <CatalogueIntro
                headingLevel="h1"
                pill="Free exam library"
                title={
                  exams.length === 3
                    ? "Three free mock exams. One clear goal: exam readiness."
                    : exams.length > 0
                      ? `${exams.length} ${exams.length === 1 ? "paper" : "papers"}. One clear goal: exam readiness.`
                      : "Free mock papers. One clear goal: exam readiness."
                }
                description="A fixed Foundation mock to measure your progress, a random simulator that feels like exam day, and an open-book Practitioner paper built around a project scenario. All free, all built around the PRINCE2 7th edition syllabus."
              >
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <Badge tone="lavender">
                    <Check className="size-3" aria-hidden="true" />
                    All papers free
                  </Badge>
                  <Badge tone="outline">No card required</Badge>
                  <Badge tone="outline">PRINCE2 7th edition</Badge>
                </div>
              </CatalogueIntro>
            </div>

            {!configured ? (
              <div className="mt-9">
                <BackendSetupNotice
                  title="The exam library is not connected yet"
                  description="Papers, questions and attempts are served from Supabase. Add your project credentials and apply the migrations to publish the free papers."
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
            ) : exams.length === 0 ? (
              <div className="mt-9 rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
                <p className="font-heading text-lg text-foreground">
                  No papers are published yet
                </p>
                <p className="mx-auto mt-2 max-w-md text-pretty text-[0.82rem] leading-relaxed text-muted-foreground">
                  Published mock papers will appear here as soon as they are
                  added in Supabase. Check back shortly.
                </p>
              </div>
            ) : (
              <ExamLibrary exams={exams} />
            )}
          </div>
        </section>

        <section className="border-y border-border/70 bg-card">
          <div className="shell py-16 lg:py-20">
            <CatalogueIntro
              pill="About the exams"
              title="Built around the real papers."
              description="The same topics, the same proportions and the same time pressure — so your practice actually tells you something."
            />

            <div
              data-reveal
              className="mx-auto mt-10 max-w-3xl space-y-3"
            >
              <details className="group rounded-2xl border border-border/70 bg-lavender-soft/80 px-5">
                <summary className="flex items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white text-plum">
                      <FileText className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-[1.02rem] text-foreground">
                      What does the exam look like?
                    </span>
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-transform duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-white">
                    <Plus className="size-3.5" aria-hidden="true" />
                  </span>
                </summary>
                <div className="pb-5 pl-11 pr-1">
                  <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {examFormat.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-white/75 px-3 py-2.5"
                      >
                        <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="mt-1 font-heading text-base leading-none text-foreground">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-[0.72rem] leading-relaxed text-muted-foreground">
                    Always confirm current exam rules with PeopleCert before
                    booking. MockAcademy papers are for practice only. The
                    Practitioner paper is different again: 56 items worth 68
                    marks in 2 hours 30, open book, pass at 38 marks, with
                    three-mark matching sets against a project scenario. New to
                    the format?{" "}
                    <Link
                      href="/guides/prince2-foundation-exam-format-pass-mark"
                      className="font-semibold text-primary underline-offset-2 hover:underline"
                    >
                      Read the exam format guide
                    </Link>
                    .
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border/70 bg-amber-soft px-5">
                <summary className="flex items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white text-plum">
                      <BookOpen className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-[1.02rem] text-foreground">
                      What does each paper cover?
                    </span>
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-transform duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-white">
                    <Plus className="size-3.5" aria-hidden="true" />
                  </span>
                </summary>
                <div className="pb-5 pl-11 pr-1">
                  <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-plum">
                    Foundation papers
                  </p>
                  <ul className="space-y-2">
                    {examBlueprint.map((item) => (
                      <li
                        key={item.topic}
                        className="rounded-xl bg-white/75 px-3 py-2"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <span className="text-[0.8rem] font-semibold text-foreground">
                            {item.topic}
                          </span>
                          <span className="text-[0.62rem] font-medium text-plum">
                            {item.share}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[0.74rem] leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-2 mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-plum">
                    Practitioner paper
                  </p>
                  <ul className="space-y-2">
                    {practitionerBlueprint.map((item) => (
                      <li
                        key={item.topic}
                        className="rounded-xl bg-white/75 px-3 py-2"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <span className="text-[0.8rem] font-semibold text-foreground">
                            {item.topic}
                          </span>
                          <span className="text-[0.62rem] font-medium text-plum">
                            {item.share}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[0.74rem] leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>

              <details className="group rounded-2xl border border-border/70 bg-mint-soft px-5">
                <summary className="flex items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white text-plum">
                      <Check className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-[1.02rem] text-foreground">
                      How should I use the papers?
                    </span>
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-transform duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-white">
                    <Plus className="size-3.5" aria-hidden="true" />
                  </span>
                </summary>
                <div className="pb-5 pl-11 pr-1">
                  <ol className="space-y-2.5">
                    {tips.map((tip, index) => (
                      <li key={tip.title} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-[0.62rem] text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-[0.8rem] font-semibold text-foreground">
                            {tip.title}
                          </p>
                          <p className="mt-0.5 text-[0.75rem] leading-relaxed text-muted-foreground">
                            {tip.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>

              <details className="group rounded-2xl border border-border/70 bg-lilac px-5">
                <summary className="flex items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white text-plum">
                      <ShieldCheck className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-[1.02rem] text-foreground">
                      Are mock scores a prediction?
                    </span>
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-transform duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-white">
                    <Plus className="size-3.5" aria-hidden="true" />
                  </span>
                </summary>
                <div className="pb-5 pl-11 pr-1">
                  <p className="text-[0.8rem] leading-relaxed text-muted-foreground">
                    No. Mock scores are an indication, not a guarantee. Use them
                    to direct your study and spot weak syllabus areas, not to
                    predict the real exam result. PeopleCert sets and marks the
                    live paper.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="shell py-16 lg:py-20">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-lilac/60 px-6 py-10 sm:px-10"
          >
            <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-25" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="eyebrow">Before your first paper</p>
                <h2 className="display mt-2 text-balance text-2xl leading-tight text-foreground sm:text-3xl">
                  New to PRINCE2? Start with the free course.
                </h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Sixty-six illustrated sessions cover the full syllabus, so
                  your first mock measures understanding rather than guesswork.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/learning/prince2-foundation"
                  className={buttonVariants({ size: "cta" })}
                >
                  <BookOpen className="size-4" aria-hidden="true" />
                  Explore the course
                </Link>
                <Link
                  href="/learning/prince2-foundation/foundations/what-is-prince2"
                  className={buttonVariants({
                    variant: "outline",
                    size: "cta",
                    className: "bg-card",
                  })}
                >
                  First lesson
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
