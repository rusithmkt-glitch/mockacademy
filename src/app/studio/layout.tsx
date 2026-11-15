import type { ReactNode } from "react";

export default function StudioLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-dvh bg-[#101112]">{children}</div>;
}
