"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { AtSign, CircleAlert, CircleCheck, Eye, EyeOff, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { requestPasswordReset, updatePassword } from "@/lib/auth/actions";
import { initialAuthState } from "@/lib/auth/types";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="cta" className="w-full" disabled={pending}>
      {pending ? "Please wait…" : label}
    </Button>
  );
}

function StatusMessage({
  status,
  message,
}: {
  status: "idle" | "error" | "success";
  message?: string;
}) {
  if (status === "idle" || !message) return null;
  return (
    <div
      role={status === "error" ? "alert" : "status"}
      className={
        status === "error"
          ? "flex items-start gap-2.5 rounded-xl border border-destructive/25 bg-destructive/5 p-3.5 text-[0.75rem] leading-relaxed text-destructive"
          : "flex items-start gap-2.5 rounded-xl border border-primary/20 bg-accent/60 p-3.5 text-[0.75rem] leading-relaxed text-accent-foreground"
      }
    >
      {status === "error" ? (
        <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      ) : (
        <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      )}
      <p>{message}</p>
    </div>
  );
}

export function ForgotPasswordForm() {
  const [state, formAction] = useActionState(requestPasswordReset, initialAuthState);

  return (
    <form action={formAction} className="mt-7 space-y-4">
      <StatusMessage status={state.status} message={state.message} />

      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-[0.75rem] font-semibold text-foreground"
        >
          Email address
        </label>
        <div className="relative">
          <AtSign
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="you@example.com"
            className="h-11 rounded-xl border-input bg-card pl-10 text-sm"
          />
        </div>
        <p className="text-[0.68rem] text-muted-foreground">
          We will send a single-use link to reset your password.
        </p>
      </div>

      <SubmitButton label="Send reset link" />

      <p className="text-center text-[0.72rem] text-muted-foreground">
        <Link
          href="/login"
          className="font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Back to log in
        </Link>
      </p>
    </form>
  );
}

export function ResetPasswordForm() {
  const [state, formAction] = useActionState(updatePassword, initialAuthState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} className="mt-7 space-y-4">
      <StatusMessage status={state.status} message={state.message} />

      <div className="space-y-1.5">
        <label
          htmlFor="new-password"
          className="block text-[0.75rem] font-semibold text-foreground"
        >
          New password
        </label>
        <div className="relative">
          <KeyRound
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="new-password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            minLength={8}
            placeholder="At least 8 characters"
            className="h-11 rounded-xl border-input bg-card pl-10 pr-11 text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOff className="size-4" aria-hidden="true" />
            ) : (
              <Eye className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="confirm-password"
          className="block text-[0.75rem] font-semibold text-foreground"
        >
          Confirm new password
        </label>
        <Input
          id="confirm-password"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          required
          minLength={8}
          placeholder="Repeat your new password"
          className="h-11 rounded-xl border-input bg-card px-3.5 text-sm"
        />
      </div>

      <SubmitButton label="Update password" />
    </form>
  );
}
