-- Phase 3 · 02 · Exam sets, questions, attempts and results
--
-- Answer keys (`exam_options.is_correct`, `exam_questions.explanation`) are only
-- readable by administrators. Students read sanitised payloads from the RPCs in
-- migration 04; they never see these tables directly.

create type public.exam_attempt_status as enum (
  'in_progress',
  'submitted',
  'expired'
);

create type public.exam_mode as enum (
  'immediate_feedback',
  'formal'
);

create table public.exam_sets (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null default '',
  difficulty text not null default 'full_simulation'
    check (difficulty in ('full_simulation', 'focused_practice', 'rapid_revision')),
  question_count integer not null check (question_count between 1 and 200),
  duration_minutes integer not null check (duration_minutes between 1 and 300),
  pass_percent integer not null default 60 check (pass_percent between 0 and 100),
  selection_mode text not null default 'fixed' check (selection_mode in ('fixed', 'random')),
  max_attempts integer not null default 3 check (max_attempts between 1 and 20),
  feedback_attempts integer not null default 2 check (feedback_attempts between 0 and 20),
  is_published boolean not null default false,
  is_free boolean not null default true,
  is_featured boolean not null default false,
  topics text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint exam_sets_feedback_within_attempts check (feedback_attempts <= max_attempts)
);

create index exam_sets_published_idx on public.exam_sets (is_published, slug);

create table public.exam_questions (
  id uuid primary key default gen_random_uuid(),
  exam_set_id uuid not null references public.exam_sets (id) on delete cascade,
  prompt text not null check (length(trim(prompt)) > 0),
  explanation text not null default '',
  topic text not null default 'General',
  "order" integer not null check ("order" >= 1),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (exam_set_id, "order")
);

create index exam_questions_exam_idx on public.exam_questions (exam_set_id, "order");
create index exam_questions_active_idx on public.exam_questions (exam_set_id)
  where is_active;

create table public.exam_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.exam_questions (id) on delete cascade,
  label text not null check (length(trim(label)) > 0),
  "order" integer not null check ("order" >= 1),
  is_correct boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (question_id, "order")
);

create index exam_options_question_idx on public.exam_options (question_id, "order");

create trigger exam_sets_set_updated_at
  before update on public.exam_sets
  for each row execute function public.set_updated_at();
create trigger exam_questions_set_updated_at
  before update on public.exam_questions
  for each row execute function public.set_updated_at();
create trigger exam_options_set_updated_at
  before update on public.exam_options
  for each row execute function public.set_updated_at();

create table public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  exam_set_id uuid not null references public.exam_sets (id) on delete restrict,
  attempt_number integer not null check (attempt_number >= 1),
  status public.exam_attempt_status not null default 'in_progress',
  mode public.exam_mode not null,
  started_at timestamptz not null default now(),
  expires_at timestamptz not null,
  submitted_at timestamptz,
  created_at timestamptz not null default now(),
  unique (user_id, exam_set_id, attempt_number),
  constraint exam_attempts_submitted_before_expiry
    check (submitted_at is null or submitted_at >= started_at)
);

create index exam_attempts_user_idx on public.exam_attempts (user_id, exam_set_id, attempt_number desc);

-- At most one live attempt per student/exam, regardless of race conditions in
-- the start RPC.
create unique index exam_attempts_one_active_idx
  on public.exam_attempts (user_id, exam_set_id)
  where status = 'in_progress';

-- Immutable per-attempt snapshot. Students never query this table; the RPCs
-- project only prompt/topic/options. Correct answers are stored here so later
-- edits to the question bank cannot change a submitted score.
create table public.exam_attempt_questions (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.exam_attempts (id) on delete cascade,
  question_id uuid not null references public.exam_questions (id) on delete restrict,
  position integer not null check (position >= 1),
  prompt text not null,
  topic text not null,
  options jsonb not null,
  correct_option_ids text[] not null,
  explanation text not null default '',
  unique (attempt_id, position),
  unique (attempt_id, question_id)
);

create index exam_attempt_questions_attempt_idx on public.exam_attempt_questions (attempt_id, position);

