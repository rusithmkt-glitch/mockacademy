import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthAside } from "@/components/auth/auth-aside";
import { AuthForm } from "@/components/auth/auth-form";
import { PageMotion } from "@/components/motion/page-motion";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Log in",
  description:
    "Sign in to MockAcademy to continue your PRINCE2 Foundation lessons and mock exams.",
};

export default function LoginPage() {
  return (
    <main id="main" className="flex-1">
      <PageMotion />
      <div className="grid min-h-[calc(100dvh-4rem)] lg:grid-cols-2">
        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:py-14">
          <div className="w-full max-w-[26rem]">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-[0.72rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              Back to home
            </Link>

            <div className="mt-7">
              <Badge tone="sand">Preview release</Badge>
            </div>
            <h1 className="display mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Welcome back.
            </h1>
            <p className="mt-2 text-pretty text-[0.9rem] leading-relaxed text-muted-foreground">
              Sign in to pick up your PRINCE2 Foundation lessons and mock exams
              where you left off.
            </p>

            <AuthForm mode="login" />

            <p className="mt-6 text-center text-[0.8rem] text-muted-foreground">
              New to MockAcademy?{" "}
              <Link
                href="/register"
                className="font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Create a free account
              </Link>
            </p>

            <p className="mt-8 border-t border-border pt-5 text-center text-[0.66rem] leading-relaxed text-muted-foreground">
              No lessons or progress are stored by this preview. Explore the
              course and exam catalogue without signing in.
            </p>
          </div>
        </div>

        <AuthAside mode="login" />
      </div>
    </main>
  );
}
