import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "unconfigured";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

export default defineConfig({
  name: "mockacademy",
  title: "MockAcademy content",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
