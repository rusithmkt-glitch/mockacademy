-- Practitioner engine · weighted marks, matching questions, scenario material
--
-- Backwards compatible: every existing Foundation row keeps its behaviour
-- through column defaults (kind 'single', marks 1, absolute pass mark null
-- falls back to the percentage rule). All scoring still happens server-side.

-- exam_sets ----------------------------------------------------------------
alter table public.exam_sets
  add column pass_mark integer check (pass_mark between 1 and 200),
  add column total_marks integer check (total_marks between 1 and 500),
  add column is_open_book boolean not null default false,
  add column reference_materials jsonb not null default '[]'::jsonb,
  add column certification text not null default 'PRINCE2',
  add column level text not null default 'foundation'
    check (level in ('foundation', 'practitioner', 'intermediate', 'advanced'));

-- exam_questions -------------------------------------------------------------
-- kind 'match' items carry their stems as [{id, label}]; the options table
-- becomes the shared answer pool and exam_options.matches_stem_id records
-- which stem an option answers correctly. Distractor options match no stem.
alter table public.exam_questions
  add column kind text not null default 'single'
    check (kind in ('single', 'match')),
  add column marks integer not null default 1 check (marks between 1 and 6),
  add column stems jsonb not null default '[]'::jsonb;

create index exam_questions_kind_idx on public.exam_questions (exam_set_id, kind);

-- A stem may have exactly one correct option within a question.
alter table public.exam_options
  add column matches_stem_id text;

create unique index exam_options_stem_unique_idx
  on public.exam_options (question_id, matches_stem_id)
  where matches_stem_id is not null;

-- Attempt snapshot ------------------------------------------------------------
alter table public.exam_attempt_questions
  add column kind text not null default 'single',
  add column marks integer not null default 1,
  add column stems jsonb not null default '[]'::jsonb,
  add column correct_by_stem jsonb not null default '{}'::jsonb;

-- Responses -------------------------------------------------------------------
alter table public.exam_responses
  add column selected_by_stem jsonb not null default '{}'::jsonb;

-- Results ----------------------------------------------------------------------
alter table public.exam_results
  add column pass_mark integer;

-- Payload: sanitised active attempt -------------------------------------------
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
      'certification', e.certification,
      'level', e.level,
      'passPercent', e.pass_percent,
      'passMark', coalesce(e.pass_mark, r.pass_mark),
      'totalMarks', coalesce((
        select sum(aq.marks)
        from public.exam_attempt_questions aq
        where aq.attempt_id = a.id
      ), 0),
      'referenceMaterials', e.reference_materials,
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
        'kind', aq.kind,
        'marks', aq.marks,
        'stems', aq.stems,
        'options', aq.options,
        'selectedOptionIds', coalesce(r2.selected_option_ids, '{}'::text[]),
        'selectedByStem', coalesce(r2.selected_by_stem, '{}'::jsonb),
        'flagged', coalesce(r2.flagged, false)
      ) order by aq.position)
      from public.exam_attempt_questions aq
      left join public.exam_responses r2
        on r2.attempt_id = aq.attempt_id and r2.question_id = aq.question_id
      where aq.attempt_id = a.id
    ), '[]'::jsonb)
  )
  from public.exam_attempts a
  join public.exam_sets e on e.id = a.exam_set_id
  left join public.exam_results r on r.attempt_id = a.id
  where a.id = p_attempt_id;
$$;

revoke all on function public.attempt_payload(uuid) from public, anon, authenticated;

