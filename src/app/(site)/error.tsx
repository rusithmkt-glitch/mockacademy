"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function SiteError({ reset }: { reset: () => void }) {
  return (
    <main className="flex-1">
      <div className="shell py-16 sm:py-24">
        <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
          <span className="flex size-10 items-center justify-center rounded-xl bg-amber-soft text-navy">
            <AlertTriangle className="size-5" aria-hidden="true" />
          </span>
          <h1 className="display mt-5 text-3xl text-foreground">
            Something went wrong
          </h1>
          <p className="mt-3 text-[0.88rem] leading-relaxed text-muted-foreground">
            We could not load this page. This is usually temporary — try again,
            or head back to the course while we recover.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-primary px-5 py-2.5 text-[0.8rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Try again
            </button>
            <Link
              href="/learning"
              className="rounded-full border border-border bg-background px-5 py-2.5 text-[0.8rem] font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Back to learning
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
