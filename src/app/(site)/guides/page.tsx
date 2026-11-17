import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { PageMotion } from "@/components/motion/page-motion";
import { CatalogueIntro } from "@/components/catalogue/catalogue-intro";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "PRINCE2 Foundation guides",
  description:
    "Plain-English guides to PRINCE2 7th edition Foundation: exam format and pass mark, the seven principles, a four-week study plan and free mock exams.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <main id="main" className="flex-1">
        <PageMotion />
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -left-24 top-24 size-72 rounded-full bg-lilac/70 blur-3xl"
          />
          <div className="shell relative pb-16 pt-8 sm:pt-10 lg:pb-20">
            <nav aria-label="Breadcrumb" className="text-[0.75rem] text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  Guides
                </li>
              </ol>
            </nav>

            <div className="mt-10">
              <CatalogueIntro
                headingLevel="h1"
                pill="Plain-English guides"
                title="PRINCE2 Foundation, without the waffle."
                description="Short, practical guides to the exam and the method — written around the PRINCE2 7th edition syllabus, with free mock exams and lessons behind every one."
              />
            </div>

            <div data-reveal className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-card"
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-primary">
                    <Compass className="size-4" aria-hidden="true" />
                  </span>
                  <h2 className="mt-3 font-heading text-[1.02rem] font-semibold leading-snug text-foreground">
                    {guide.title}
                  </h2>
                  <p className="mt-1.5 flex-1 text-pretty text-[0.78rem] leading-relaxed text-muted-foreground">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[0.72rem] font-semibold text-primary">
                    Read the guide
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>

            <div data-reveal className="mx-auto mt-10 max-w-4xl rounded-2xl border border-primary/15 bg-accent/50 p-5 text-center">
              <p className="text-[0.85rem] font-semibold text-foreground">
                Prefer learning by doing?
              </p>
              <p className="mx-auto mt-1 max-w-lg text-[0.78rem] leading-relaxed text-muted-foreground">
                The full course is free: 13 modules, 66 illustrated sessions and
                two exam-condition mock papers.
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-[0.75rem] font-semibold">
                <Link href="/learning/prince2-foundation" className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-white transition-transform hover:-translate-y-0.5">
                  <BookOpen className="size-3.5" aria-hidden="true" />
                  Start the course
                </Link>
                <Link href="/mock-exams" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-foreground transition-transform hover:-translate-y-0.5">
                  Sit a mock exam
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
