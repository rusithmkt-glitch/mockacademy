"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, LogOut, Menu, ShieldCheck, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { signOut } from "@/lib/auth/actions";
import type { Viewer } from "@/lib/auth/session";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/mock-exams", label: "Mock exams" },
  { href: "/learning", label: "Learning" },
  { href: "/dashboard", label: "Dashboard" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function initials(viewer: Viewer) {
  return (
    [viewer.firstName, viewer.lastName]
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase())
      .join("") ||
    viewer.email.slice(0, 1).toUpperCase() ||
    "S"
  );
}

export function SiteHeader({ viewer }: { viewer?: Viewer | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            {viewer?.isAdmin ? (
              <Link
                href="/admin"
                aria-current={isActive(pathname, "/admin") ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(pathname, "/admin")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                Admin
              </Link>
            ) : null}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {viewer ? (
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1.5 text-[0.8rem] font-medium text-foreground transition-colors hover:bg-muted"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-navy text-[0.6rem] font-semibold text-white">
                  {initials(viewer)}
                </span>
                <span className="max-w-[9rem] truncate">
                  {viewer.firstName || "Dashboard"}
                </span>
              </Link>
              <form action={signOut}>
                <button
                  type="submit"
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Log out"
                  title="Log out"
                >
                  <LogOut className="size-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/login"
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Log in
              </Link>
              <Link
                href="/mock-exams"
                className={buttonVariants({
                  size: "cta",
                  className: "h-9 px-4 text-[0.8rem]",
                })}
              >
                Start free mock
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background/98 px-5 pb-6 pt-3 shadow-soft lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-4 py-3 text-[0.95rem] font-medium transition-colors",
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            {viewer?.isAdmin ? (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-[0.95rem] font-medium text-foreground transition-colors hover:bg-muted"
              >
                <ShieldCheck className="size-4" aria-hidden="true" />
                Admin
              </Link>
            ) : null}
            {viewer ? (
              <form action={signOut} className="mt-1">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <LogOut className="size-4" aria-hidden="true" />
                  Log out
                </button>
              </form>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Log in
              </Link>
            )}
          </nav>
          <Link
            href="/mock-exams"
            onClick={() => setOpen(false)}
            className={buttonVariants({
              size: "cta",
              className: "mt-3 w-full",
            })}
          >
            {viewer ? "Start a mock exam" : "Start free mock exam"}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
