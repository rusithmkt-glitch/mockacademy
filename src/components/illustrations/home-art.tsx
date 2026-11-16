import {
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  FileText,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { ProgressBar, ProgressRing } from "@/components/ui/progress";

const options = [
  { letter: "A", text: "Manage by stages", selected: false },
  { letter: "B", text: "Continued business justification", selected: true },
  { letter: "C", text: "Focus on products", selected: false },
  { letter: "D", text: "Defined roles and responsibilities", selected: false },
];

export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]" aria-hidden="true">
      <div className="absolute inset-x-3 top-10 bottom-4 rounded-[3rem] bg-lavender-soft" />
      <div className="absolute -right-6 top-4 size-40 rounded-full bg-amber/35 blur-2xl" />
      <div className="relative rounded-[2rem] border border-border bg-card/70 p-3 shadow-lift backdrop-blur-sm sm:p-4">
        <div className="relative overflow-hidden rounded-[1.4rem] border border-border/80 bg-card p-4 sm:p-6">
          <div className="dot-grid absolute inset-0 opacity-25" />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-navy text-white">
                  <BookOpen className="size-4" />
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Exam simulator
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Question 18 of 60
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber px-2.5 py-1 text-[0.65rem] font-semibold text-navy">
                <Clock3 className="size-3" />
                42:10
              </span>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-background p-4">
              <div className="flex items-center justify-between">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Principles
                </p>
                <span className="text-[0.6rem] font-medium text-muted-foreground">
                  1 mark
                </span>
              </div>
              <p className="mt-2 font-heading text-[1.02rem] leading-snug text-foreground">
                Which principle keeps a project aligned to a valid business
                case?
              </p>
              <div className="mt-3.5 space-y-1.5">
                {options.map((option) => (
                  <div
                    key={option.letter}
                    className={
                      option.selected
                        ? "flex items-center gap-2.5 rounded-lg border border-navy/15 bg-mint-soft px-2.5 py-1.5 text-[0.73rem] font-medium text-foreground"
                        : "flex items-center gap-2.5 rounded-lg border border-border/70 bg-card px-2.5 py-1.5 text-[0.73rem] text-muted-foreground"
                    }
                  >
                    <span
                      className={
                        option.selected
                          ? "flex size-4 items-center justify-center rounded-full bg-mint text-navy"
                          : "flex size-4 items-center justify-center rounded-full border border-border text-[0.55rem]"
                      }
                    >
                      {option.selected ? (
                        <Check className="size-2.5" strokeWidth={3} />
                      ) : (
                        option.letter
                      )}
                    </span>
                    {option.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[0.65rem] font-medium text-muted-foreground">
                Section 2 of 5
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-[0.7rem] font-semibold text-primary-foreground">
                Next question
                <ArrowRight className="size-3" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        data-float
        className="absolute -left-4 bottom-10 hidden w-44 rounded-2xl border border-border bg-card p-3.5 shadow-lift sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-lavender text-navy">
            <Sparkles className="size-3.5" />
          </span>
          <p className="text-[0.68rem] font-semibold text-foreground">
            Learning progress
          </p>
        </div>
        <p className="mt-2.5 text-[0.68rem] text-muted-foreground">
          23 of 66 sessions complete
        </p>
        <ProgressBar value={35} className="mt-2 h-1" />
      </div>

      <div className="absolute -right-3 top-20 hidden w-36 rotate-2 rounded-2xl border border-border bg-card p-3 shadow-lift sm:block lg:-right-6">
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Latest score
        </p>
        <div className="mt-1 flex items-end justify-between">
          <p className="font-heading text-2xl leading-none text-foreground">82%</p>
          <ProgressRing value={82} size={38} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
}

export function ExamArt() {
  return (
    <div className="relative mx-auto w-full max-w-[30rem]" aria-hidden="true">
      <div className="absolute inset-x-6 top-6 bottom-0 rounded-[2.5rem] bg-amber-soft" />
      <div className="relative rounded-[1.75rem] border border-border bg-card p-5 shadow-lift sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-plum">
              Full simulation
            </p>
            <p className="mt-1 font-heading text-xl text-foreground">
              Mock Exam A
            </p>
          </div>
          <span className="rounded-full bg-amber px-2.5 py-1 text-[0.65rem] font-semibold text-navy">
            Free
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-border bg-background p-3">
            <FileText className="size-4 text-plum" />
            <p className="mt-2 font-heading text-lg leading-none text-foreground">
              60
            </p>
            <p className="mt-1 text-[0.65rem] text-muted-foreground">questions</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-3">
            <Clock3 className="size-4 text-plum" />
            <p className="mt-2 font-heading text-lg leading-none text-foreground">
              60 min
            </p>
            <p className="mt-1 text-[0.65rem] text-muted-foreground">duration</p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-background p-4">
          <div className="flex items-center justify-between text-[0.68rem]">
            <span className="font-medium text-foreground">Syllabus coverage</span>
            <span className="text-muted-foreground">5 areas</span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              ["Principles", 92],
              ["Practices", 76],
              ["Processes", 68],
            ].map(([label, value]) => (
              <div key={label as string} className="flex items-center gap-2">
                <span className="w-16 text-[0.62rem] text-muted-foreground">
                  {label}
                </span>
                <ProgressBar value={value as number} className="h-1 flex-1" />
                <span className="w-8 text-right text-[0.6rem] font-medium text-muted-foreground">
                  {value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-navy px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <LockKeyhole className="size-3.5 text-gold" />
            <span className="text-[0.7rem] font-medium">Free access</span>
          </div>
          <span className="text-[0.7rem] text-white/60">No card needed</span>
        </div>
      </div>
    </div>
  );
}

export function LearningArt() {
  return (
    <div className="relative mx-auto w-full max-w-[32rem]" aria-hidden="true">
      <div className="absolute inset-x-4 top-8 bottom-0 rounded-[2.5rem] bg-mint-soft" />
      <div className="relative rounded-[1.75rem] border border-border bg-card p-3 shadow-lift">
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="flex items-center justify-between border-b border-border bg-background px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Module 1 · Session 2
              </p>
            </div>
            <span className="text-[0.6rem] text-muted-foreground">16 min</span>
          </div>
          <div className="p-4">
            <p className="font-heading text-lg leading-snug text-foreground">
              The seven principles
            </p>
            <div className="relative mt-3 h-36 overflow-hidden rounded-xl bg-mint-soft">
              <svg
                viewBox="0 0 400 144"
                className="size-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  d="M42 108C92 44 146 42 196 76s98 34 158-24"
                  fill="none"
                  stroke="var(--plum)"
                  strokeOpacity="0.45"
                  strokeWidth="2"
                  strokeDasharray="5 7"
                />
                {[
                  { x: 42, y: 108, label: "1" },
                  { x: 134, y: 58, label: "2" },
                  { x: 226, y: 82, label: "3" },
                  { x: 354, y: 49, label: "4" },
                ].map((node, index) => (
                  <g key={node.label}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="17"
                      fill={index < 3 ? "var(--plum)" : "var(--card)"}
                      stroke="var(--plum)"
                      strokeOpacity="0.35"
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="600"
                      fill={index < 3 ? "var(--primary-foreground)" : "var(--foreground)"}
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-2.5 left-3 rounded-lg border border-border bg-card/95 px-2.5 py-1.5 shadow-soft">
                <p className="text-[0.58rem] font-semibold text-foreground">
                  Guiding obligations
                </p>
                <p className="text-[0.52rem] text-muted-foreground">
                  All seven always apply
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-mint text-navy">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold text-foreground">
                    Knowledge check
                  </p>
                  <p className="text-[0.55rem] text-muted-foreground">
                    One question · instant feedback
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-amber px-2.5 py-1 text-[0.58rem] font-semibold text-navy">
                Ready
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-3 -top-3 hidden rotate-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lift sm:block">
        <p className="text-[0.55rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Course
        </p>
        <p className="text-[0.7rem] font-semibold text-foreground">
          13 modules · 66 sessions
        </p>
      </div>
    </div>
  );
}
