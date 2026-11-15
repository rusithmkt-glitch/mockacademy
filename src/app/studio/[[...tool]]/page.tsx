import { connection } from "next/server";
import { isSanityConfigured } from "@/lib/env";
import { BackendSetupNotice } from "@/components/setup/backend-setup-notice";
import StudioClient from "./studio-client";

export const metadata = {
  title: "Content studio",
  robots: { index: false, follow: false },
  referrer: "same-origin" as const,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover" as const,
};

export const instant = false;

export default async function StudioPage() {
  // The Studio authenticates in the browser, so this route is request-rendered.
  await connection();
  if (!isSanityConfigured()) {
    return (
      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <BackendSetupNotice
          title="Connect Sanity to open the studio"
          description="The content studio needs a Sanity project before it can manage courses, sessions and lessons."
          envVars={[
            "NEXT_PUBLIC_SANITY_PROJECT_ID",
            "NEXT_PUBLIC_SANITY_DATASET",
          ]}
          steps={[
            "Create a Sanity project and dataset.",
            "Copy .env.example to .env.local and add the project ID and dataset.",
            "Restart the development server and reload this page.",
          ]}
        />
      </main>
    );
  }

  return <StudioClient />;
}
