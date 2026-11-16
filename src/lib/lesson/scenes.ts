import type {
  CourseModule,
  LessonArtKey,
  LessonScene,
  SceneVariant,
  Session,
} from "@/data/types";
import { plainText } from "./inline";

const artPools: Record<SceneVariant, LessonArtKey[]> = {
  foundations: ["principles", "lifecycle", "business-case"],
  people: ["team", "progress", "principles"],
  starting: ["business-case", "planning", "lifecycle"],
  planning: ["planning", "products", "progress"],
  risk: ["risk", "products", "progress"],
  delivery: ["lifecycle", "products", "progress"],
};

function readingSeconds(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.min(30, Math.max(12, Math.round((words / 18) * 5) * 2));
}

export function buildSessionScenes(
  session: Session,
  courseModule: CourseModule,
): LessonScene[] {
  const pool = artPools[courseModule.scene];

  const intro: LessonScene = {
    id: `${session.id}-scene-overview`,
    title: session.title,
    description: session.summary,
    art: pool[0],
    captions: session.objectives,
    durationSeconds: readingSeconds(
      [session.summary, ...session.objectives].join(" "),
    ),
  };

  const sectionScenes = session.sections.map((section, index) => {
    const [lead, ...rest] = section.paragraphs.map(plainText);
    const captions = [
      ...rest,
      ...(section.bullets ?? []).map(plainText),
      ...(section.scenario
        ? section.scenario.steps.map((step) => plainText(step.body))
        : []),
      ...(section.callout
        ? [`${section.callout.title}: ${plainText(section.callout.body)}`]
        : []),
    ];

    return {
      id: `${session.id}-scene-${index + 1}`,
      title: section.heading ?? session.title,
      description: lead ?? session.summary,
      art: pool[(index + 1) % pool.length],
      captions,
      durationSeconds: readingSeconds(
        [lead ?? "", ...captions].join(" "),
      ),
    } satisfies LessonScene;
  });

  const recap: LessonScene = {
    id: `${session.id}-scene-recap`,
    title: "Key points to remember",
    description: "A quick recap before the knowledge check.",
    art: pool[pool.length - 1],
    captions: session.keyPoints,
    durationSeconds: readingSeconds(session.keyPoints.join(" ")),
  };

  return [intro, ...sectionScenes, recap];
}