create table public.exam_responses (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.exam_attempts (id) on delete cascade,
  question_id uuid not null references public.exam_questions (id) on delete restrict,
  selected_option_ids text[] not null default '{}',
  flagged boolean not null default false,
  answered_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (attempt_id, question_id)
);

create index exam_responses_attempt_idx on public.exam_responses (attempt_id);

create table public.exam_results (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null unique references public.exam_attempts (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  exam_set_id uuid not null references public.exam_sets (id) on delete restrict,
  score integer not null check (score >= 0),
  total integer not null check (total >= 1),
  passed boolean not null,
  pass_percent integer not null check (pass_percent between 0 and 100),
  topic_breakdown jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint exam_results_score_within_total check (score <= total)
);

create index exam_results_user_idx on public.exam_results (user_id, created_at desc);
create index exam_results_exam_idx on public.exam_results (exam_set_id, created_at desc);

alter table public.exam_sets enable row level security;
alter table public.exam_questions enable row level security;
alter table public.exam_options enable row level security;
alter table public.exam_attempts enable row level security;
alter table public.exam_attempt_questions enable row level security;
alter table public.exam_responses enable row level security;
alter table public.exam_results enable row level security;

-- exam_sets --------------------------------------------------------------
revoke all on table public.exam_sets from anon, authenticated;
grant select on table public.exam_sets to anon, authenticated;
grant insert, update, delete on table public.exam_sets to authenticated;

create policy "exam_sets_read_published_or_admin"
  on public.exam_sets
  for select
  to anon, authenticated
  using (is_published or public.is_administrator());

create policy "exam_sets_admin_insert"
  on public.exam_sets
  for insert
  to authenticated
  with check (public.is_administrator());

create policy "exam_sets_admin_update"
  on public.exam_sets
  for update
  to authenticated
  using (public.is_administrator())
  with check (public.is_administrator());

create policy "exam_sets_admin_delete"
  on public.exam_sets
  for delete
  to authenticated
  using (public.is_administrator());

-- exam_questions / exam_options -----------------------------------------
revoke all on table public.exam_questions from anon, authenticated;
grant select, insert, update, delete on table public.exam_questions to authenticated;

create policy "exam_questions_admin_select"
  on public.exam_questions
  for select
  to authenticated
  using (public.is_administrator());

create policy "exam_questions_admin_insert"
  on public.exam_questions
  for insert
  to authenticated
  with check (public.is_administrator());

create policy "exam_questions_admin_update"
  on public.exam_questions
  for update
  to authenticated
  using (public.is_administrator())
  with check (public.is_administrator());

create policy "exam_questions_admin_delete"
  on public.exam_questions
  for delete
  to authenticated
  using (public.is_administrator());

revoke all on table public.exam_options from anon, authenticated;
grant select, insert, update, delete on table public.exam_options to authenticated;

create policy "exam_options_admin_select"
  on public.exam_options
  for select
  to authenticated
  using (public.is_administrator());

create policy "exam_options_admin_insert"
  on public.exam_options
  for insert
  to authenticated
  with check (public.is_administrator());

create policy "exam_options_admin_update"
  on public.exam_options
  for update
  to authenticated
  using (public.is_administrator())
  with check (public.is_administrator());

create policy "exam_options_admin_delete"
  on public.exam_options
  for delete
  to authenticated
  using (public.is_administrator());

-- exam_attempts ----------------------------------------------------------
revoke all on table public.exam_attempts from anon, authenticated;
grant select on table public.exam_attempts to authenticated;

create policy "exam_attempts_select_own_or_admin"
  on public.exam_attempts
  for select
  to authenticated
  using (user_id = auth.uid() or public.is_administrator());

-- exam_attempt_questions: deny all client access.
revoke all on table public.exam_attempt_questions from anon, authenticated;

-- exam_responses: written only by the save RPC; never read directly.
revoke all on table public.exam_responses from anon, authenticated;

-- exam_results -----------------------------------------------------------
revoke all on table public.exam_results from anon, authenticated;
grant select on table public.exam_results to authenticated;

create policy "exam_results_select_own_or_admin"
  on public.exam_results
  for select
  to authenticated
  using (user_id = auth.uid() or public.is_administrator());
