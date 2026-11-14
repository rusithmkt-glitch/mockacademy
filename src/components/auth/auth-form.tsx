"use client";

import { useState } from "react";
import {
  AtSign,
  Eye,
  EyeOff,
  Info,
  KeyRound,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const copy = {
  login: {
    submit: "Sign in",
    passwordHint: "Enter your password.",
  },
  register: {
    submit: "Create free account",
    passwordHint: "Use at least 8 characters.",
  },
};

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isRegister = mode === "register";

  return (
    <form
      className="mt-7 space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex items-start gap-2.5 rounded-xl border border-gold/40 bg-sand/80 p-3.5">
        <Info className="mt-0.5 size-4 shrink-0 text-navy" aria-hidden="true" />
        <p className="text-[0.72rem] leading-relaxed text-navy/70">
          <span className="font-semibold">Preview release.</span> Authentication
          is not live yet. Submitting this form will not create or sign in to an
          account.
        </p>
      </div>

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
              name="name"
              type="text"
              autoComplete="name"
              required
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
        <label
          htmlFor="password"
          className="block text-[0.75rem] font-semibold text-foreground"
        >
          Password
        </label>
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

      <Button type="submit" size="cta" className="w-full">
        {copy[mode].submit}
      </Button>

      <div aria-live="polite">
        {submitted ? (
          <div
            role="status"
            className="rounded-xl border border-primary/20 bg-accent/60 p-3.5 text-[0.72rem] leading-relaxed text-accent-foreground"
          >
            Nothing was submitted. Accounts and saved progress are part of a
            future release — thank you for previewing the interface.
          </div>
        ) : null}
      </div>
    </form>
  );
}
