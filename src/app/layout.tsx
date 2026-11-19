import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { GoogleTags, analyticsEnabled } from "@/components/analytics/google-tags";
import { ConsentBanner } from "@/components/analytics/consent-banner";
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
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${montserrat.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-background">
        <GoogleTags />
        {children}
        {analyticsEnabled ? <ConsentBanner /> : null}
      </body>
    </html>
  );
}
