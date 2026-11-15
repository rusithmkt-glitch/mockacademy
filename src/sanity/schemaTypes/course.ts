import { defineField, defineType } from "sanity";

export const course = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortTitle",
      title: "Short title",
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
      name: "level",
      title: "Level",
      type: "string",
      initialValue: "Foundation",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "overview",
      title: "Overview paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({
      name: "outcomes",
      title: "Course objectives",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          name: "courseBenefit",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "body", title: "Body", type: "text", rows: 2, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        },
      ],
    }),
    defineField({
      name: "examDetails",
      title: "Exam details",
      type: "object",
      fields: [
        defineField({ name: "questions", title: "Questions", type: "number", initialValue: 60 }),
        defineField({ name: "durationMinutes", title: "Duration (minutes)", type: "number", initialValue: 60 }),
        defineField({ name: "passMark", title: "Pass mark", type: "string", initialValue: "60% (36 out of 60)" }),
        defineField({ name: "format", title: "Format", type: "string", initialValue: "Multiple choice, closed book" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "level" },
  },
});
