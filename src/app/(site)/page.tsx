import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ChartNoAxesColumn,
  Check,
  FileText,
  Layers,
  ListChecks,
  LockOpen,
  Plus,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { PageMotion } from "@/components/motion/page-motion";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ModuleCard } from "@/components/course-card";
import { ExamArt, HeroArt, LearningArt } from "@/components/illustrations/home-art";
import { course, formatDuration, getCourseStats } from "@/lib/course";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is MockAcademy really free?",
    answer:
      "Yes. Every mock exam and every lesson is free to access. There is no trial period, no card required and no locked content. MockAcademy is designed as an open study resource for PRINCE2 Foundation learners.",
  },
  {
    question: "Do I need an account to use the site?",
    answer:
      "You can browse the course and the exam catalogue without signing in. Create a free account when you want us to save lesson progress and knowledge-check results to your dashboard.",
  },
  {
    question: "Is MockAcademy affiliated with PeopleCert?",
    answer:
      "No. PRINCE2® is a registered trademark of the PeopleCert group. MockAcademy is independent and not affiliated with, endorsed by or licensed by PeopleCert. Every lesson and question is original material written to help you prepare for the PRINCE2 7th edition Foundation exam.",
  },
  {
    question: "What is the PRINCE2 Foundation exam format?",
    answer:
      "The current Foundation exam is 60 multiple-choice questions in 60 minutes, closed book, with a pass mark of 60% (36 out of 60). Always check the latest details with PeopleCert before booking your exam.",
  },
  {
    question: "Which edition of PRINCE2 does the course follow?",
    answer:
      "The course follows the PRINCE2 7th edition (2023) syllabus, covering principles, people, practices, processes and project context.",
  },
  {
    question: "How long does the course take?",
    answer:
      "The 66 sessions total around 15 hours of focused study. Most learners spread this over a few weeks and add two or three mock exams before sitting the real thing.",
  },
  {
    question: "Can I study on a phone or tablet?",
    answer:
      "Yes. The lesson player is fully responsive. On smaller screens the complete course-contents sidebar becomes a slide-out drawer, so you can jump between sessions without losing your place.",
  },
];

const benefitTones = [
  { card: "bg-lavender-soft/70", icon: "bg-lavender text-navy" },
  { card: "bg-amber-soft/80", icon: "bg-amber text-navy" },
  { card: "bg-mint-soft/80", icon: "bg-mint text-navy" },
];

const faqTones = [
  "bg-lavender-soft/80",
  "bg-amber-soft",
  "bg-mint-soft/80",
];

const benefits = [
  {
    icon: FileText,
    title: "Exam-realistic practice",
    body: "Full papers with 60 questions in 60 minutes, covering all five syllabus areas in exam proportions.",
  },
  {
    icon: Layers,
    title: "One connected syllabus",
    body: "The course, mock exams and navigation all share the same structure — no conflicting outlines to reconcile.",
  },
  {
    icon: Sparkles,
    title: "Visual, not verbose",
    body: "Illustrated scenes and plain-English explanations turn abstract method concepts into something memorable.",
  },
  {
    icon: Smartphone,
    title: "Made for any screen",
    body: "A learning experience designed for laptops, tablets and phones, with a sidebar that adapts to the space.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Progress you can see",
    body: "Track completed sessions, see topic-level performance and know which lessons to revisit before exam day.",
  },
  {
    icon: LockOpen,
    title: "Free, without caveats",
    body: "No subscription, no upsell and no paywalled papers. Quality preparation should not depend on your budget.",
  },
];

const stepTones = ["bg-lavender", "bg-amber", "bg-mint"];

const steps = [
  {
    title: "Choose where to start",
    body: "Take a mock exam cold to see where you stand, or begin at the foundations and build up. Both routes use the same syllabus.",
  },
  {
    title: "Practise and learn",
    body: "Work through illustrated lessons, run quick knowledge checks, and use the syllabus sidebar to move between topics.",
  },
  {
    title: "Know when you're ready",
    body: "Review scores across papers and topic-level performance, then spend your final week on the areas that need attention.",
  },
];

