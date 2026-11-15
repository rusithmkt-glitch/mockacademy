import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AuthAside } from "@/components/auth/auth-aside";
import { ResetPasswordForm } from "@/components/auth/password-forms";
import { BackendSetupNotice } from "@/components/setup/backend-setup-notice";
import { PageMotion } from "@/components/motion/page-motion";
import { Badge } from "@/components/ui/badge";
import { isSupabaseConfigured } from "@/lib/env";
import { getCurrentUser } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Choose a new password",
  description: "Set a new password for your MockAcademy account.",
  robots: { index: false, follow: false },
};

export const instant = false;

export default async function ResetPasswordPage() {
  if (!isSupabaseConfigured()) {
    return (
      <main id="main" className="flex-1 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <BackendSetupNotice
            title="Password reset needs the backend"
            description="Account recovery requires a Supabase project."
            envVars={["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"]}
          />
        </div>
      </main>
    );
  }

  const user = await getCurrentUser();
  if (!user) {
    redirect("/login?error=link-expired");
  }

  return (
    <main id="main" className="flex-1">
      <PageMotion />
      <div className="grid min-h-[calc(100dvh-4rem)] lg:grid-cols-2">
        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:py-14">
          <div className="w-full max-w-[26rem]">
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-1.5 text-[0.72rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              Back to dashboard
            </Link>

            <div className="mt-7">
              <Badge tone="sand">Account security</Badge>
            </div>
            <h1 className="display mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Choose a new password.
            </h1>
            <p className="mt-2 text-pretty text-[0.9rem] leading-relaxed text-muted-foreground">
              Signed in as {user.email}. Pick something you have not used before.
            </p>

            <ResetPasswordForm />
          </div>
        </div>

        <AuthAside mode="login" />
      </div>
    </main>
  );
}
