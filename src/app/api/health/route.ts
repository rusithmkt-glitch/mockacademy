import { NextResponse } from "next/server";
import { isSupabaseAdminConfigured } from "@/lib/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

// Vercel hits this on a daily cron so the free-tier Supabase project never
// sees seven days of inactivity and auto-pauses, which would take the whole
// site down. It returns only a status, never data.
export async function GET() {
  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ status: "no-backend" }, { status: 503 });
  }

  const { error } = await createSupabaseAdminClient()
    .from("exam_sets")
    .select("id", { count: "exact", head: true });

  if (error) {
    return NextResponse.json({ status: "db-unreachable" }, { status: 500 });
  }

  return NextResponse.json({ status: "ok" });
}