export default function HomePage() {
  const stats = getCourseStats(course);
  const firstModule = course.modules[0];
  const firstSession = firstModule.sessions[0];

  return (
    <>
      <main id="main" className="flex-1">
        <PageMotion />
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            data-parallax="0.05"
            className="absolute -right-32 -top-32 size-[34rem] rounded-full border border-primary/10"
          />
          <div
            aria-hidden="true"
            data-parallax="0.11"
            className="absolute -right-10 top-24 size-[22rem] rounded-full border border-primary/10"
          />
          <div
            aria-hidden="true"
            className="dot-grid absolute bottom-10 left-0 h-56 w-64 opacity-30"
          />

          <div className="shell grid items-center gap-14 pb-14 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24 lg:pt-20">
            <div>
              <div data-hero-item>
                <Badge
                  tone="lavender"
                  className="px-3.5 py-1.5 text-[0.66rem] uppercase tracking-[0.14em]"
                >
                  <span className="size-1.5 rounded-full bg-plum" />
                  Free PRINCE2® Foundation preparation
                </Badge>
              </div>
              <h1
                data-hero-item
                className="display mt-6 text-balance text-[2.6rem] leading-[1.06] text-foreground sm:text-6xl lg:text-[4.15rem]"
              >
                Build the <span className="text-plum">confidence</span> to
                pass PRINCE2 Foundation.
              </h1>
              <p
                data-hero-item
                className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Free mock exams and illustrated lessons, built around the full
                PRINCE2 Foundation syllabus. Understand the method, practise the
                questions, and know exactly when you&apos;re ready.
              </p>

              <div data-hero-item className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/mock-exams"
                  className={buttonVariants({ size: "cta-lg" })}
                >
                  Start free mock exam
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/learning"
                  className={buttonVariants({
                    variant: "outline",
                    size: "cta-lg",
                    className: "bg-card",
                  })}
                >
                  <BookOpen className="size-4" aria-hidden="true" />
                  Explore free lessons
                </Link>
              </div>

              <ul
                data-hero-item
                className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.78rem] text-muted-foreground"
              >
                {["No card required", "Exam-aligned content", "Built for UK learners"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-plum" strokeWidth={2.5} />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div data-hero-visual className="lg:pl-4">
              <HeroArt />
            </div>
          </div>

          <div className="shell pb-14 sm:pb-16">
            <dl data-reveal className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                {
                  value: "7",
                  label: "PRINCE2 principles",
                  Icon: FileText,
                  tint: "bg-lavender-soft text-plum",
                },
                {
                  value: `${stats.sessionCount}`,
                  label: "Illustrated lessons",
                  Icon: BookOpen,
                  tint: "bg-amber-soft text-navy",
                },
                {
                  value: "60 / 60",
                  label: "Questions / minutes",
                  Icon: Timer,
                  tint: "bg-mint-soft text-navy",
                },
                {
                  value: "£0",
                  label: "Always free",
                  Icon: Check,
                  tint: "bg-lilac text-plum",
                },
              ].map(({ value, label, Icon, tint }) => (
                <div
                  key={label}
                  className={cn(
                    "relative rounded-2xl border border-border/60 px-5 py-5",
                    tint,
                  )}
                >
                  <Icon
                    className="absolute right-4 top-4 size-4 opacity-60"
                    aria-hidden="true"
                  />
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-navy/55">
                    {label}
                  </dt>
                  <dd className="mt-1.5 font-heading text-2xl leading-none text-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Mock exams feature */}
        <section className="border-y border-border/70 bg-lavender-soft/60">
          <div className="shell grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
            <div data-reveal>
              <Badge
                tone="lavender"
                className="mb-3 px-3 py-1 text-[0.64rem] uppercase tracking-[0.14em]"
              >
                Mock examinations
              </Badge>
              <h2 className="display mt-3 text-balance text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-[2.7rem]">
                Practise under real exam conditions.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                Our mock papers mirror the structure of the PRINCE2 Foundation
                exam: 60 questions, 60 minutes, five syllabus areas. Sitting a
                full paper is the fastest way to turn knowledge into exam
                technique.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  {
                    icon: Timer,
                    text: "60 questions in 60 minutes — the real Foundation format",
                    tint: "bg-lavender text-navy",
                  },
                  {
                    icon: ListChecks,
                    text: "Questions across principles, people, practices, processes and context",
                    tint: "bg-amber text-navy",
                  },
                  {
                    icon: LockOpen,
                    text: "Every paper free, with no subscriptions or locked sets",
                    tint: "bg-mint text-navy",
                  },
                ].map(({ icon: Icon, text, tint }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg",
                        tint,
                      )}
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-[0.9rem] leading-relaxed text-foreground/80">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/mock-exams"
                  className={buttonVariants({ size: "cta" })}
                >
                  Browse mock exams
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <span className="text-[0.78rem] text-muted-foreground">
                  No card. No time limit on your access.
                </span>
              </div>
            </div>
            <div data-reveal>
              <ExamArt />
            </div>
          </div>
        </section>

        {/* Learning feature */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            data-parallax="0.1"
            className="absolute -left-32 top-1/3 size-96 rounded-full bg-mint/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            data-parallax="0.06"
            className="absolute -right-24 bottom-10 size-72 rounded-full bg-amber/20 blur-3xl"
          />
          <div className="shell relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
            <div data-reveal className="order-2 lg:order-1">
              <LearningArt />
            </div>
            <div data-reveal className="order-1 lg:order-2">
              <Badge
                tone="mint"
                className="mb-3 px-3 py-1 text-[0.64rem] uppercase tracking-[0.14em]"
              >
                Interactive learning
              </Badge>
              <h2 className="display mt-3 text-balance text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-[2.7rem]">
                Lessons that make the method click.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                Sixty-six short sessions take you from the seven principles
                to project closure. Each one explains the idea in plain English,
                shows it in context and ends with a quick knowledge check.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "A persistent syllabus sidebar shows every module and session",
                  "Illustrated scenes break down roles, processes and product flows",
                  "Knowledge checks give immediate explanations while ideas are fresh",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint text-navy">
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-[0.9rem] leading-relaxed text-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/learning/prince2-foundation/${firstModule.slug}/${firstSession.slug}`}
                  className={buttonVariants({ size: "cta" })}
                >
                  Explore the course
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <span className="text-[0.78rem] text-muted-foreground">
                  {stats.moduleCount} modules ·{" "}
                  {formatDuration(stats.durationMinutes)} of study
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-y border-border/60 bg-amber-soft/60">
          <div className="shell py-20 lg:py-24">
            <SectionHeading
              eyebrow="How it works"
              pillTone="amber"
              title="A simple routine for exam readiness."
              description="No sprawling study plan. Three habits, repeated until the method feels familiar."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  data-reveal
                  className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft"
                >
                  <div
                    className={cn(
                      "flex items-center justify-between px-5 py-4",
                      stepTones[index % stepTones.length],
                    )}
                  >
                    <span className="font-heading text-2xl leading-none text-navy/75">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-navy shadow-sm">
                      Step {index + 1}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course preview */}
        <section className="shell py-20 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="The course"
              pillTone="lavender"
              title="A complete PRINCE2 Foundation syllabus."
              description="13 modules, 66 sessions and a clear path through the method — from the principles to the closing process."
            />
            <Link
              href="/learning/prince2-foundation"
              className={buttonVariants({
                variant: "outline",
                size: "cta",
                className: "shrink-0 bg-card",
              })}
            >
              View the full course
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.modules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                href={`/learning/prince2-foundation/${module.slug}/${module.sessions[0].slug}`}
              />
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-border/70 bg-card">
          <div className="shell py-20 lg:py-24">
            <SectionHeading
              eyebrow="Why MockAcademy"
              pillTone="mint"
              title="Designed for the way you actually revise."
              description="Focused, visual and honest about what you need to know. No filler, no gamified noise, no paywalls."
              align="center"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, body }, index) => {
                const tone = benefitTones[index % benefitTones.length];
                return (
                  <div
                    key={title}
                    data-reveal
                    className={cn(
                      "rounded-2xl border border-border/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/15 hover:shadow-soft",
                      tone.card,
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-9 items-center justify-center rounded-xl",
                        tone.icon,
                      )}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-pretty text-[0.82rem] leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="shell py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Common questions"
                pillTone="lavender"
                title="Everything else you might be wondering."
                description="If your question is not here, the answer is probably 'yes, it's free'."
              />
              <div className="mt-8 hidden rounded-2xl border border-border/60 bg-lavender-soft/70 p-5 lg:block">
                <ShieldCheck className="size-5 text-plum" aria-hidden="true" />
                <p className="mt-3 text-sm font-medium text-foreground">
                  Independent and transparent
                </p>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-muted-foreground">
                  PRINCE2® is a registered trademark of the PeopleCert group.
                  MockAcademy is independent and not affiliated with PeopleCert.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  data-reveal
                  className={cn(
                    "group rounded-2xl border border-border/70 px-5",
                    faqTones[index % faqTones.length],
                  )}
                >
                  <summary className="flex items-start justify-between gap-5 py-4">
                    <span className="font-heading text-[1.05rem] leading-snug text-foreground">
                      {faq.question}
                    </span>
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-transform duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-white">
                      <Plus className="size-3.5" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 pr-10 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
