-- Phase 3 · 03 · Learning progress and knowledge-check attempts
--
-- Writes are server-managed. Students only have SELECT access to their own
-- rows; completion and check attempts are recorded by the RPCs in migration 04.

create table public.session_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_slug text not null check (length(trim(course_slug)) > 0),
  session_key text not null check (length(trim(session_key)) > 0),
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, course_slug, session_key)
);

create index session_progress_user_idx on public.session_progress (user_id, course_slug);

create trigger session_progress_set_updated_at
  before update on public.session_progress
  for each row execute function public.set_updated_at();

create table public.knowledge_check_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_slug text not null check (length(trim(course_slug)) > 0),
  session_key text not null check (length(trim(session_key)) > 0),
  attempt_number integer not null check (attempt_number >= 1),
  answers jsonb not null default '[]'::jsonb,
  score integer not null check (score >= 0),
  total integer not null check (total >= 1),
  passed boolean not null,
  created_at timestamptz not null default now(),
  unique (user_id, course_slug, session_key, attempt_number),
  constraint knowledge_check_score_within_total check (score <= total)
);

create index knowledge_check_attempts_user_idx
  on public.knowledge_check_attempts (user_id, course_slug, session_key, attempt_number desc);

alter table public.session_progress enable row level security;
alter table public.knowledge_check_attempts enable row level security;

revoke all on table public.session_progress from anon, authenticated;
grant select on table public.session_progress to authenticated;

create policy "session_progress_select_own"
  on public.session_progress
  for select
  to authenticated
  using (user_id = auth.uid());

revoke all on table public.knowledge_check_attempts from anon, authenticated;
grant select on table public.knowledge_check_attempts to authenticated;

create policy "knowledge_check_attempts_select_own"
  on public.knowledge_check_attempts
  for select
  to authenticated
  using (user_id = auth.uid());
