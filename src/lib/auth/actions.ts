"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";
import type { AuthFormState } from "@/lib/auth/types";

const SETUP_MESSAGE =
  "Accounts are not available yet because the backend is not configured. Add the Supabase environment variables and try again.";

async function getSiteOrigin(): Promise<string> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const proto = headerList.get("x-forwarded-proto") ?? "http";
  return host ? `${proto}://${host}` : "http://localhost:3000";
}

function safeNext(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//")) {
    return null;
  }
  return value;
}

function authErrorMessage(message: string | undefined): string {
  const normalized = (message ?? "").toLowerCase();
  if (normalized.includes("invalid login credentials")) {
    return "That email and password do not match. Check both and try again.";
  }
  if (normalized.includes("email not confirmed")) {
    return "Confirm your email address first — check your inbox for the link.";
  }
  if (
    normalized.includes("already registered") ||
    normalized.includes("already exists")
  ) {
    return "An account with this email already exists. Try signing in instead.";
  }
  if (normalized.includes("password should be at least")) {
    return "Choose a password of at least 8 characters.";
  }
  if (
    normalized.includes("rate limit") ||
    normalized.includes("too many requests")
  ) {
    return "Too many attempts. Please wait a moment and try again.";
  }
  if (normalized.includes("same password")) {
    return "Your new password needs to be different from the current one.";
  }
  if (normalized.includes("invalid email")) {
    return "Enter a valid email address.";
  }
  if (
    normalized.includes("fetch") ||
    normalized.includes("network") ||
    normalized.includes("timeout")
  ) {
    return "We could not reach the sign-in service. Check your connection and try again.";
  }
  return "That request could not be completed. Please try again.";
}

async function ensureProfile(): Promise<void> {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase.rpc("ensure_current_profile");
  } catch {
    // The sign-up trigger creates the profile; this only heals legacy users.
  }
}

export async function signIn(
  _previous: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (!isSupabaseConfigured()) {
    return { status: "error", message: SETUP_MESSAGE };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = safeNext(formData.get("next"));

  if (!email || !password) {
    return { status: "error", message: "Enter your email and password." };
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { status: "error", message: authErrorMessage(error.message) };
  }

  await ensureProfile();
  redirect(next ?? "/dashboard");
}

export async function signUp(
  _previous: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (!isSupabaseConfigured()) {
    return { status: "error", message: SETUP_MESSAGE };
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = safeNext(formData.get("next"));

  if (fullName.length < 2) {
    return { status: "error", message: "Enter your full name." };
  }
  if (!email.includes("@")) {
    return { status: "error", message: "Enter a valid email address." };
  }
  if (password.length < 8) {
    return { status: "error", message: "Choose a password of at least 8 characters." };
  }

  const [firstName, ...rest] = fullName.split(/\s+/);
  const lastName = rest.join(" ");
  const origin = await getSiteOrigin();
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { first_name: firstName, last_name: lastName },
      emailRedirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next ?? "/dashboard")}`,
    },
  });

  if (error) {
    return { status: "error", message: authErrorMessage(error.message) };
  }

  if (data.session) {
    await ensureProfile();
    redirect(next ?? "/dashboard");
  }

  return {
    status: "success",
    message:
      "Check your inbox: we sent a confirmation link to finish setting up your account.",
  };
}

export async function signOut(): Promise<void> {
  if (isSupabaseConfigured()) {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  }
  redirect("/");
}

export async function requestPasswordReset(
  _previous: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (!isSupabaseConfigured()) {
    return { status: "error", message: SETUP_MESSAGE };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!email.includes("@")) {
    return { status: "error", message: "Enter the email address you signed up with." };
  }

  const origin = await getSiteOrigin();
  const supabase = await createSupabaseServerClient();
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=${encodeURIComponent("/reset-password")}`,
  });

  // Always return the same message so the form cannot be used to discover
  // which addresses have accounts.
  return {
    status: "success",
    message:
      "If an account exists for that email, a reset link is on its way. Check your inbox and spam folder.",
  };
}

export async function updatePassword(
  _previous: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (!isSupabaseConfigured()) {
    return { status: "error", message: SETUP_MESSAGE };
  }

  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (password.length < 8) {
    return { status: "error", message: "Choose a password of at least 8 characters." };
  }
  if (password !== confirmPassword) {
    return { status: "error", message: "Both passwords must match." };
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      status: "error",
      message: "This reset link has expired. Request a new one from the log-in page.",
    };
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return { status: "error", message: authErrorMessage(error.message) };
  }

  redirect("/login?reset=success");
}
