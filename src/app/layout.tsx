import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { ScrollEffects } from "@/components/motion/scroll-effects";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { DemoDataProvider } from "@/lib/progress/provider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mockacademy.org"),
  title: {
    default: "MockAcademy — Free PRINCE2 Foundation mock exams and lessons",
    template: "%s · MockAcademy",
  },
  description:
    "Prepare for PRINCE2 Foundation with free mock exams, illustrated lessons and clear progress tracking. Built for aspiring project managers in the UK.",
  keywords: [
    "PRINCE2 Foundation",
    "PRINCE2 mock exam",
    "PRINCE2 training",
    "project management course",
    "free PRINCE2",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mockacademy.org",
    siteName: "MockAcademy",
    title: "MockAcademy — Free PRINCE2 Foundation mock exams and lessons",
    description:
      "Free, realistic PRINCE2 Foundation mock exams and beautifully illustrated lessons.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${montserrat.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-background">
        <div className="scroll-progress" data-scroll-progress aria-hidden="true" />
        <SmoothScroll />
        <ScrollEffects />
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-navy px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <DemoDataProvider>{children}</DemoDataProvider>
      </body>
    </html>
  );
}
