import { defineField, defineType } from "sanity";

export const knowledgeCheckQuestion = defineType({
  name: "knowledgeCheckQuestion",
  title: "Knowledge-check question",
  type: "object",
  fields: [
    defineField({
      name: "questionId",
      title: "Question ID",
      type: "string",
      description: "Stable identifier used for scoring and attempt records.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Question type",
      type: "string",
      options: {
        list: [
          { title: "Single choice", value: "single" },
          { title: "Multiple choice", value: "multiple" },
          { title: "True / false", value: "boolean" },
        ],
        layout: "radio",
      },
      initialValue: "single",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "prompt",
      title: "Question",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "options",
      title: "Answer options",
      type: "array",
      of: [
        {
          type: "object",
          name: "checkOption",
          fields: [
            defineField({ name: "id", title: "ID", type: "string", validation: (r) => r.required() }),
            defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "label", subtitle: "id" } },
        },
      ],
      validation: (rule) => rule.min(2),
    }),
    defineField({
      name: "correctOptionIds",
      title: "Correct option IDs",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "explanation",
      title: "Explanation",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "topic",
      title: "Syllabus topic",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "prompt", subtitle: "topic" },
  },
});
