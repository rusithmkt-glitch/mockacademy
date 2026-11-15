"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  AtSign,
  CircleAlert,
  CircleCheck,
  Eye,
  EyeOff,
  KeyRound,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn, signUp } from "@/lib/auth/actions";
import { initialAuthState } from "@/lib/auth/types";

const copy = {
  login: {
    submit: "Sign in",
    passwordHint: "Enter the password for your account.",
  },
  register: {
    submit: "Create free account",
    passwordHint: "Use at least 8 characters.",
  },
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="cta" className="w-full" disabled={pending}>
      {pending ? "Please wait…" : label}
    </Button>
  );
}

export function AuthForm({
  mode,
  next,
}: {
  mode: "login" | "register";
  next?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isRegister = mode === "register";
  const action = isRegister ? signUp : signIn;
  const [state, formAction] = useActionState(action, initialAuthState);

  return (
    <form action={formAction} className="mt-7 space-y-4">
      {next ? <input type="hidden" name="next" value={next} /> : null}

      {state.status !== "idle" && state.message ? (
        <div
          role={state.status === "error" ? "alert" : "status"}
          className={
            state.status === "error"
              ? "flex items-start gap-2.5 rounded-xl border border-destructive/25 bg-destructive/5 p-3.5 text-[0.75rem] leading-relaxed text-destructive"
              : "flex items-start gap-2.5 rounded-xl border border-primary/20 bg-accent/60 p-3.5 text-[0.75rem] leading-relaxed text-accent-foreground"
          }
        >
          {state.status === "error" ? (
            <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          ) : (
            <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          )}
          <p>{state.message}</p>
        </div>
      ) : null}

      {isRegister ? (
        <div className="space-y-1.5">
          <label
            htmlFor="full-name"
            className="block text-[0.75rem] font-semibold text-foreground"
          >
            Full name
          </label>
          <div className="relative">
            <UserRound
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              placeholder="Alex Morgan"
              className="h-11 rounded-xl border-input bg-card pl-10 text-sm"
            />
          </div>
        </div>
      ) : null}

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
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-3">
          <label
            htmlFor="password"
            className="block text-[0.75rem] font-semibold text-foreground"
          >
            Password
          </label>
          {!isRegister ? (
            <Link
              href="/forgot-password"
              className="text-[0.7rem] font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Forgot password?
            </Link>
          ) : null}
        </div>
        <div className="relative">
          <KeyRound
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete={isRegister ? "new-password" : "current-password"}
            required
            minLength={isRegister ? 8 : undefined}
            aria-describedby="password-hint"
            placeholder={isRegister ? "At least 8 characters" : "Your password"}
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
        <p id="password-hint" className="text-[0.68rem] text-muted-foreground">
          {copy[mode].passwordHint}
        </p>
      </div>

      <SubmitButton label={copy[mode].submit} />
    </form>
  );
}
