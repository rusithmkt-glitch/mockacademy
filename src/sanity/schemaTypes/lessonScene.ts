import { defineField, defineType } from "sanity";

export const lessonScene = defineType({
  name: "lessonScene",
  title: "Lesson scene",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Scene title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "illustration",
      title: "Illustration",
      type: "reference",
      to: [{ type: "illustration" }],
    }),
    defineField({
      name: "captions",
      title: "Captions",
      type: "array",
      of: [{ type: "string" }],
      description: "Short captions shown while the scene animates.",
    }),
    defineField({
      name: "durationSeconds",
      title: "Duration (seconds)",
      type: "number",
      initialValue: 18,
      validation: (rule) => rule.min(5).max(120),
    }),
    defineField({
      name: "animationPreset",
      title: "Animation preset",
      type: "string",
      options: {
        list: [
          { title: "Fade up", value: "fade-up" },
          { title: "Fade", value: "fade" },
          { title: "None (static)", value: "none" },
        ],
      },
      initialValue: "fade-up",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "durationSeconds" },
  },
});
