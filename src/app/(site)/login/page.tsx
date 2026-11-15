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
  title: "Log in",
  description:
    "Sign in to MockAcademy to continue your PRINCE2 Foundation lessons and mock exams.",
};

export const instant = false;

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();
  const resetSucceeded = params.reset === "success";
  const linkExpired = params.error === "link-expired";
  const nextParam = typeof params.next === "string" ? params.next : undefined;
  const next =
    nextParam && nextParam.startsWith("/") && !nextParam.startsWith("//")
      ? nextParam
      : undefined;

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
              <Badge tone="sand">Student account</Badge>
            </div>
            <h1 className="display mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Welcome back.
            </h1>
            <p className="mt-2 text-pretty text-[0.9rem] leading-relaxed text-muted-foreground">
              Sign in to pick up your PRINCE2 Foundation lessons and mock exams
              where you left off.
            </p>

            {!configured ? (
              <div className="mt-7">
                <BackendSetupNotice
                  title="Sign-in is not connected yet"
                  description="Accounts, saved progress and exam attempts need a Supabase project. The course and mock exam catalogue can still be browsed."
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
                {resetSucceeded ? (
                  <div
                    role="status"
                    className="mt-6 rounded-xl border border-primary/20 bg-accent/60 p-3.5 text-[0.75rem] leading-relaxed text-accent-foreground"
                  >
                    Your password has been updated. Sign in with the new password.
                  </div>
                ) : null}
                {linkExpired ? (
                  <div
                    role="alert"
                    className="mt-6 rounded-xl border border-destructive/25 bg-destructive/5 p-3.5 text-[0.75rem] leading-relaxed text-destructive"
                  >
                    That link has expired or was already used. Request a new one
                    below.
                  </div>
                ) : null}

                <AuthForm mode="login" next={next} />

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
                  Your progress and exam attempts are tied to your account and
                  visible only to you.
                </p>
              </>
            )}
          </div>
        </div>

        <AuthAside mode="login" />
      </div>
    </main>
  );
}
