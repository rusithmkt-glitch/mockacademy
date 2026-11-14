import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SceneIllustration } from "@/components/illustrations/scene-illustration";
import { PageMotion } from "@/components/motion/page-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main" className="flex-1">
      <PageMotion />
      <div className="shell flex min-h-[calc(100dvh-4rem)] items-center py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-xl">
            <Badge tone="sand">404 — Page not found</Badge>
            <h1 className="display mt-5 text-balance text-4xl leading-tight text-foreground sm:text-5xl">
              This page isn’t on the syllabus.
            </h1>
            <p className="mt-4 max-w-md text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
              The link may be out of date, or the lesson may have moved. Head
              back to the course or try a mock paper instead.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/learning/prince2-foundation"
                className={buttonVariants({ size: "cta" })}
              >
                Explore the course
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/mock-exams"
                className={buttonVariants({ variant: "outline", size: "cta" })}
              >
                Browse mock exams
              </Link>
            </div>
            <Link
              href="/"
              className="group mt-7 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              Back to home
            </Link>
          </div>

          <SceneIllustration
            variant="foundations"
            className="hidden lg:block"
          />
        </div>
      </div>
    </main>
  );
}
