-- Phase 3 · 05 · Administrator RPCs
--
-- Role management is intentionally server-side only. Even though admins can
-- read user_roles, no direct INSERT/UPDATE/DELETE privileges are granted.

create or replace function public.admin_set_user_role(
  p_target_user_id uuid,
  p_role public.app_role
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_caller uuid := auth.uid();
  v_caller_role public.app_role;
  v_target_role public.app_role;
begin
  if v_caller is null then
    raise exception 'not_authenticated' using errcode = 'P0001';
  end if;

  select role into v_caller_role
  from public.user_roles
  where user_id = v_caller;

  if v_caller_role is null
     or v_caller_role not in ('administrator', 'super_administrator') then
    raise exception 'not_authorized' using errcode = 'P0001';
  end if;

  if p_target_user_id = v_caller then
    raise exception 'cannot_change_own_role' using errcode = 'P0001';
  end if;

  if not exists (select 1 from public.profiles where id = p_target_user_id) then
    raise exception 'user_not_found' using errcode = 'P0001';
  end if;

  select role into v_target_role
  from public.user_roles
  where user_id = p_target_user_id;

  if v_target_role is null then
    raise exception 'user_role_missing' using errcode = 'P0001';
  end if;

  if v_caller_role <> 'super_administrator' then
    if p_role = 'super_administrator' then
      raise exception 'super_admin_required' using errcode = 'P0001';
    end if;
    if v_target_role in ('administrator', 'super_administrator') then
      raise exception 'super_admin_required' using errcode = 'P0001';
    end if;
  end if;

  if v_target_role = p_role then
    return jsonb_build_object('userId', p_target_user_id, 'role', p_role, 'changed', false);
  end if;

  update public.user_roles
  set role = p_role, granted_by = v_caller, granted_at = now()
  where user_id = p_target_user_id;

  return jsonb_build_object('userId', p_target_user_id, 'role', p_role, 'changed', true);
end;
$$;

revoke all on function public.admin_set_user_role(uuid, public.app_role) from public, anon;
grant execute on function public.admin_set_user_role(uuid, public.app_role) to authenticated;

create or replace function public.admin_save_question(
  p_exam_set_id uuid,
  p_question_id uuid,
  p_prompt text,
  p_topic text,
  p_explanation text,
  p_order integer,
  p_is_active boolean,
  p_options jsonb
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_question_id uuid;
  v_option jsonb;
  v_option_id uuid;
  v_label text;
  v_correct_count integer := 0;
  v_seen_ids uuid[] := '{}';
  v_index integer := 0;
begin
  if not public.is_administrator() then
    raise exception 'not_authorized' using errcode = 'P0001';
  end if;
  if not exists (select 1 from public.exam_sets where id = p_exam_set_id) then
    raise exception 'exam_not_found' using errcode = 'P0001';
  end if;
  if p_prompt is null or length(trim(p_prompt)) = 0 then
    raise exception 'prompt_required' using errcode = 'P0001';
  end if;
  if p_order is null or p_order < 1 then
    raise exception 'invalid_order' using errcode = 'P0001';
  end if;
  if p_options is null or jsonb_typeof(p_options) <> 'array'
     or jsonb_array_length(p_options) < 2
     or jsonb_array_length(p_options) > 10 then
    raise exception 'invalid_options' using errcode = 'P0001';
  end if;

  if p_question_id is null then
    insert into public.exam_questions (
      exam_set_id, prompt, explanation, topic, "order", is_active
    )
    values (
      p_exam_set_id, trim(p_prompt), coalesce(p_explanation, ''),
      coalesce(nullif(trim(p_topic), ''), 'General'), p_order, coalesce(p_is_active, true)
    )
    returning id into v_question_id;
  else
    update public.exam_questions
    set prompt = trim(p_prompt),
        explanation = coalesce(p_explanation, ''),
        topic = coalesce(nullif(trim(p_topic), ''), 'General'),
        "order" = p_order,
        is_active = coalesce(p_is_active, true)
    where id = p_question_id and exam_set_id = p_exam_set_id
    returning id into v_question_id;

    if v_question_id is null then
      raise exception 'question_not_found' using errcode = 'P0001';
    end if;

    delete from public.exam_options where question_id = v_question_id;
  end if;

  for v_option in select * from jsonb_array_elements(p_options)
  loop
    v_index := v_index + 1;
    v_label := trim(coalesce(v_option ->> 'label', ''));
    if length(v_label) = 0 then
      raise exception 'option_label_required' using errcode = 'P0001';
    end if;

    if nullif(v_option ->> 'id', '') is not null then
      begin
        v_option_id := (v_option ->> 'id')::uuid;
      exception when others then
        raise exception 'invalid_option_id' using errcode = 'P0001';
      end;
    else
      v_option_id := gen_random_uuid();
    end if;

    if v_option_id = any (v_seen_ids) then
      raise exception 'duplicate_option_id' using errcode = 'P0001';
    end if;
    v_seen_ids := array_append(v_seen_ids, v_option_id);

    if coalesce((v_option ->> 'isCorrect')::boolean, false) then
      v_correct_count := v_correct_count + 1;
    end if;

    insert into public.exam_options (id, question_id, label, "order", is_correct)
    values (
      v_option_id, v_question_id, v_label, v_index,
      coalesce((v_option ->> 'isCorrect')::boolean, false)
    );
  end loop;

  if v_correct_count <> 1 then
    raise exception 'exactly_one_correct_option' using errcode = 'P0001';
  end if;

  return v_question_id;
end;
$$;

revoke all on function public.admin_save_question(uuid, uuid, text, text, text, integer, boolean, jsonb)
  from public, anon;
grant execute on function public.admin_save_question(uuid, uuid, text, text, text, integer, boolean, jsonb)
  to authenticated;

create or replace function public.admin_delete_question(p_question_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if not public.is_administrator() then
    raise exception 'not_authorized' using errcode = 'P0001';
  end if;

  begin
    delete from public.exam_questions where id = p_question_id;
  exception when foreign_key_violation then
    raise exception 'question_in_use' using errcode = 'P0001';
  end;

  if not found then
    raise exception 'question_not_found' using errcode = 'P0001';
  end if;
end;
$$;

revoke all on function public.admin_delete_question(uuid) from public, anon;
grant execute on function public.admin_delete_question(uuid) to authenticated;

-- Validate questions into an aggregate helper for the admin dashboard.
create or replace function public.admin_question_bank(p_exam_set_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case when public.is_administrator() then coalesce((
    select jsonb_agg(jsonb_build_object(
      'id', q.id,
      'prompt', q.prompt,
      'topic', q.topic,
      'explanation', q.explanation,
      'order', q."order",
      'isActive', q.is_active,
      'options', coalesce((
        select jsonb_agg(jsonb_build_object(
          'id', o.id, 'label', o.label, 'isCorrect', o.is_correct
        ) order by o."order")
        from public.exam_options o where o.question_id = q.id
      ), '[]'::jsonb)
    ) order by q."order")
    from public.exam_questions q
    where q.exam_set_id = p_exam_set_id
  ), '[]'::jsonb) else '[]'::jsonb end;
$$;

revoke all on function public.admin_question_bank(uuid) from public, anon;
grant execute on function public.admin_question_bank(uuid) to authenticated;

-- Dashboard aggregates ---------------------------------------------------------
create or replace function public.admin_overview()
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case when public.is_administrator() then jsonb_build_object(
    'students', (select count(*) from public.user_roles where role = 'student'),
    'staff', (select count(*) from public.user_roles where role <> 'student'),
    'publishedExams', (select count(*) from public.exam_sets where is_published),
    'totalExams', (select count(*) from public.exam_sets),
    'activeQuestions', (select count(*) from public.exam_questions where is_active),
    'attempts', (select count(*) from public.exam_attempts),
    'submitted', (select count(*) from public.exam_attempts where status = 'submitted'),
    'passRate', coalesce((
      select round(avg(case when passed then 100.0 else 0.0 end))::int
      from public.exam_results
    ), 0),
    'sessionCompletions', (select count(*) from public.session_progress),
    'knowledgeChecks', (select count(*) from public.knowledge_check_attempts)
  ) else '{}'::jsonb end;
$$;

revoke all on function public.admin_overview() from public, anon;
grant execute on function public.admin_overview() to authenticated;

-- Administrator management list. Joins the role so the UI never guesses.
create or replace function public.admin_list_users()
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case when public.is_administrator() then coalesce((
    select jsonb_agg(jsonb_build_object(
      'id', u.id,
      'email', u.email,
      'firstName', u.first_name,
      'lastName', u.last_name,
      'role', coalesce(u.role, 'student'),
      'createdAt', u.created_at
    ) order by u.created_at desc)
    from (
      select p.id, p.email, p.first_name, p.last_name, p.created_at, r.role
      from public.profiles p
      left join public.user_roles r on r.user_id = p.id
      order by p.created_at desc
      limit 500
    ) u
  ), '[]'::jsonb) else '[]'::jsonb end;
$$;

revoke all on function public.admin_list_users() from public, anon;
grant execute on function public.admin_list_users() to authenticated;
