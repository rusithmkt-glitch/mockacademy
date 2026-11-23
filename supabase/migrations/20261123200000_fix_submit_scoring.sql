-- Fixes submit_exam_attempt: the scoring select summed an alias ("pq") that
-- was never in scope, so every submission of a weighted paper failed with
-- 42P01 at runtime. The totals come from the per-topic aggregate instead.

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
