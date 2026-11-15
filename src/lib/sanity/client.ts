import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";
import { isSanityConfigured, sanityEnv } from "@/lib/env";

let sanityClient: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) return null;

  if (!sanityClient) {
    sanityClient = createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion: sanityEnv.apiVersion,
      useCdn: false,
      perspective: "published",
      token: sanityEnv.readToken || undefined,
    });
  }

  return sanityClient;
}

export async function fetchPublished<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  const client = getSanityClient();
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params);
  } catch {
    return null;
  }
}