-- Payload: post-submission ------------------------------------------------------
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
      'certification', e.certification,
      'level', e.level,
      'passPercent', e.pass_percent,
      'passMark', coalesce(r.pass_mark, e.pass_mark),
      'totalMarks', coalesce((
        select sum(aq.marks)
        from public.exam_attempt_questions aq
        where aq.attempt_id = a.id
      ), 0),
      'referenceMaterials', e.reference_materials,
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
      'passMark', r.pass_mark,
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
        'kind', aq.kind,
        'marks', aq.marks,
        'stems', aq.stems,
        'options', aq.options,
        'selectedOptionIds', coalesce(res.selected_option_ids, '{}'::text[]),
        'selectedByStem', coalesce(res.selected_by_stem, '{}'::jsonb),
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
        'kind', aq.kind,
        'marks', aq.marks,
        'stems', aq.stems,
        'options', aq.options,
        'selectedOptionIds', coalesce(res.selected_option_ids, '{}'::text[]),
        'selectedByStem', coalesce(res.selected_by_stem, '{}'::jsonb),
        'correctOptionIds', aq.correct_option_ids,
        'correctByStem', aq.correct_by_stem,
        'explanation', aq.explanation,
        'isCorrect', case
          when aq.kind = 'match' then
            coalesce(res.selected_by_stem, '{}'::jsonb) @> aq.correct_by_stem
          else
            array_length(aq.correct_option_ids, 1) is not null
            and coalesce(
              (select array_agg(distinct s order by s)
               from unnest(coalesce(res.selected_option_ids, '{}'::text[])) s),
              '{}'::text[]
            ) = (select array_agg(distinct c order by c) from unnest(aq.correct_option_ids) c)
        end
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

-- Start (or resume) an attempt ----------------------------------------------------
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
      q.kind,
      q.marks,
      q.stems,
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
    attempt_id, question_id, position, prompt, topic, kind, marks, stems,
    options, correct_option_ids, correct_by_stem, explanation
  )
  select
    v_attempt.id,
    p.id,
    p.position,
    p.prompt,
    p.topic,
    p.kind,
    p.marks,
    p.stems,
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
    coalesce((
      select jsonb_object_agg(o.matches_stem_id, o.id::text)
      from public.exam_options o
      where o.question_id = p.id and o.matches_stem_id is not null
    ), '{}'::jsonb),
    p.explanation
  from picked p;

  select count(*) into v_invalid
  from public.exam_attempt_questions
  where attempt_id = v_attempt.id
    and (
      (kind = 'single' and (
        jsonb_array_length(options) < 2
        or coalesce(array_length(correct_option_ids, 1), 0) = 0
      ))
      or (kind = 'match' and (
        jsonb_typeof(stems) <> 'array'
        or jsonb_array_length(stems) not between 2 and 6
        or jsonb_array_length(stems) <> marks
        or exists (
          select 1
          from jsonb_array_elements(stems) as s
          where not (correct_by_stem ? (s->>'id'))
        )
      ))
    );

  if v_invalid > 0 then
    raise exception 'exam_not_ready' using errcode = 'P0001';
  end if;

  return public.attempt_payload(v_attempt.id);
end;
$$;

revoke all on function public.start_exam_attempt(text) from public, anon;
grant execute on function public.start_exam_attempt(text) to authenticated;

-- Save / flag a response ----------------------------------------------------------
-- Match answers arrive as {stemId: optionId}. The option ids are mirrored into
-- selected_option_ids so answered/unanswered counters stay uniform.
drop function if exists public.save_exam_response(uuid, uuid, text[], boolean);

