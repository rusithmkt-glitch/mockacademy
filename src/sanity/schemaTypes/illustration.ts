import { defineField, defineType } from "sanity";

export const illustration = defineType({
  name: "illustration",
  title: "Lesson illustration",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "artKey",
      title: "Illustration artwork",
      type: "string",
      description:
        "References one of the original MockAcademy SVG illustrations rendered by the lesson player.",
      options: {
        list: [
          { title: "Principles", value: "principles" },
          { title: "Team", value: "team" },
          { title: "Lifecycle", value: "lifecycle" },
          { title: "Business case", value: "business-case" },
          { title: "Planning", value: "planning" },
          { title: "Risk", value: "risk" },
          { title: "Progress", value: "progress" },
          { title: "Products", value: "products" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Text alternative",
      type: "text",
      rows: 2,
      description: "Read by screen readers for learners who cannot see the illustration.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "artKey" },
  },
});
