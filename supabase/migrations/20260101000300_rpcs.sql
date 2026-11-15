-- Phase 3 · 04 · Secure exam + knowledge-check RPCs
--
-- All timing, selection, scoring and pass/fail decisions happen here using
-- server timestamps. Client-supplied scores are never accepted.

create or replace function public.ensure_current_profile()
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user uuid := auth.uid();
  v_profile public.profiles%rowtype;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = 'P0001';
  end if;

  insert into public.profiles (id, email)
  select v_user, coalesce(u.email, '')
  from auth.users u
  where u.id = v_user
  on conflict (id) do nothing;

  insert into public.user_roles (user_id, role)
  values (v_user, 'student')
  on conflict (user_id) do nothing;

  select * into v_profile from public.profiles where id = v_user;
  if not found then
    raise exception 'profile_missing' using errcode = 'P0001';
  end if;

  return jsonb_build_object(
    'id', v_profile.id,
    'firstName', v_profile.first_name,
    'lastName', v_profile.last_name,
    'email', v_profile.email
  );
end;
$$;

revoke all on function public.ensure_current_profile() from public, anon;
grant execute on function public.ensure_current_profile() to authenticated;

-- Internal: sanitised active-attempt payload. No correctness data is included.
create or replace function public.attempt_payload(p_attempt_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select jsonb_build_object(
    'status', a.status,
    'resumed', true,
    'attempt', jsonb_build_object(
      'id', a.id,
      'examSetId', e.id,
      'examSlug', e.slug,
      'examTitle', e.title,
      'difficulty', e.difficulty,
      'passPercent', e.pass_percent,
      'mode', a.mode,
      'attemptNumber', a.attempt_number,
      'maxAttempts', e.max_attempts,
      'feedbackAttempts', e.feedback_attempts,
      'startedAt', a.started_at,
      'expiresAt', a.expires_at,
      'serverTime', now(),
      'durationMinutes', e.duration_minutes,
      'remainingSeconds', greatest(0, floor(extract(epoch from (a.expires_at - now())))::int)
    ),
    'questions', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', aq.question_id,
        'position', aq.position,
        'prompt', aq.prompt,
        'topic', aq.topic,
        'options', aq.options,
        'selectedOptionIds', coalesce(r.selected_option_ids, '{}'::text[]),
        'flagged', coalesce(r.flagged, false)
      ) order by aq.position)
      from public.exam_attempt_questions aq
      left join public.exam_responses r
        on r.attempt_id = aq.attempt_id and r.question_id = aq.question_id
      where aq.attempt_id = a.id
    ), '[]'::jsonb)
  )
  from public.exam_attempts a
  join public.exam_sets e on e.id = a.exam_set_id
  where a.id = p_attempt_id;
$$;

revoke all on function public.attempt_payload(uuid) from public, anon, authenticated;

