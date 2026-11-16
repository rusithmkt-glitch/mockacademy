import { createClient } from "@sanity/client";
import { prince2Foundation } from "../src/data/prince2-foundation/index.ts";
import { buildSessionScenes } from "../src/lib/lesson/scenes.ts";
import { getSessionAssessment } from "../src/lib/lesson/assessment.ts";

const ARTWORK = [
  ["principles", "Principles"],
  ["team", "Team"],
  ["lifecycle", "Lifecycle"],
  ["business-case", "Business case"],
  ["planning", "Planning"],
  ["risk", "Risk"],
  ["progress", "Progress"],
  ["products", "Products"],
];

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ||
  process.env.SANITY_PROJECT_ID?.trim() ||
  "";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() ||
  process.env.SANITY_DATASET?.trim() ||
  "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2026-01-01";
const token =
  process.env.SANITY_API_WRITE_TOKEN?.trim() ||
  process.env.SANITY_AUTH_TOKEN?.trim() ||
  "";

if (!projectId || !dataset) {
  console.error(
    "Missing Sanity configuration. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET (or SANITY_PROJECT_ID / SANITY_DATASET).",
  );
  process.exitCode = 1;
} else if (!token) {
  console.error(
    "Missing SANITY_API_WRITE_TOKEN. Create an Editor token in Sanity Manage → API tokens and add it to .env.local (server-side only).",
  );
  process.exitCode = 1;
} else {
  await seed();
}

async function seed() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  const courseId = `course.${prince2Foundation.slug}`;
  const docs = [];

  for (const [artKey, title] of ARTWORK) {
    docs.push({
      _id: `illustration.${artKey}`,
      _type: "illustration",
      title,
      artKey,
      description: `${title} illustration used across MockAcademy lessons.`,
    });
  }

  docs.push({
    _id: courseId,
    _type: "course",
    title: prince2Foundation.title,
    shortTitle: prince2Foundation.shortTitle,
    slug: { _type: "slug", current: prince2Foundation.slug },
    level: prince2Foundation.level,
    description: prince2Foundation.description,
    overview: prince2Foundation.overview,
    outcomes: prince2Foundation.outcomes,
    benefits: prince2Foundation.benefits.map((benefit, index) => ({
      _key: `benefit-${index + 1}`,
      _type: "courseBenefit",
      title: benefit.title,
      body: benefit.body,
    })),
    examDetails: prince2Foundation.examDetails,
  });

  for (const courseModule of prince2Foundation.modules) {
    const moduleId = `courseModule.${courseModule.slug}`;
    docs.push({
      _id: moduleId,
      _type: "courseModule",
      title: courseModule.title,
      shortTitle: courseModule.shortTitle,
      slug: { _type: "slug", current: courseModule.slug },
      order: courseModule.order,
      tagline: courseModule.tagline,
      description: courseModule.description,
      sceneVariant: courseModule.scene,
      course: { _type: "reference", _ref: courseId },
    });

    courseModule.sessions.forEach((session, sessionIndex) => {
      const sessionId = `${courseModule.slug}.${session.slug}`;
      const sessionDocId = `session.${sessionId}`;
      const checkId = `knowledgeCheck.${sessionId}`;
      const scenes = buildSessionScenes(session, courseModule);
      const questions = getSessionAssessment(
        session,
        courseModule.shortTitle,
      );

      docs.push({
        _id: checkId,
        _type: "knowledgeCheck",
        title: `${session.title} knowledge check`,
        sessionKey: sessionId,
        passPercent: 60,
        questions: questions.map((question, questionIndex) => ({
          _key: `question-${questionIndex + 1}`,
          _type: "knowledgeCheckQuestion",
          questionId: question.id,
          type: question.type,
          prompt: question.prompt,
          options: question.options.map((option, optionIndex) => ({
            _key: `option-${optionIndex + 1}`,
            _type: "checkOption",
            id: option.id,
            label: option.label,
          })),
          correctOptionIds: question.correctOptionIds,
          explanation: question.explanation,
          topic: question.topic,
        })),
      });

      docs.push({
        _id: sessionDocId,
        _type: "session",
        title: session.title,
        slug: { _type: "slug", current: session.slug },
        module: { _type: "reference", _ref: moduleId },
        order: sessionIndex + 1,
        summary: session.summary,
        durationMinutes: session.durationMinutes,
        objectives: session.objectives,
        keyPoints: session.keyPoints,
        sections: session.sections.map((section, sectionIndex) => ({
          _key: `section-${sectionIndex + 1}`,
          _type: "lessonSection",
          sectionId: section.id,
          heading: section.heading,
          paragraphs: section.paragraphs,
          bullets: section.bullets ?? [],
          scenario: section.scenario
            ? {
                question: section.scenario.question,
                steps: section.scenario.steps.map((step, stepIndex) => ({
                  _key: `step-${stepIndex + 1}`,
                  _type: "scenarioStep",
                  title: step.title,
                  body: step.body,
                })),
              }
            : null,
          callout: section.callout
            ? {
                title: section.callout.title,
                body: section.callout.body,
                tone: section.callout.tone,
              }
            : null,
        })),
        scenes: scenes.map((scene) => ({
          _key: scene.id,
          _type: "lessonScene",
          title: scene.title,
          description: scene.description,
          illustration: {
            _type: "reference",
            _ref: `illustration.${scene.art}`,
          },
          captions: scene.captions,
          durationSeconds: scene.durationSeconds,
          animationPreset: "fade-up",
        })),
        knowledgeCheck: { _type: "reference", _ref: checkId },
      });
    });
  }

  for (let start = 0; start < docs.length; start += 25) {
    const transaction = client.transaction();
    for (const doc of docs.slice(start, start + 25)) transaction.createOrReplace(doc);
    await transaction.commit();
  }

  // Remove modules, sessions and checks that are no longer in the bundled course.
  const keep = new Set(docs.map((doc) => doc._id));
  const existing = await client.fetch(
    '*[_type in ["courseModule", "session", "knowledgeCheck"] && !(_id in path("drafts.**"))]._id',
  );
  const stale = existing.filter((id) => !keep.has(id));
  if (stale.length > 0) {
    const cleanup = client.transaction();
    for (const id of stale) cleanup.delete(id);
    await cleanup.commit();
  }

  const sessions = prince2Foundation.modules.reduce(
    (total, courseModule) => total + courseModule.sessions.length,
    0,
  );
  console.log(
    `Seeded Sanity (${projectId}/${dataset}): 1 course, ${prince2Foundation.modules.length} modules, ${sessions} sessions, ${sessions} knowledge checks, ${ARTWORK.length} illustrations; removed ${stale.length} stale documents.`,
  );
}
