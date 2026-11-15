import { defineField, defineType } from "sanity";

export const courseModule = defineType({
  name: "courseModule",
  title: "Module",
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
      name: "order",
      title: "Order",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sceneVariant",
      title: "Scene variant",
      type: "string",
      options: {
        list: [
          { title: "Foundations", value: "foundations" },
          { title: "People", value: "people" },
          { title: "Starting a project", value: "starting" },
          { title: "Planning", value: "planning" },
          { title: "Risk", value: "risk" },
          { title: "Delivery", value: "delivery" },
        ],
      },
      initialValue: "foundations",
    }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "course" }],
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Module order",
      name: "moduleOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "order" },
  },
});
