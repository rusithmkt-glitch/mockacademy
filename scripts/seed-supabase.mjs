#!/usr/bin/env node
/**
 * Seeds the published PRINCE2 Foundation papers and question bank into
 * Supabase. Safe to re-run: exam sets are upserted by slug, and a paper is
 * only reseeded while it has no recorded attempts.
 *
 * Usage: npm run seed:supabase
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.
 */
import { createClient } from "@supabase/supabase-js";
import { examQuestionBank } from "../src/data/exams/questions.ts";
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

const MAX_ATTEMPTS = 3;
const FEEDBACK_ATTEMPTS = 2;

const bank = new Map(examQuestionBank.map((question) => [question.id, question]));
const byTopic = (topic) => examQuestionBank.filter((question) => question.topic === topic);

/** Mirrors the paper selection in src/data/exams/config.ts. */
function selectionFor(examId) {
  const pick = (topic, from = 0, to) =>
    byTopic(topic)
      .slice(from, to)
      .map((question) => question.id);

  switch (examId) {
    case "mock-a":
      return [
        ...pick("Principles", 0, 12),
        ...pick("People", 0, 10),
        ...pick("Practices", 0, 20),
        ...pick("Processes", 0, 12),
        ...pick("Project context", 0, 6),
      ];
    case "mock-b":
      return [
        ...pick("Principles", 2, 12),
        ...pick("People", 0, 10),
        ...pick("Practices", 2, 20),
        ...pick("Processes", 0, 12),
        ...pick("Project context", 0, 10),
      ];
    case "mock-c":
      return examQuestionBank.map((question) => question.id);
    case "rapid-principles-people":
      return [...pick("Principles", 0, 12), ...pick("People", 0, 8)];
    case "processes-deep-dive":
      return [...pick("Practices", 0, 20), ...pick("Processes", 0, 10)];
    default:
      throw new Error(`No seed selection for ${examId}`);
  }
}

async function seedExam(exam) {
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
        pass_percent: 60,
        selection_mode: exam.id === "mock-c" ? "random" : "fixed",
        max_attempts: MAX_ATTEMPTS,
        feedback_attempts: FEEDBACK_ATTEMPTS,
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

  const selected = selectionFor(exam.id).map((id) => bank.get(id));
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

for (const exam of examSets) {
  await seedExam(exam);
}

console.log("Exam bank seed complete.");
