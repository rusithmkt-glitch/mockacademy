import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { AdminNav } from "@/components/admin/admin-nav";
import { PageMotion } from "@/components/motion/page-motion";
import { SiteFooter } from "@/components/site-footer";
import { BackendSetupNotice } from "@/components/setup/backend-setup-notice";
import { Badge } from "@/components/ui/badge";
import { getViewer } from "@/lib/auth/session";
import { isSupabaseConfigured } from "@/lib/env";

export const metadata: Metadata = {
  title: "Administration",
  description: "MockAcademy administrator workspace.",
  robots: { index: false, follow: false },
};

// Admin screens depend on the signed-in role on every request.
export const instant = false;

const ROLE_LABELS = {
  administrator: "Administrator",
  super_administrator: "Super administrator",
} as const;

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();

  if (!isSupabaseConfigured()) {
    return (
      <>
        <main id="main" className="flex-1">
          <div className="shell py-14 lg:py-20">
            <BackendSetupNotice
              title="Administration is not connected yet"
              description="The admin workspace reads live data from Supabase. Add the backend environment variables, run the migrations and promote your account before using these tools."
              envVars={[
                "NEXT_PUBLIC_SUPABASE_URL",
                "NEXT_PUBLIC_SUPABASE_ANON_KEY",
                "SUPABASE_SERVICE_ROLE_KEY",
              ]}
              steps={[
                "Create a Supabase project and copy the keys into .env.local.",
                "Apply the SQL migrations in supabase/migrations.",
                "Seed the exam bank with npm run seed:supabase.",
                "Promote your account with the admin role command in docs/phase-3-setup.md.",
              ]}
            />
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  const viewer = await getViewer();
  if (!viewer) redirect("/login?next=/admin");
  if (!viewer.isAdmin) redirect("/dashboard");

  return (
    <>
      <main id="main" className="flex-1">
        <PageMotion />
        <div className="shell py-10 lg:py-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow">Administration</p>
              <h1 className="display mt-2 text-3xl text-foreground sm:text-4xl">
                Admin workspace
              </h1>
              <p className="mt-2 max-w-2xl text-[0.85rem] leading-relaxed text-muted-foreground">
                Manage the question bank, papers, course content and staff
                access. Every action is re-checked by the database.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <Badge tone={viewer.isSuperAdmin ? "navy" : "lavender"}>
                {ROLE_LABELS[viewer.role as keyof typeof ROLE_LABELS]}
              </Badge>
              <p className="text-[0.7rem] text-muted-foreground">
                Signed in as {viewer.email}
              </p>
            </div>
          </div>

          <div className="mt-7">
            <AdminNav />
          </div>

          <div className="mt-7">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
