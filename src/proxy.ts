import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { isSupabaseConfigured, supabaseEnv } from "@/lib/env";
import { courses } from "@/data/courses";

const protectedPrefixes = ["/dashboard", "/admin"];
const learningCourseSlugs = new Set(Object.keys(courses));

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // PPR commits a 200 shell before a route can call notFound(), so unknown
  // course slugs must be rejected here instead. The rewrite target must match
  // no route: in production builds "/404" serves the static not-found page
  // with a 200, so use an unmatched path and let Next answer with 404.
  const learningSlug = path.match(/^\/learning\/([^/?]+)/)?.[1];
  if (learningSlug && !learningCourseSlugs.has(learningSlug)) {
    return NextResponse.rewrite(new URL("/missing-page", request.url));
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(supabaseEnv.url, supabaseEnv.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
        Object.entries(headers).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
      },
    },
  });

  // Refresh the session so Server Components receive a valid token.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isProtected = protectedPrefixes.some((prefix) =>
    path.startsWith(prefix),
  );

  if (!user && isProtected) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.search = "";
    loginUrl.searchParams.set("next", path);
    return NextResponse.redirect(loginUrl);
  }

  if (user && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
