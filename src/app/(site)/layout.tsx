import { connection } from "next/server";
import { SiteHeader } from "@/components/site-header";
import { ScrollEffects } from "@/components/motion/scroll-effects";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { getViewer } from "@/lib/auth/session";

// The header reflects the signed-in student on every page, so the public shell
// is request-rendered rather than instant-navigation validated.
export const instant = false;

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Backend configuration and the viewer are read per request; nothing in the
  // shell may be baked into a static build.
  await connection();
  const viewer = await getViewer();

  return (
    <>
      <div className="scroll-progress" data-scroll-progress aria-hidden="true" />
      <SmoothScroll />
      <ScrollEffects />
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-navy px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader viewer={viewer} />
      {children}
    </>
  );
}
