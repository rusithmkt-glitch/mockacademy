import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Ready to see where you stand?",
  description = "Sit a free PRINCE2 Foundation mock exam, then use the lessons to close the gaps. No paywalls, no pressure.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("shell pb-20 sm:pb-24", className)}>
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white sm:px-12 sm:py-14"
      >
        <div
          aria-hidden="true"
          className="dot-grid absolute inset-0 opacity-[0.18]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-24 size-72 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 right-16 size-64 rounded-full bg-magenta/35 blur-3xl"
        />
        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/55">
              Free forever
            </p>
            <h2 className="display mt-3 text-balance text-3xl leading-[1.12] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/mock-exams"
              className={buttonVariants({
                variant: "inverse",
                size: "cta",
              })}
            >
              <FileText className="size-4" aria-hidden="true" />
              Start free mock
            </Link>
            <Link
              href="/learning/prince2-foundation"
              className={buttonVariants({
                variant: "outline-light",
                size: "cta",
              })}
            >
              <BookOpen className="size-4" aria-hidden="true" />
              Explore lessons
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
