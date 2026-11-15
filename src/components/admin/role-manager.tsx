"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, ShieldAlert } from "lucide-react";
import { setUserRoleAction } from "@/lib/admin/actions";
import type { AdminRole, AdminUser } from "@/lib/admin/types";

const ROLE_OPTIONS: { value: AdminRole; label: string }[] = [
  { value: "student", label: "Student" },
  { value: "administrator", label: "Administrator" },
  { value: "super_administrator", label: "Super administrator" },
];

const ROLE_STYLES: Record<AdminRole, string> = {
  student: "bg-muted text-muted-foreground",
  administrator: "bg-lavender-soft text-plum",
  super_administrator: "bg-navy text-white",
};

function displayName(user: AdminUser): string {
  const name = [user.firstName, user.lastName].filter(Boolean).join(" ");
  return name || user.email || "Unnamed student";
}

export function RoleManager({
  users,
  viewerId,
  canManage,
}: {
  users: AdminUser[];
  viewerId: string;
  canManage: boolean;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [pending, setPending] = useState<Record<string, AdminRole>>({});
  const [savingId, setSavingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return users;
    return users.filter((user) =>
      [user.email, user.firstName, user.lastName, user.role]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [users, query]);

  async function saveRole(user: AdminUser) {
    const nextRole = pending[user.id];
    if (!nextRole || nextRole === user.role || savingId) return;
    setSavingId(user.id);
    setError(null);
    setNotice(null);
    try {
      const result = await setUserRoleAction(user.id, nextRole);
      if (!result.ok) {
        setError(result.error ?? "That role could not be updated.");
        return;
      }
      setPending((current) => {
        const next = { ...current };
        delete next[user.id];
        return next;
      });
      setNotice(`${displayName(user)} is now ${nextRole.replace(/_/g, " ")}.`);
      router.refresh();
    } catch {
      setError("We could not reach the admin service. Try again.");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="space-y-4">
      {!canManage ? (
        <p className="flex items-start gap-2 rounded-xl border border-border bg-background px-4 py-3 text-[0.78rem] leading-relaxed text-muted-foreground">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          You can view accounts, but only a super administrator can grant or
          revoke administrator access.
        </p>
      ) : null}

      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-[0.8rem] text-destructive"
        >
          {error}
        </p>
      ) : null}
      {notice ? (
        <p
          role="status"
          className="rounded-xl border border-primary/20 bg-accent/60 px-4 py-3 text-[0.8rem] text-accent-foreground"
        >
          {notice}
        </p>
      ) : null}

      <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
        <Search className="size-3.5 text-muted-foreground" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name, email or role"
          aria-label="Search accounts"
          className="w-full max-w-sm bg-transparent text-[0.78rem] text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {filtered.length === 0 ? (
          <p className="px-5 py-10 text-center text-[0.8rem] text-muted-foreground">
            No accounts match that search.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((user) => {
              const isSelf = user.id === viewerId;
              const selectedRole = pending[user.id] ?? user.role;
              const changed = selectedRole !== user.role;
              return (
                <li
                  key={user.id}
                  className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-[0.82rem] font-medium text-foreground">
                        {displayName(user)}
                      </p>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.6rem] font-semibold ${ROLE_STYLES[user.role]}`}
                      >
                        {user.role.replace(/_/g, " ")}
                      </span>
                      {isSelf ? (
                        <span className="text-[0.6rem] font-medium text-muted-foreground">
                          (you)
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 truncate text-[0.68rem] text-muted-foreground">
                      {user.email}
                      {user.createdAt
                        ? ` · joined ${new Date(user.createdAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}`
                        : ""}
                    </p>
                  </div>

                  {canManage && !isSelf ? (
                    <div className="flex items-center gap-2">
                      <select
                        value={selectedRole}
                        onChange={(event) =>
                          setPending((current) => ({
                            ...current,
                            [user.id]: event.target.value as AdminRole,
                          }))
                        }
                        aria-label={`Role for ${displayName(user)}`}
                        className="rounded-lg border border-input bg-background px-2 py-1.5 text-[0.72rem] text-foreground outline-none focus-visible:border-ring"
                      >
                        {ROLE_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => void saveRole(user)}
                        disabled={!changed || savingId === user.id}
                        className="rounded-full bg-primary px-3 py-1.5 text-[0.68rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
                      >
                        {savingId === user.id ? "Saving…" : "Apply"}
                      </button>
                    </div>
                  ) : (
                    <span className="text-[0.66rem] text-muted-foreground">
                      {isSelf ? "Your account" : "View only"}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
