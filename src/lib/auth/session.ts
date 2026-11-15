import { cache } from "react";
import { getCurrentUser } from "@/lib/supabase/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";

export type UserRole = "student" | "administrator" | "super_administrator";

export interface Viewer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: UserRole;
  isAdmin: boolean;
  isSuperAdmin: boolean;
}

export const getViewer = cache(async (): Promise<Viewer | null> => {
  if (!isSupabaseConfigured()) return null;

  const user = await getCurrentUser();
  if (!user) return null;

  try {
    const supabase = await createSupabaseServerClient();
    const [{ data: profile }, { data: roleRow }] = await Promise.all([
      supabase
        .from("profiles")
        .select("first_name, last_name, email")
        .eq("id", user.id)
        .maybeSingle(),
      supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .maybeSingle(),
    ]);

    const firstName =
      profile?.first_name?.trim() ||
      (user.user_metadata?.first_name as string | undefined)?.trim() ||
      "";
    const lastName =
      profile?.last_name?.trim() ||
      (user.user_metadata?.last_name as string | undefined)?.trim() ||
      "";
    const role = (roleRow?.role as UserRole | undefined) ?? "student";

    return {
      id: user.id,
      email: profile?.email ?? user.email ?? "",
      firstName,
      lastName,
      fullName: [firstName, lastName].filter(Boolean).join(" ") || "Student",
      role,
      isAdmin: role === "administrator" || role === "super_administrator",
      isSuperAdmin: role === "super_administrator",
    };
  } catch {
    return null;
  }
});
