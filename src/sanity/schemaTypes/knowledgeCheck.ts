import { defineField, defineType } from "sanity";

export const knowledgeCheck = defineType({
  name: "knowledgeCheck",
  title: "Knowledge check",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sessionKey",
      title: "Session key",
      type: "string",
      description:
        "Stable key: module slug / session slug, e.g. 01-foundations/what-is-prince2.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "passPercent",
      title: "Feedback threshold (%)",
      type: "number",
      initialValue: 60,
      validation: (rule) => rule.min(0).max(100),
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [{ type: "knowledgeCheckQuestion" }],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "sessionKey" },
  },
});
