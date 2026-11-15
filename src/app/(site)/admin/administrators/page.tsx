import type { Metadata } from "next";
import { RoleManager } from "@/components/admin/role-manager";
import { getViewer } from "@/lib/auth/session";
import { listAdminUsers } from "@/lib/admin/queries";

export const metadata: Metadata = { title: "Administrators" };

export const instant = false;

export default async function AdminAdministratorsPage() {
  const viewer = await getViewer();
  const users = await listAdminUsers();
  const staff = users.filter((user) => user.role !== "student").length;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-heading text-xl text-foreground">Administrators</h2>
        <p className="mt-1 max-w-2xl text-[0.78rem] leading-relaxed text-muted-foreground">
          {staff} staff account{staff === 1 ? "" : "s"} across{" "}
          {users.length} registered user{users.length === 1 ? "" : "s"}. Roles
          are stored in the database and checked on every admin action.
        </p>
      </div>
      <RoleManager
        users={users}
        viewerId={viewer?.id ?? ""}
        canManage={Boolean(viewer?.isSuperAdmin)}
      />
    </div>
  );
}
