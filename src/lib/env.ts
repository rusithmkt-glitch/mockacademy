const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ?? "";

const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ?? "";
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() ?? "";
const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2026-01-01";
const sanityReadToken = process.env.SANITY_API_READ_TOKEN?.trim() ?? "";
const sanityWriteToken = process.env.SANITY_API_WRITE_TOKEN?.trim() ?? "";

export const supabaseEnv = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
  serviceRoleKey: supabaseServiceRoleKey,
};

export const sanityEnv = {
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  readToken: sanityReadToken,
  writeToken: sanityWriteToken,
};

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function isSupabaseAdminConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseServiceRoleKey);
}

export function isSanityConfigured(): boolean {
  return Boolean(sanityProjectId && sanityDataset);
}

export function isBackendConfigured(): boolean {
  return isSupabaseConfigured() && isSanityConfigured();
}
