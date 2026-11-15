import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { EmailOtpType } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabaseEnv } from "@/lib/env";

function safeNext(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/dashboard";
  }
  return value;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  if (!isSupabaseConfigured()) {
    return NextResponse.redirect(new URL("/login?error=not-configured", url.origin));
  }

  const next = safeNext(url.searchParams.get("next"));
  const code = url.searchParams.get("code");
  const tokenHash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as EmailOtpType | null;

  const pendingCookies: {
    name: string;
    value: string;
    options?: CookieOptions;
  }[] = [];

  const supabase = createServerClient(supabaseEnv.url, supabaseEnv.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach((cookie) => pendingCookies.push(cookie));
      },
    },
  });

  let ok = false;

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    ok = !error;
  } else if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });
    ok = !error;
  }

  if (ok) {
    try {
      await supabase.rpc("ensure_current_profile");
    } catch {
      // The sign-up trigger normally creates the profile.
    }
  }

  const destination = ok ? next : "/login?error=link-expired";
  const response = NextResponse.redirect(new URL(destination, url.origin));
  pendingCookies.forEach(({ name, value, options }) => {
    response.cookies.set(name, value, options);
  });
  return response;
}
