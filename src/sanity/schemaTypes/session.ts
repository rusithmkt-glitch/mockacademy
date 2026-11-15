import { defineField, defineType } from "sanity";

export const session = defineType({
  name: "session",
  title: "Session",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "module",
      title: "Module",
      type: "reference",
      to: [{ type: "courseModule" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order within module",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "durationMinutes",
      title: "Duration (minutes)",
      type: "number",
      initialValue: 15,
      validation: (rule) => rule.required().min(1).max(180),
    }),
    defineField({
      name: "objectives",
      title: "Learning objectives",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sections",
      title: "Lesson content",
      type: "array",
      of: [{ type: "lessonSection" }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "scenes",
      title: "Lesson scenes",
      type: "array",
      of: [{ type: "lessonScene" }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "keyPoints",
      title: "Key points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "knowledgeCheck",
      title: "Knowledge check",
      type: "reference",
      to: [{ type: "knowledgeCheck" }],
    }),
  ],
  orderings: [
    {
      title: "Session order",
      name: "sessionOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "order" },
  },
});
