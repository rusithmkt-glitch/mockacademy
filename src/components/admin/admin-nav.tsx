"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  LayoutDashboard,
  ListChecks,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/questions", label: "Questions", icon: ListChecks },
  { href: "/admin/exams", label: "Exam sets", icon: BookOpen },
  { href: "/admin/course", label: "Course content", icon: ShieldCheck },
  { href: "/admin/administrators", label: "Administrators", icon: Users },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Admin sections"
      className="scroll-slim -mx-1 flex gap-1 overflow-x-auto border-b border-border pb-px"
    >
      {links.map((link) => {
        const active =
          link.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(link.href);
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-t-lg border-b-2 px-3 py-2.5 text-[0.78rem] font-medium transition-colors",
              active
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
