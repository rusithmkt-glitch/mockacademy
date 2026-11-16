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
      name: "scenario",
      title: "Scenario carousel",
      type: "object",
      description: "A question answered step by step. Learners select the arrow to move through the steps.",
      fields: [
        defineField({ name: "question", title: "Question", type: "string" }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          of: [
            {
              type: "object",
              name: "scenarioStep",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
              ],
              preview: { select: { title: "title", subtitle: "body" } },
            },
          ],
        }),
      ],
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
