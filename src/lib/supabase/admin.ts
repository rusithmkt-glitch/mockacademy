import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import { isSupabaseAdminConfigured, supabaseEnv } from "@/lib/env";

/**
 * Service-role client for trusted server-only maintenance (scripts, admin
 * bootstrap). Never import this module from client components and never pass
 * its client instance to the browser.
 */
export function createSupabaseAdminClient(): SupabaseClient {
  if (!isSupabaseAdminConfigured()) {
    throw new Error(
      "Supabase service role is not configured. Add SUPABASE_SERVICE_ROLE_KEY to your server environment.",
    );
  }
  return createClient(supabaseEnv.url, supabaseEnv.serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
