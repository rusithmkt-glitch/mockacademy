import { defineField, defineType } from "sanity";

export const lessonSection = defineType({
  name: "lessonSection",
  title: "Lesson section",
  type: "object",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
      description: "Stable anchor, e.g. principles-in-action.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "bullets",
      title: "Bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "callout",
      title: "Callout",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
        defineField({
          name: "tone",
          title: "Tone",
          type: "string",
          options: {
            list: [
              { title: "Tip", value: "tip" },
              { title: "Exam focus", value: "exam" },
              { title: "Note", value: "note" },
            ],
          },
          initialValue: "note",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "sectionId" },
  },
});
