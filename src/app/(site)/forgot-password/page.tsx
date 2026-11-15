import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthAside } from "@/components/auth/auth-aside";
import { ForgotPasswordForm } from "@/components/auth/password-forms";
import { BackendSetupNotice } from "@/components/setup/backend-setup-notice";
import { PageMotion } from "@/components/motion/page-motion";
import { Badge } from "@/components/ui/badge";
import { isSupabaseConfigured } from "@/lib/env";

export const metadata: Metadata = {
  title: "Reset your password",
  description: "Request a secure password reset link for your MockAcademy account.",
};

export default function ForgotPasswordPage() {
  const configured = isSupabaseConfigured();

  return (
    <main id="main" className="flex-1">
      <PageMotion />
      <div className="grid min-h-[calc(100dvh-4rem)] lg:grid-cols-2">
        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:py-14">
          <div className="w-full max-w-[26rem]">
            <Link
              href="/login"
              className="group inline-flex items-center gap-1.5 text-[0.72rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              Back to log in
            </Link>

            <div className="mt-7">
              <Badge tone="sand">Account recovery</Badge>
            </div>
            <h1 className="display mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Reset your password.
            </h1>
            <p className="mt-2 text-pretty text-[0.9rem] leading-relaxed text-muted-foreground">
              Enter the email address you signed up with and we will send a
              single-use reset link.
            </p>

            {configured ? (
              <ForgotPasswordForm />
            ) : (
              <div className="mt-7">
                <BackendSetupNotice
                  title="Password reset needs the backend"
                  description="Account recovery requires a Supabase project with email delivery configured."
                  envVars={[
                    "NEXT_PUBLIC_SUPABASE_URL",
                    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
                    "SUPABASE_SERVICE_ROLE_KEY",
                  ]}
                />
              </div>
            )}
          </div>
        </div>

        <AuthAside mode="login" />
      </div>
    </main>
  );
}
