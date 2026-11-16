import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Learn",
    links: [
      { href: "/mock-exams", label: "Mock exams" },
      { href: "/learning", label: "Learning overview" },
      { href: "/learning/prince2-foundation", label: "PRINCE2 Foundation course" },
      {
        href: "/learning/prince2-foundation/foundations/what-is-prince2",
        label: "Start the first lesson",
      },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/dashboard", label: "Student dashboard" },
      { href: "/login", label: "Log in" },
      { href: "/register", label: "Create an account" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-white/60">
              Free, beautifully illustrated PRINCE2® Foundation preparation for
              aspiring project managers in the UK. No paywalls. No noise. Just
              focused practice.
            </p>
            <Link
              href="/mock-exams"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-white"
            >
              Start a free mock exam
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40 lg:flex-row lg:items-start lg:justify-between">
          <p>© 2026 MockAcademy.org. Free PRINCE2 Foundation preparation.</p>
          <p className="max-w-2xl lg:text-right">
            PRINCE2® is a registered trademark of the PeopleCert group.
            MockAcademy is independent and not affiliated with, endorsed by or
            licensed by PeopleCert.
          </p>
        </div>
      </div>
    </footer>
  );
}
