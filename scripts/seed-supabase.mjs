#!/usr/bin/env node
/**
 * Seeds the published PRINCE2 Foundation papers and question bank into
 * Supabase. Safe to re-run: exam sets are upserted by slug, a paper is only
 * reseeded while it has no recorded attempts, and papers no longer listed are
 * unpublished (or removed if nobody has sat them).
 *
 * Usage: npm run seed:supabase
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.
 */
import { createClient } from "@supabase/supabase-js";
import { examQuestionBank } from "../src/data/exams/questions.ts";
import { examConfigs } from "../src/data/exams/config.ts";
import { examSets } from "../src/data/mock-exams.ts";

const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

if (!url || !serviceRoleKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Add them to .env.local (never commit real keys).",
  );
  process.exit(1);
}

const supabase = createClient(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const difficulty = {
  "Full simulation": "full_simulation",
  "Focused practice": "focused_practice",
  "Rapid revision": "rapid_revision",
};

const bank = new Map(examQuestionBank.map((question) => [question.id, question]));

function selectionFor(examId) {
  const config = examConfigs[examId];
  if (!config) throw new Error(`No exam config for ${examId}`);
  return config.selection.mode === "fixed"
    ? { mode: "fixed", ids: config.selection.questionIds }
    : { mode: "random", ids: config.selection.poolQuestionIds };
}

async function seedExam(exam) {
  const selection = selectionFor(exam.id);
  const { data: examRow, error: examError } = await supabase
    .from("exam_sets")
    .upsert(
      {
        slug: exam.slug,
        title: exam.title,
        description: exam.description,
        difficulty: difficulty[exam.difficulty] ?? "full_simulation",
        question_count: exam.questionCount,
        duration_minutes: exam.durationMinutes,
        pass_percent: examConfigs[exam.id].passMarkPercent,
        selection_mode: selection.mode,
        max_attempts: exam.maxAttempts,
        feedback_attempts: exam.feedbackAttempts,
        is_published: true,
        is_free: true,
        is_featured: Boolean(exam.featured),
        topics: exam.topics,
      },
      { onConflict: "slug" },
    )
    .select("id")
    .single();

  if (examError) throw new Error(`${exam.slug}: ${examError.message}`);

  const { count, error: countError } = await supabase
    .from("exam_attempts")
    .select("id", { count: "exact", head: true })
    .eq("exam_set_id", examRow.id);

  if (countError) throw new Error(`${exam.slug}: ${countError.message}`);
  if (count > 0) {
    console.log(`- ${exam.slug}: skipped, ${count} attempt(s) already recorded`);
    return;
  }

  const { error: deleteError } = await supabase
    .from("exam_questions")
    .delete()
    .eq("exam_set_id", examRow.id);
  if (deleteError) throw new Error(`${exam.slug}: ${deleteError.message}`);

  const selected = selection.ids.map((id) => bank.get(id));
  const missing = selected.find((question) => !question);
  if (missing !== undefined) throw new Error(`${exam.slug}: unknown question id`);

  const { data: questionRows, error: questionError } = await supabase
    .from("exam_questions")
    .insert(
      selected.map((question, index) => ({
        exam_set_id: examRow.id,
        prompt: question.prompt,
        explanation: question.explanation,
        topic: question.topic,
        order: index + 1,
        is_active: true,
      })),
    )
    .select('id, "order"');

  if (questionError) throw new Error(`${exam.slug}: ${questionError.message}`);

  const idByOrder = new Map(questionRows.map((row) => [row.order, row.id]));
  const options = selected.flatMap((question, index) =>
    question.options.map((option, optionIndex) => ({
      question_id: idByOrder.get(index + 1),
      label: option.label,
      order: optionIndex + 1,
      is_correct: option.id === question.correctOptionId,
    })),
  );

  const { error: optionError } = await supabase
    .from("exam_options")
    .insert(options);
  if (optionError) throw new Error(`${exam.slug}: ${optionError.message}`);

  console.log(
    `- ${exam.slug}: ${selected.length} questions, ${options.length} options`,
  );
}

async function retireOldPapers() {
  const current = new Set(examSets.map((exam) => exam.slug));
  const { data, error } = await supabase.from("exam_sets").select("id, slug");
  if (error) throw new Error(`exam_sets: ${error.message}`);

  for (const row of data.filter((set) => !current.has(set.slug))) {
    const { count, error: countError } = await supabase
      .from("exam_attempts")
      .select("id", { count: "exact", head: true })
      .eq("exam_set_id", row.id);
    if (countError) throw new Error(`${row.slug}: ${countError.message}`);

    if (count > 0) {
      const { error: hideError } = await supabase
        .from("exam_sets")
        .update({ is_published: false, is_featured: false })
        .eq("id", row.id);
      if (hideError) throw new Error(`${row.slug}: ${hideError.message}`);
      console.log(`- ${row.slug}: unpublished, ${count} attempt(s) kept for history`);
    } else {
      const { error: deleteError } = await supabase
        .from("exam_sets")
        .delete()
        .eq("id", row.id);
      if (deleteError) throw new Error(`${row.slug}: ${deleteError.message}`);
      console.log(`- ${row.slug}: removed`);
    }
  }
}

for (const exam of examSets) {
  await seedExam(exam);
}
await retireOldPapers();

console.log("Exam bank seed complete.");
