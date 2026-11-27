import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthAside } from "@/components/auth/auth-aside";
import { AuthForm } from "@/components/auth/auth-form";
import { BackendSetupNotice } from "@/components/setup/backend-setup-notice";
import { PageMotion } from "@/components/motion/page-motion";
import { Badge } from "@/components/ui/badge";
import { isSupabaseConfigured } from "@/lib/env";

export const metadata: Metadata = {
  title: "Create an account",
  description:
    "Create a free MockAcademy account to study PRINCE2 Foundation lessons and sit mock exams.",
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  const configured = isSupabaseConfigured();

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

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <Badge tone="sand">Student account</Badge>
              <Badge tone="pink">Free forever</Badge>
            </div>
            <h1 className="display mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Create your free account.
            </h1>
            <p className="mt-2 text-pretty text-[0.9rem] leading-relaxed text-muted-foreground">
              One account for the complete PRINCE2 Foundation course and every
              mock paper. No card, no subscription.
            </p>

            {!configured ? (
              <div className="mt-7">
                <BackendSetupNotice
                  title="Registration is not connected yet"
                  description="New accounts need a Supabase project. You can still explore the full course and exam catalogue without registering."
                  envVars={[
                    "NEXT_PUBLIC_SUPABASE_URL",
                    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
                    "SUPABASE_SERVICE_ROLE_KEY",
                  ]}
                  steps={[
                    "Create a Supabase project.",
                    "Copy .env.example to .env.local and fill in the Supabase values.",
                    "Apply the SQL migrations in supabase/migrations.",
                    "Restart the development server and reload this page.",
                  ]}
                />
              </div>
            ) : (
              <>
                <AuthForm mode="register" />

                <p className="mt-6 text-center text-[0.8rem] text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Sign in
                  </Link>
                </p>

                <p className="mt-8 border-t border-border pt-5 text-center text-[0.66rem] leading-relaxed text-muted-foreground">
                  You can explore the course and exam catalogue without
                  registering. Accounts unlock saved progress and scored exams.
                </p>
              </>
            )}
          </div>
        </div>

        <AuthAside mode="register" />
      </div>
    </main>
  );
}
