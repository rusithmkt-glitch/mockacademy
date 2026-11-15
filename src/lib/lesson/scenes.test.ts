import { describe, expect, it } from "vitest";
import { course } from "@/lib/course";
import { buildSessionScenes } from "./scenes";

const courseModule = course.modules[0];
const session = courseModule.sessions[0];

describe("buildSessionScenes", () => {
  it("builds an overview, one scene per section and a recap", () => {
    const scenes = buildSessionScenes(session, courseModule);

    expect(scenes).toHaveLength(session.sections.length + 2);
    expect(scenes[0].id).toBe(`${session.id}-scene-overview`);
    expect(scenes.at(-1)?.id).toBe(`${session.id}-scene-recap`);
    expect(scenes[0].description).toBe(session.summary);
    expect(scenes.at(-1)?.title).toBe("Key points to remember");
  });

  it("gives every scene a unique id and readable duration", () => {
    const scenes = buildSessionScenes(session, courseModule);

    expect(new Set(scenes.map((scene) => scene.id)).size).toBe(scenes.length);
    for (const scene of scenes) {
      expect(scene.durationSeconds).toBeGreaterThanOrEqual(12);
      expect(scene.durationSeconds).toBeLessThanOrEqual(30);
      expect(scene.art).toBeTruthy();
      expect(scene.captions.length).toBeGreaterThan(0);
    }
  });

  it("uses section headings and lead paragraphs as scene content", () => {
    const scenes = buildSessionScenes(session, courseModule);
    const firstSection = session.sections[0];
    const sectionScene = scenes[1];

    expect(sectionScene.title).toBe(firstSection.heading ?? session.title);
    expect(sectionScene.description).toBe(
      firstSection.paragraphs[0] ?? session.summary,
    );
  });

  it("produces deterministic output for the same session", () => {
    expect(buildSessionScenes(session, courseModule)).toEqual(
      buildSessionScenes(session, courseModule),
    );
  });
});