create or replace function public.save_exam_response(
  p_attempt_id uuid,
  p_question_id uuid,
  p_selected_option_ids text[],
  p_flagged boolean default false,
  p_selected_by_stem jsonb default null
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user uuid := auth.uid();
  v_attempt public.exam_attempts%rowtype;
  v_aq public.exam_attempt_questions%rowtype;
  v_selected text[];
  v_stem_selected jsonb := '{}'::jsonb;
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

  select * into v_aq
  from public.exam_attempt_questions
  where attempt_id = v_attempt.id and question_id = p_question_id;

  if not found then
    raise exception 'question_not_in_attempt' using errcode = 'P0001';
  end if;

  if v_aq.kind = 'match' then
    select coalesce(jsonb_object_agg(key, value), '{}'::jsonb)
    into v_stem_selected
    from jsonb_each(coalesce(p_selected_by_stem, '{}'::jsonb)) as e(key, value)
    where e.value #>> '{}' is not null
      and exists (
        select 1 from jsonb_array_elements(v_aq.stems) as s
        where s->>'id' = e.key
      )
      and exists (
        select 1 from jsonb_array_elements(v_aq.options) as o
        where o->>'id' = e.value #>> '{}'
      );

    v_selected := coalesce(
      (select array_agg(distinct v order by v)
       from jsonb_array_elements_text(v_stem_selected) as v),
      '{}'::text[]
    );
  else
    select coalesce(array_agg(distinct candidate order by candidate), '{}'::text[])
    into v_selected
    from unnest(coalesce(p_selected_option_ids, '{}'::text[])) as candidate
    where candidate is not null;

    if cardinality(v_selected) > jsonb_array_length(v_aq.options) then
      raise exception 'invalid_option' using errcode = 'P0001';
    end if;

    if exists (
      select 1
      from unnest(v_selected) as chosen
      where not exists (
        select 1 from jsonb_array_elements(v_aq.options) as option
        where option ->> 'id' = chosen
      )
    ) then
      raise exception 'invalid_option' using errcode = 'P0001';
    end if;
  end if;

  insert into public.exam_responses (
    attempt_id, question_id, selected_option_ids, selected_by_stem,
    flagged, answered_at, updated_at
  )
  values (
    v_attempt.id,
    p_question_id,
    v_selected,
    v_stem_selected,
    coalesce(p_flagged, false),
    case when cardinality(v_selected) > 0 then now() end,
    now()
  )
  on conflict (attempt_id, question_id) do update
    set selected_option_ids = excluded.selected_option_ids,
        selected_by_stem = excluded.selected_by_stem,
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

revoke all on function public.save_exam_response(uuid, uuid, text[], boolean, jsonb) from public, anon;
grant execute on function public.save_exam_response(uuid, uuid, text[], boolean, jsonb) to authenticated;

-- Submit + score (mark-weighted, per-stem partial credit for matching) --------------
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

  with per_question as (
    select
      aq.topic,
      case
        when aq.kind = 'match' then (
          select count(*)
          from jsonb_array_elements(aq.stems) as s
          where aq.correct_by_stem ? (s->>'id')
            and coalesce(res.selected_by_stem ->> (s->>'id'), '') =
                coalesce(aq.correct_by_stem ->> (s->>'id'), '')
        )
        when
          array_length(aq.correct_option_ids, 1) is not null
          and coalesce(
            (select array_agg(distinct selected order by selected)
             from unnest(coalesce(res.selected_option_ids, '{}'::text[])) as selected),
            '{}'::text[]
          ) = (select array_agg(distinct correct order by correct)
               from unnest(aq.correct_option_ids) as correct)
        then aq.marks
        else 0
      end as correct_marks,
      aq.marks as total_marks
    from public.exam_attempt_questions aq
    left join public.exam_responses res
      on res.attempt_id = aq.attempt_id and res.question_id = aq.question_id
    where aq.attempt_id = v_attempt.id
  )
  select
    coalesce(sum(per_topic.correct_marks), 0),
    coalesce(sum(per_topic.total_marks), 0),
    coalesce(jsonb_object_agg(
      per_topic.topic,
      jsonb_build_object('score', per_topic.correct_marks, 'total', per_topic.total_marks)
    ), '{}'::jsonb)
  into v_score, v_total, v_breakdown
  from (
    select topic, sum(correct_marks) as correct_marks, sum(total_marks) as total_marks
    from per_question
    group by topic
  ) as per_topic;

  if v_total = 0 then
    raise exception 'attempt_empty' using errcode = 'P0001';
  end if;

  v_passed := case
    when v_exam.pass_mark is not null
      then v_score >= v_exam.pass_mark
    else (v_score::numeric * 100) >= (v_exam.pass_percent::numeric * v_total)
  end;

  insert into public.exam_results (
    attempt_id, user_id, exam_set_id, score, total, passed,
    pass_percent, pass_mark, topic_breakdown
  )
  values (
    v_attempt.id, v_user, v_exam.id, v_score, v_total, v_passed,
    v_exam.pass_percent, v_exam.pass_mark, v_breakdown
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
