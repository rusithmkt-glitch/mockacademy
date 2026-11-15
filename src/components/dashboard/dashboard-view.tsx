"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  Flame,
  Sparkles,
  Trophy,
  Target,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StatCard } from "@/components/stat-card";
import { PageMotion } from "@/components/motion/page-motion";
import { Badge } from "@/components/ui/badge";
import { ProgressBar, ProgressRing } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { examSets } from "@/data/mock-exams";
import { student } from "@/data/student";
import { getExamConfig, topicModuleMap } from "@/data/exams/config";
import {
  course,
  formatDuration,
  getCourseStats,
  getProgressPercent,
  getResumeSession,
  getSessionById,
} from "@/lib/course";
import { getRecommendedLessons } from "@/lib/exam/recommendations";
import type { TopicResult } from "@/lib/exam/types";
import { useDemoStore } from "@/lib/progress/provider";

interface AttemptView {
  id: string;
  examId: string;
  title: string;
  dateLabel: string;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  topics?: TopicResult[];
}

export function DashboardView() {
  const { completedSessionIds, attempts: storedAttempts } = useDemoStore();
  const stats = getCourseStats(course);
  const courseSessionIds = course.modules.flatMap((module) =>
    module.sessions.map((session) => session.id),
  );
  const completedIds = courseSessionIds.filter((id) =>
    completedSessionIds.includes(id),
  );
  const completed = completedIds.length;
  const percent = getProgressPercent(completed, stats.sessionCount);
  const resume = getResumeSession(completedIds);
  const resumeHref = `/learning/prince2-foundation/${resume.module.slug}/${resume.session.slug}`;

  const localAttempts: AttemptView[] = storedAttempts.map((attempt) => ({
    id: attempt.id,
    examId: attempt.examId,
    title: attempt.examTitle,
    dateLabel: new Date(attempt.completedAt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    score: attempt.score,
    total: attempt.total,
    percent: attempt.percent,
    passed: attempt.passed,
    topics: attempt.topics,
  }));

  const staticAttempts: AttemptView[] = student.examAttempts.map((attempt) => ({
    id: attempt.id,
    examId: attempt.examId,
    title:
      examSets.find((exam) => exam.id === attempt.examId)?.title ?? "Mock exam",
    dateLabel: attempt.date,
    score: attempt.score,
    total: attempt.total,
    percent: Math.round((attempt.score / attempt.total) * 100),
    passed: attempt.passed,
  }));

  const attempts = [...localAttempts, ...staticAttempts];
  const latestLocalAttempt = localAttempts[0];

  const bestAttempt = attempts.reduce((best, attempt) =>
    attempt.percent > best.percent ? attempt : best,
  );
  const bestPercent = bestAttempt.percent;
  const bestExam = examSets.find((exam) => exam.id === bestAttempt.examId);

  const topicRows = latestLocalAttempt?.topics
    ? latestLocalAttempt.topics.map((topic) => ({
        topic: topic.topic,
        moduleId: topicModuleMap[topic.topic],
        score: topic.percent,
      }))
    : student.topicPerformance;

  const lowestTopic = topicRows.reduce((lowest, topic) =>
    topic.score < lowest.score ? topic : lowest,
  );
  const focusModule = course.modules.find(
    (module) => module.id === lowestTopic.moduleId,
  );
  const focusHref = focusModule
    ? `/learning/prince2-foundation/${focusModule.slug}/${focusModule.sessions[0].slug}`
    : resumeHref;

  const recommended = latestLocalAttempt?.topics
    ? getRecommendedLessons(latestLocalAttempt.topics).map((lesson) => ({
        id: lesson.moduleId,
        href: lesson.href,
        title: lesson.sessionTitle,
        meta: `${lesson.moduleTitle} · ${lesson.topic} ${lesson.percent}%`,
      }))
    : student.recommendedSessionIds.flatMap((id) => {
        const ref = getSessionById(id);
        if (!ref) return [];
        return [
          {
            id: ref.session.id,
            href: `/learning/prince2-foundation/${ref.module.slug}/${ref.session.slug}`,
            title: ref.session.title,
            meta: `${ref.module.shortTitle} · ${ref.session.durationMinutes} min`,
          },
        ];
      });

  const weeklyPercent = getProgressPercent(
    student.studyMinutesThisWeek,
    student.weeklyGoalMinutes,
  );
  const quickExams = examSets.filter((exam) => !exam.featured).slice(0, 2);
  const passMarkPercent = getExamConfig("mock-a")?.passMarkPercent ?? 60;
  const passedAttempts = attempts.filter((attempt) => attempt.passed).length;

  return (
    <>
      <main id="main" className="flex-1">
        <PageMotion />
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 size-80 rounded-full bg-lilac/70 blur-3xl"
          />
          <div className="shell relative py-10 sm:py-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="eyebrow">Your dashboard</p>
                  <Badge tone="sand">
                    <Sparkles className="size-3" aria-hidden="true" />
                    Demo data
                  </Badge>
                </div>
                <h1 className="display mt-3 text-balance text-3xl leading-tight text-foreground sm:text-4xl">
                  Welcome back, {student.firstName}.
                </h1>
                <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Here is where your PRINCE2 Foundation preparation stands. Pick
                  up where you left off, or use the gaps to decide what to study
                  next.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-semibold text-foreground">
                    {student.firstName} {student.lastName}
                  </p>
                  <p className="text-[0.7rem] text-muted-foreground">
                    Member since {student.memberSince}
                  </p>
                </div>
                <span className="flex size-12 items-center justify-center rounded-full bg-navy font-heading text-lg text-white">
                  {student.firstName[0]}
                  {student.lastName[0]}
                </span>
              </div>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="Course progress"
                value={`${percent}%`}
                meta={`${completed} of ${stats.sessionCount} sessions complete`}
                icon={BookOpen}
                tone="pink"
              />
              <StatCard
                label="Mock exams taken"
                value={`${attempts.length}`}
                meta="Across full and focused papers"
                icon={FileText}
                tone="lilac"
              />
              <StatCard
                label="Best score"
                value={`${bestPercent}%`}
                meta={bestExam?.title ?? "Latest mock exam"}
                icon={Trophy}
                tone="sand"
              />
              <StatCard
                label="Study streak"
                value={`${student.streakDays} days`}
                meta={`${student.studyMinutesThisWeek} of ${student.weeklyGoalMinutes} min this week`}
                icon={Flame}
                tone="navy"
              />
            </div>
          </div>
        </section>

        <section className="shell py-8 lg:py-10">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <section
                aria-labelledby="continue-learning"
                data-reveal
                className="relative overflow-hidden rounded-3xl bg-navy p-6 text-white shadow-lift sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="dot-grid absolute inset-0 opacity-[0.12]"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 size-64 rounded-full border border-white/10"
                />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-lg">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      Continue learning
                    </p>
                    <p className="mt-3 text-[0.72rem] text-white/50">
                      Module {resume.module.order} · {resume.module.title}
                    </p>
                    <h2
                      id="continue-learning"
                      className="mt-1 font-heading text-2xl leading-tight sm:text-[1.8rem]"
                    >
                      {resume.session.title}
                    </h2>
                    <p className="mt-2 text-pretty text-[0.82rem] leading-relaxed text-white/55">
                      {resume.session.summary}
                    </p>
                    <div className="mt-5 max-w-sm">
                      <div className="flex items-center justify-between text-[0.68rem]">
                        <span className="text-white/50">Course progress</span>
                        <span className="font-medium">{percent}%</span>
                      </div>
                      <ProgressBar
                        value={percent}
                        className="mt-2 h-1.5 bg-white/15"
                        label="Course progress"
                      />
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="mb-3 hidden items-center gap-1.5 text-[0.68rem] text-white/45 sm:flex">
                      <Clock3 className="size-3" aria-hidden="true" />
                      {resume.session.durationMinutes} min · knowledge check
                    </span>
                    <Link
                      href={resumeHref}
                      className={buttonVariants({
                        variant: "inverse",
                        size: "cta",
                        className: "w-full",
                      })}
                    >
                      Resume lesson
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </section>

              <section
                aria-labelledby="recent-attempts"
                data-reveal
                className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2
                      id="recent-attempts"
                      className="font-heading text-xl text-foreground"
                    >
                      Recent mock exams
                    </h2>
                    <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
                      Your previous scores, newest first
                    </p>
                  </div>
                  <Link
                    href="/mock-exams"
                    className="inline-flex items-center gap-1 text-[0.72rem] font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    All mock exams
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </Link>
                </div>

                <ul className="mt-4 divide-y divide-border">
                  {attempts.map((attempt) => {
                    return (
                      <li
                        key={attempt.id}
                        className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3.5 first:pt-1 last:pb-0 sm:grid-cols-[auto_1fr_auto_auto]"
                      >
                        <span className="flex size-9 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                          <FileText className="size-4" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[0.82rem] font-medium text-foreground">
                            {attempt.title}
                          </p>
                          <p className="mt-0.5 text-[0.65rem] text-muted-foreground">
                            {attempt.dateLabel} · {attempt.total} questions
                          </p>
                        </div>
                        <div className="hidden w-28 sm:block">
                          <ProgressBar
                            value={attempt.percent}
                            className="h-1"
                            label={`${attempt.title} score`}
                          />
                        </div>
                        <div className="text-right">
                          <p className="text-[0.82rem] font-semibold text-foreground">
                            {attempt.score}/{attempt.total}
                          </p>
                          <p className="text-[0.62rem] text-muted-foreground">
                            {attempt.percent}%
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 flex items-center gap-2 rounded-xl bg-accent/50 px-3.5 py-2.5">
                  <CheckCircle2 className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-[0.7rem] leading-relaxed text-accent-foreground">
                    {passedAttempts} of {attempts.length} attempts passed the{" "}
                    {passMarkPercent}% Foundation threshold.
                  </p>
                </div>
              </section>

              <section
                aria-labelledby="topic-performance"
                data-reveal
                className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2
                      id="topic-performance"
                      className="font-heading text-xl text-foreground"
                    >
                      Topic performance
                    </h2>
                    <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
                      {latestLocalAttempt
                        ? "Based on your latest mock attempt"
                        : "Based on your last three attempts"}
                    </p>
                  </div>
                  <Target className="size-5 text-primary" aria-hidden="true" />
                </div>

                <div className="mt-5 space-y-4">
                  {topicRows.map((topic) => {
                    const isFocus = topic.topic === lowestTopic.topic;
                    return (
                      <div key={topic.topic}>
                        <div className="flex items-center justify-between gap-3 text-[0.75rem]">
                          <span className="flex items-center gap-2 font-medium text-foreground">
                            {topic.topic}
                            {isFocus ? (
                              <span className="rounded-full bg-sand px-1.5 py-0.5 text-[0.55rem] font-semibold uppercase tracking-wide text-navy">
                                Focus
                              </span>
                            ) : null}
                          </span>
                          <span className="text-muted-foreground">{topic.score}%</span>
                        </div>
                        <ProgressBar
                          value={topic.score}
                          className="mt-1.5 h-1.5"
                          label={`${topic.topic} performance`}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-col items-start justify-between gap-3 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-[0.78rem] font-medium text-foreground">
                      Your weakest area is {lowestTopic.topic.toLowerCase()}.
                    </p>
                    <p className="mt-0.5 text-[0.68rem] text-muted-foreground">
                      A short review of the related module should close the gap.
                    </p>
                  </div>
                  <Link
                    href={focusHref}
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className: "shrink-0 bg-card",
                    })}
                  >
                    Review module
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </Link>
                </div>
              </section>
            </div>

            <aside className="space-y-4 lg:col-span-4">
              <section
                data-reveal
                className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-lg text-foreground">
                    Weekly goal
                  </h2>
                  <Badge tone="pink">{weeklyPercent}%</Badge>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <ProgressRing
                    value={weeklyPercent}
                    size={92}
                    strokeWidth={8}
                    className="shrink-0"
                  >
                    <span className="font-heading text-xl text-foreground">
                      {weeklyPercent}%
                    </span>
                  </ProgressRing>
                  <div>
                    <p className="text-[0.78rem] font-medium text-foreground">
                      {student.studyMinutesThisWeek} of{" "}
                      {student.weeklyGoalMinutes} minutes
                    </p>
                    <p className="mt-1 text-[0.68rem] leading-relaxed text-muted-foreground">
                      {student.weeklyGoalMinutes - student.studyMinutesThisWeek}{" "}
                      minutes to hit this week&apos;s target.
                    </p>
                    <Link
                      href={resumeHref}
                      className="mt-2 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-primary hover:text-primary/80"
                    >
                      Keep going
                      <ArrowRight className="size-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </section>

              <section
                aria-labelledby="recommended-lessons"
                data-reveal
                className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-primary">
                    <Sparkles className="size-3.5" aria-hidden="true" />
                  </span>
                  <h2
                    id="recommended-lessons"
                    className="font-heading text-lg text-foreground"
                  >
                    Recommended lessons
                  </h2>
                </div>
                <ul className="mt-4 space-y-2">
                  {recommended.map((lesson) => (
                    <li key={lesson.id}>
                      <Link
                        href={lesson.href}
                        className="group flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-colors hover:border-border hover:bg-muted/50"
                      >
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-[0.55rem] font-semibold text-muted-foreground">
                          <Sparkles className="size-3" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.78rem] font-medium leading-snug text-foreground">
                            {lesson.title}
                          </span>
                          <span className="mt-0.5 block text-[0.62rem] text-muted-foreground">
                            {lesson.meta}
                          </span>
                        </span>
                        <ArrowRight className="mt-1 size-3.5 shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                aria-labelledby="quick-mock-exams"
                data-reveal
                className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-sand text-navy">
                      <FileText className="size-3.5" aria-hidden="true" />
                    </span>
                    <h2
                      id="quick-mock-exams"
                      className="font-heading text-lg text-foreground"
                    >
                      Quick access
                    </h2>
                  </div>
                  <Link
                    href="/mock-exams"
                    className="text-[0.68rem] font-medium text-primary hover:text-primary/80"
                  >
                    View all
                  </Link>
                </div>
                <ul className="mt-4 space-y-2">
                  {quickExams.map((exam) => (
                    <li key={exam.id}>
                      <Link
                        href={`/mock-exams/${exam.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-3.5 py-3 transition-colors hover:border-primary/25 hover:bg-accent/30"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[0.78rem] font-medium text-foreground">
                            {exam.title}
                          </p>
                          <p className="mt-0.5 text-[0.62rem] text-muted-foreground">
                            {exam.questionCount} questions · {exam.durationMinutes} min
                          </p>
                        </div>
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                          <ArrowRight className="size-3" aria-hidden="true" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                data-reveal
                className="rounded-3xl border border-primary/15 bg-accent/50 p-5"
              >
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  <p className="text-[0.78rem] font-semibold text-accent-foreground">
                    You&apos;re closer than you think
                  </p>
                </div>
                <p className="mt-1.5 text-[0.7rem] leading-relaxed text-accent-foreground/75">
                  {completed} sessions down, {stats.sessionCount - completed} to
                  go. At your current pace, that&apos;s{" "}
                  {formatDuration(
                    (stats.sessionCount - completed) * 15,
                  )}{" "}
                  of study remaining.
                </p>
              </section>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
