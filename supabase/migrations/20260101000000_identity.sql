-- Phase 3 · 01 · Identity, profiles and roles
--
-- Run order matters: this migration creates the role helpers used by every
-- later policy. All objects live in `public` and are guarded by RLS.

create extension if not exists pgcrypto;

create type public.app_role as enum (
  'student',
  'administrator',
  'super_administrator'
);

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text not null default '',
  last_name text not null default '',
  email text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is
  'Public student/administrator profile. Roles live in user_roles and are never stored here.';

create table public.user_roles (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  role public.app_role not null default 'student',
  granted_by uuid references public.profiles (id) on delete set null,
  granted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.user_roles is
  'Server-managed roles. Direct writes are revoked; only the admin RPC may change a role.';

create index user_roles_role_idx on public.user_roles (role);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger user_roles_set_updated_at
  before update on public.user_roles
  for each row execute function public.set_updated_at();

-- Role guards run as the definer so RLS on user_roles cannot recurse.
create or replace function public.is_administrator()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = auth.uid()
      and role in ('administrator', 'super_administrator')
  );
$$;

create or replace function public.is_super_administrator()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = auth.uid()
      and role = 'super_administrator'
  );
$$;

revoke all on function public.is_administrator() from public;
revoke all on function public.is_super_administrator() from public;
grant execute on function public.is_administrator() to anon, authenticated;
grant execute on function public.is_super_administrator() to authenticated;

-- Every new auth user gets a profile and the student role. The role is hard
-- coded here; metadata supplied at sign-up is never trusted.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  insert into public.profiles (id, first_name, last_name, email)
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'first_name'), ''), ''),
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'last_name'), ''), ''),
    coalesce(new.email, '')
  )
  on conflict (id) do nothing;

  insert into public.user_roles (user_id, role)
  values (new.id, 'student')
  on conflict (user_id) do nothing;

  return new;
end;
$$;

revoke all on function public.handle_new_user() from public;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;

revoke all on table public.profiles from anon, authenticated;
grant select on table public.profiles to authenticated;
-- Students may only ever change their own display names. Email addresses come
-- from auth.users and roles are never editable through the table API.
grant update (first_name, last_name) on table public.profiles to authenticated;

create policy "profiles_select_own_or_admin"
  on public.profiles
  for select
  to authenticated
  using (id = auth.uid() or public.is_administrator());

create policy "profiles_update_own"
  on public.profiles
  for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

revoke all on table public.user_roles from anon, authenticated;
grant select on table public.user_roles to authenticated;

create policy "user_roles_select_own_or_admin"
  on public.user_roles
  for select
  to authenticated
  using (user_id = auth.uid() or public.is_administrator());
