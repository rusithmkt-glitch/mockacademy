import Link from "next/link";
import { cn } from "@/lib/utils";

const brand = {
  gold: "#F2C230",
  plum: "#A65EA4",
  magenta: "#EE3F80",
  navy: "#1F2B59",
};

export function BrandMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const check = tone === "light" ? "#FBF8F1" : brand.navy;

  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-9", className)}
      aria-hidden="true"
    >
      <rect x="1.5" y="1.5" width="15" height="15" rx="1.8" fill={brand.gold} />
      <rect x="1.5" y="20.5" width="15" height="15" rx="1.8" fill={brand.plum} />
      <rect x="20.5" y="20.5" width="15" height="15" rx="1.8" fill={brand.magenta} />
      <path
        d="M21 11.2l4.8 5.3L35.4 5.4"
        fill="none"
        stroke={check}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-offset-4",
        className,
      )}
      aria-label="MockAcademy home"
    >
      <BrandMark
        tone={tone}
        className="transition-transform duration-300 ease-out group-hover:-rotate-3"
      />
      <span
        className={cn(
          "flex items-baseline text-[1.05rem] font-semibold tracking-[-0.02em]",
          tone === "light" ? "text-white" : "text-foreground",
        )}
      >
        MockAcademy
        <span
          className={cn(
            "ml-0.5",
            tone === "light" ? "text-gold" : "text-primary",
          )}
        >
          .org
        </span>
      </span>
    </Link>
  );
}
