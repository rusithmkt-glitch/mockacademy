import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// Vercel hits this on a daily cron so the free-tier Supabase project never
// sees seven days of inactivity and auto-pauses, which would take the whole
// site down. It uses the same server client the exam pages use, returns only
// a status, and never data.
export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ status: "no-backend" }, { status: 503 });
  }

  const { error } = await createSupabaseServerClient().then((supabase) =>
    supabase.from("exam_sets").select("id", { count: "exact", head: true }),
  );

  if (error) {
    console.error("health: exam_sets check failed", error.code, error.message);
    return NextResponse.json(
      {
        status: "db-unreachable",
        code: error.code ?? "unknown",
        reason: (error.message ?? "no message").slice(0, 160),
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ status: "ok" });
}
