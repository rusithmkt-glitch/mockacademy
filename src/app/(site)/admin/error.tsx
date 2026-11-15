"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function AdminError({ reset }: { reset: () => void }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <span className="flex size-9 items-center justify-center rounded-xl bg-amber-soft text-navy">
        <AlertTriangle className="size-4" aria-hidden="true" />
      </span>
      <h2 className="mt-4 font-heading text-xl text-foreground">
        This admin screen could not load
      </h2>
      <p className="mt-2 max-w-xl text-[0.82rem] leading-relaxed text-muted-foreground">
        Something went wrong while loading administration data. Your changes
        were not affected. Try again, or return to the overview.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-primary px-4 py-2 text-[0.75rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try again
        </button>
        <Link
          href="/admin"
          className="rounded-full border border-border px-4 py-2 text-[0.75rem] font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Back to overview
        </Link>
      </div>
    </div>
  );
}