-- Internal: post-submission payload. Explanations are only included when the
-- attempt mode allows immediate feedback.
create or replace function public.result_payload(p_attempt_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select jsonb_build_object(
    'status', 'submitted',
    'attempt', jsonb_build_object(
      'id', a.id,
      'examSetId', e.id,
      'examSlug', e.slug,
      'examTitle', e.title,
      'difficulty', e.difficulty,
      'passPercent', e.pass_percent,
      'mode', a.mode,
      'attemptNumber', a.attempt_number,
      'maxAttempts', e.max_attempts,
      'feedbackAttempts', e.feedback_attempts,
      'startedAt', a.started_at,
      'expiresAt', a.expires_at,
      'submittedAt', a.submitted_at,
      'serverTime', now(),
      'durationMinutes', e.duration_minutes,
      'remainingSeconds', 0
    ),
    'result', jsonb_build_object(
      'score', r.score,
      'total', r.total,
      'percent', round((r.score::numeric * 100) / r.total)::int,
      'passed', r.passed,
      'passPercent', r.pass_percent,
      'mode', a.mode,
      'reviewAvailable', a.mode = 'immediate_feedback',
      'topicBreakdown', r.topic_breakdown
    ),
    'questions', coalesce((
      select jsonb_agg(jsonb_build_object(
        'questionId', aq.question_id,
        'position', aq.position,
        'prompt', aq.prompt,
        'topic', aq.topic,
        'options', aq.options,
        'selectedOptionIds', coalesce(res.selected_option_ids, '{}'::text[]),
        'flagged', coalesce(res.flagged, false)
      ) order by aq.position)
      from public.exam_attempt_questions aq
      left join public.exam_responses res
        on res.attempt_id = aq.attempt_id and res.question_id = aq.question_id
      where aq.attempt_id = a.id
    ), '[]'::jsonb),
    'review', case when a.mode = 'immediate_feedback' then coalesce((
      select jsonb_agg(jsonb_build_object(
        'questionId', aq.question_id,
        'position', aq.position,
        'prompt', aq.prompt,
        'topic', aq.topic,
        'options', aq.options,
        'selectedOptionIds', coalesce(res.selected_option_ids, '{}'::text[]),
        'correctOptionIds', aq.correct_option_ids,
        'explanation', aq.explanation,
        'isCorrect',
          array_length(aq.correct_option_ids, 1) is not null
          and coalesce(
            (select array_agg(distinct s order by s)
             from unnest(coalesce(res.selected_option_ids, '{}'::text[])) s),
            '{}'::text[]
          ) = (select array_agg(distinct c order by c) from unnest(aq.correct_option_ids) c)
      ) order by aq.position)
      from public.exam_attempt_questions aq
      left join public.exam_responses res
        on res.attempt_id = aq.attempt_id and res.question_id = aq.question_id
      where aq.attempt_id = a.id
    ), '[]'::jsonb) else '[]'::jsonb end
  )
  from public.exam_attempts a
  join public.exam_sets e on e.id = a.exam_set_id
  join public.exam_results r on r.attempt_id = a.id
  where a.id = p_attempt_id;
$$;

revoke all on function public.result_payload(uuid) from public, anon, authenticated;

-- Start (or resume) an attempt ------------------------------------------------
create or replace function public.start_exam_attempt(p_exam_slug text)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user uuid := auth.uid();
  v_exam public.exam_sets%rowtype;
  v_attempt public.exam_attempts%rowtype;
  v_attempt_count integer;
  v_mode public.exam_mode;
  v_available integer;
  v_invalid integer;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = 'P0001';
  end if;

  insert into public.profiles (id, email)
  select v_user, coalesce(u.email, '')
  from auth.users u
  where u.id = v_user
  on conflict (id) do nothing;

  insert into public.user_roles (user_id, role)
  values (v_user, 'student')
  on conflict (user_id) do nothing;

  select * into v_exam
  from public.exam_sets
  where slug = p_exam_slug and is_published;

  if not found then
    raise exception 'exam_not_found' using errcode = 'P0001';
  end if;

  perform pg_advisory_xact_lock(
    hashtextextended(v_user::text || ':' || v_exam.id::text, 0)
  );

  select * into v_attempt
  from public.exam_attempts
  where user_id = v_user
    and exam_set_id = v_exam.id
    and status = 'in_progress';

  if found then
    if now() > v_attempt.expires_at then
      update public.exam_attempts
      set status = 'expired'
      where id = v_attempt.id;
    else
      return public.attempt_payload(v_attempt.id);
    end if;
  end if;

  select count(*) into v_attempt_count
  from public.exam_attempts
  where user_id = v_user
    and exam_set_id = v_exam.id
    and status in ('in_progress', 'submitted', 'expired');

  if v_attempt_count >= v_exam.max_attempts then
    raise exception 'attempt_limit_reached' using errcode = 'P0001';
  end if;

  select count(*) into v_available
  from public.exam_questions
  where exam_set_id = v_exam.id and is_active;

  if v_available < v_exam.question_count then
    raise exception 'exam_not_ready' using errcode = 'P0001';
  end if;

  v_mode := case
    when (v_attempt_count + 1) <= v_exam.feedback_attempts
      then 'immediate_feedback'::public.exam_mode
    else 'formal'::public.exam_mode
  end;

  insert into public.exam_attempts (
    user_id, exam_set_id, attempt_number, status, mode, started_at, expires_at
  )
  values (
    v_user, v_exam.id, v_attempt_count + 1, 'in_progress', v_mode, now(),
    now() + make_interval(mins => v_exam.duration_minutes)
  )
  returning * into v_attempt;

  with ranked as (
    select
      q.id,
      q.prompt,
      q.topic,
      q.explanation,
      row_number() over (
        order by
          case when v_exam.selection_mode = 'random' then random() end,
          q."order",
          q.id
      ) as position
    from public.exam_questions q
    where q.exam_set_id = v_exam.id and q.is_active
  ),
  picked as (
    select * from ranked order by position limit v_exam.question_count
  )
  insert into public.exam_attempt_questions (
    attempt_id, question_id, position, prompt, topic, options,
    correct_option_ids, explanation
  )
  select
    v_attempt.id,
    p.id,
    p.position,
    p.prompt,
    p.topic,
    coalesce((
      select jsonb_agg(jsonb_build_object('id', o.id, 'label', o.label) order by o."order")
      from public.exam_options o
      where o.question_id = p.id
    ), '[]'::jsonb),
    coalesce((
      select array_agg(o.id::text order by o."order")
      from public.exam_options o
      where o.question_id = p.id and o.is_correct
    ), '{}'::text[]),
    p.explanation
  from picked p;

  select count(*) into v_invalid
  from public.exam_attempt_questions
  where attempt_id = v_attempt.id
    and (
      jsonb_array_length(options) < 2
      or coalesce(array_length(correct_option_ids, 1), 0) = 0
    );

  if v_invalid > 0 then
    raise exception 'exam_not_ready' using errcode = 'P0001';
  end if;

  return public.attempt_payload(v_attempt.id);
end;
$$;

revoke all on function public.start_exam_attempt(text) from public, anon;
grant execute on function public.start_exam_attempt(text) to authenticated;

-- Save / flag a response -----------------------------------------------------
create or replace function public.save_exam_response(
  p_attempt_id uuid,
  p_question_id uuid,
  p_selected_option_ids text[],
  p_flagged boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user uuid := auth.uid();
  v_attempt public.exam_attempts%rowtype;
  v_options jsonb;
  v_selected text[];
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = 'P0001';
  end if;

  select * into v_attempt
  from public.exam_attempts
  where id = p_attempt_id and user_id = v_user
  for update;

  if not found then
    raise exception 'attempt_not_found' using errcode = 'P0001';
  end if;

  if v_attempt.status = 'submitted' then
    raise exception 'attempt_already_submitted' using errcode = 'P0001';
  end if;

  if v_attempt.status = 'expired' then
    return jsonb_build_object('status', 'expired');
  end if;

  if now() > v_attempt.expires_at then
    update public.exam_attempts set status = 'expired' where id = v_attempt.id;
    return jsonb_build_object('status', 'expired');
  end if;

  select options into v_options
  from public.exam_attempt_questions
  where attempt_id = v_attempt.id and question_id = p_question_id;

  if not found then
    raise exception 'question_not_in_attempt' using errcode = 'P0001';
  end if;

  select coalesce(array_agg(distinct candidate order by candidate), '{}'::text[])
  into v_selected
  from unnest(coalesce(p_selected_option_ids, '{}'::text[])) as candidate
  where candidate is not null;

  if cardinality(v_selected) > jsonb_array_length(v_options) then
    raise exception 'invalid_option' using errcode = 'P0001';
  end if;

  if exists (
    select 1
    from unnest(v_selected) as chosen
    where not exists (
      select 1 from jsonb_array_elements(v_options) as option
      where option ->> 'id' = chosen
    )
  ) then
    raise exception 'invalid_option' using errcode = 'P0001';
  end if;

  insert into public.exam_responses (
    attempt_id, question_id, selected_option_ids, flagged, answered_at, updated_at
  )
  values (
    v_attempt.id,
    p_question_id,
    v_selected,
    coalesce(p_flagged, false),
    case when cardinality(v_selected) > 0 then now() end,
    now()
  )
  on conflict (attempt_id, question_id) do update
    set selected_option_ids = excluded.selected_option_ids,
        flagged = excluded.flagged,
        answered_at = excluded.answered_at,
        updated_at = now();

  return jsonb_build_object(
    'status', 'saved',
    'flagged', coalesce(p_flagged, false),
    'serverTime', now(),
    'remainingSeconds', greatest(0, floor(extract(epoch from (v_attempt.expires_at - now())))::int)
  );
end;
$$;

revoke all on function public.save_exam_response(uuid, uuid, text[], boolean) from public, anon;
grant execute on function public.save_exam_response(uuid, uuid, text[], boolean) to authenticated;

-- Submit + score -------------------------------------------------------------
create or replace function public.submit_exam_attempt(p_attempt_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user uuid := auth.uid();
  v_attempt public.exam_attempts%rowtype;
  v_exam public.exam_sets%rowtype;
  v_score integer;
  v_total integer;
  v_breakdown jsonb;
  v_passed boolean;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = 'P0001';
  end if;

  select * into v_attempt
  from public.exam_attempts
  where id = p_attempt_id and user_id = v_user
  for update;

  if not found then
    raise exception 'attempt_not_found' using errcode = 'P0001';
  end if;

  if v_attempt.status = 'submitted' then
    return public.result_payload(v_attempt.id);
  end if;

  if v_attempt.status = 'expired' then
    return jsonb_build_object(
      'status', 'expired',
      'attempt', jsonb_build_object('id', v_attempt.id, 'expiresAt', v_attempt.expires_at),
      'serverTime', now()
    );
  end if;

  if now() > v_attempt.expires_at then
    update public.exam_attempts set status = 'expired' where id = v_attempt.id;
    return jsonb_build_object(
      'status', 'expired',
      'attempt', jsonb_build_object('id', v_attempt.id, 'expiresAt', v_attempt.expires_at),
      'serverTime', now()
    );
  end if;

  select * into v_exam from public.exam_sets where id = v_attempt.exam_set_id;

  select
    coalesce(sum(per_topic.correct_count), 0),
    coalesce(sum(per_topic.total_count), 0),
    coalesce(jsonb_object_agg(
      per_topic.topic,
      jsonb_build_object('score', per_topic.correct_count, 'total', per_topic.total_count)
    ), '{}'::jsonb)
  into v_score, v_total, v_breakdown
  from (
    select
      aq.topic,
      count(*) filter (where
        array_length(aq.correct_option_ids, 1) is not null
        and coalesce(
          (select array_agg(distinct selected order by selected)
           from unnest(coalesce(res.selected_option_ids, '{}'::text[])) as selected),
          '{}'::text[]
        ) = (select array_agg(distinct correct order by correct)
             from unnest(aq.correct_option_ids) as correct)
      ) as correct_count,
      count(*) as total_count
    from public.exam_attempt_questions aq
    left join public.exam_responses res
      on res.attempt_id = aq.attempt_id and res.question_id = aq.question_id
    where aq.attempt_id = v_attempt.id
    group by aq.topic
  ) as per_topic;

  if v_total = 0 then
    raise exception 'attempt_empty' using errcode = 'P0001';
  end if;

  v_passed := (v_score::numeric * 100) >= (v_exam.pass_percent::numeric * v_total);

  insert into public.exam_results (
    attempt_id, user_id, exam_set_id, score, total, passed, pass_percent, topic_breakdown
  )
  values (
    v_attempt.id, v_user, v_exam.id, v_score, v_total, v_passed,
    v_exam.pass_percent, v_breakdown
  )
  on conflict (attempt_id) do nothing;

  update public.exam_attempts
  set status = 'submitted', submitted_at = now()
  where id = v_attempt.id;

  return public.result_payload(v_attempt.id);
end;
$$;

revoke all on function public.submit_exam_attempt(uuid) from public, anon;
grant execute on function public.submit_exam_attempt(uuid) to authenticated;

-- Resume / results -----------------------------------------------------------
create or replace function public.get_exam_attempt(p_attempt_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user uuid := auth.uid();
  v_attempt public.exam_attempts%rowtype;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = 'P0001';
  end if;

  select * into v_attempt
  from public.exam_attempts
  where id = p_attempt_id and user_id = v_user;

  if not found then
    raise exception 'attempt_not_found' using errcode = 'P0001';
  end if;

  if v_attempt.status = 'submitted' then
    return public.result_payload(v_attempt.id);
  end if;

  if v_attempt.status = 'expired' then
    return jsonb_build_object(
      'status', 'expired',
      'attempt', jsonb_build_object(
        'id', v_attempt.id,
        'attemptNumber', v_attempt.attempt_number,
        'expiresAt', v_attempt.expires_at
      ),
      'serverTime', now()
    );
  end if;

  if now() > v_attempt.expires_at then
    update public.exam_attempts set status = 'expired' where id = v_attempt.id;
    return jsonb_build_object(
      'status', 'expired',
      'attempt', jsonb_build_object(
        'id', v_attempt.id,
        'attemptNumber', v_attempt.attempt_number,
        'expiresAt', v_attempt.expires_at
      ),
      'serverTime', now()
    );
  end if;

  return public.attempt_payload(v_attempt.id);
end;
$$;

revoke all on function public.get_exam_attempt(uuid) from public, anon;
grant execute on function public.get_exam_attempt(uuid) to authenticated;

-- Knowledge checks -----------------------------------------------------------
-- The Next.js server action verifies the CMS answer key and calls this with the
-- service-role key. Students cannot call it, so they cannot forge a result.
create or replace function public.record_knowledge_check(
  p_user_id uuid,
  p_course_slug text,
  p_session_key text,
  p_answers jsonb,
  p_score integer,
  p_total integer,
  p_passed boolean
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_attempt_number integer;
  v_attempt_id uuid;
  v_completed_at timestamptz;
begin
  if p_user_id is null then
    raise exception 'user_required' using errcode = 'P0001';
  end if;
  if p_score < 0 or p_total < 1 or p_score > p_total then
    raise exception 'invalid_score' using errcode = 'P0001';
  end if;
  if not exists (select 1 from public.profiles where id = p_user_id) then
    raise exception 'profile_missing' using errcode = 'P0001';
  end if;

  select coalesce(max(attempt_number), 0) + 1
  into v_attempt_number
  from public.knowledge_check_attempts
  where user_id = p_user_id
    and course_slug = p_course_slug
    and session_key = p_session_key;

  insert into public.knowledge_check_attempts (
    user_id, course_slug, session_key, attempt_number, answers, score, total, passed
  )
  values (
    p_user_id, p_course_slug, p_session_key, v_attempt_number,
    coalesce(p_answers, '[]'::jsonb), p_score, p_total, p_passed
  )
  returning id into v_attempt_id;

  if p_passed then
    insert into public.session_progress (user_id, course_slug, session_key)
    values (p_user_id, p_course_slug, p_session_key)
    on conflict (user_id, course_slug, session_key) do nothing;

    select completed_at into v_completed_at
    from public.session_progress
    where user_id = p_user_id
      and course_slug = p_course_slug
      and session_key = p_session_key;
  end if;

  return jsonb_build_object(
    'attemptId', v_attempt_id,
    'attemptNumber', v_attempt_number,
    'score', p_score,
    'total', p_total,
    'passed', p_passed,
    'completedAt', v_completed_at
  );
end;
$$;

revoke all on function public.record_knowledge_check(uuid, text, text, jsonb, integer, integer, boolean)
  from public, anon, authenticated;
grant execute on function public.record_knowledge_check(uuid, text, text, jsonb, integer, integer, boolean)
  to service_role;
