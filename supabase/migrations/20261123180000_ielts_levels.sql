-- Widen the exam_sets level constraint so non-PRINCE2 certifications can
-- publish their own levels (IELTS Academic / General Training). The old check
-- is dropped by introspection rather than by name, because inline column
-- checks can be auto-named differently across environments.
do $$
declare
  r record;
begin
  for r in
    select con.conname
    from pg_constraint con
    where con.conrelid = 'public.exam_sets'::regclass
      and con.contype = 'c'
      and con.conkey @> ARRAY(
        select att.attnum
        from pg_attribute att
        where att.attrelid = 'public.exam_sets'::regclass
          and att.attname = 'level'
      )
  loop
    execute format('alter table public.exam_sets drop constraint %I', r.conname);
  end loop;
end $$;

alter table public.exam_sets
  add constraint exam_sets_level_check
  check (level in ('foundation', 'practitioner', 'intermediate', 'advanced', 'academic', 'general'));
