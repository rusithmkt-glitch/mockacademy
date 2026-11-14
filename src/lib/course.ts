import { prince2Foundation } from "@/data/prince2-foundation";
import type { Course, CourseModule, Session, SyllabusCourse } from "@/data/types";

export const course = prince2Foundation;

export interface SessionRef {
  module: CourseModule;
  session: Session;
}

export function getAllSessions(source: Course = course): Session[] {
  return source.modules.flatMap((module) => module.sessions);
}

export function getAllSessionRefs(source: Course = course): SessionRef[] {
  return source.modules.flatMap((module) =>
    module.sessions.map((session) => ({ module, session })),
  );
}

export function getModuleSessionCount(module: CourseModule): number {
  return module.sessions.length;
}

export function getModuleDuration(module: CourseModule): number {
  return module.sessions.reduce((total, session) => total + session.durationMinutes, 0);
}

export function getCourseStats(source: Course = course) {
  const sessions = getAllSessions(source);
  return {
    moduleCount: source.modules.length,
    sessionCount: sessions.length,
    durationMinutes: sessions.reduce((total, session) => total + session.durationMinutes, 0),
  };
}

export function getModuleBySlug(slug: string): CourseModule | undefined {
  return course.modules.find((module) => module.slug === slug);
}

export function getSession(moduleSlug: string, sessionSlug: string): SessionRef | undefined {
  const courseModule = getModuleBySlug(moduleSlug);
  if (!courseModule) return undefined;
  const session = courseModule.sessions.find((item) => item.slug === sessionSlug);
  return session ? { module: courseModule, session } : undefined;
}

export function getSessionById(sessionId: string): SessionRef | undefined {
  return getAllSessionRefs().find((ref) => ref.session.id === sessionId);
}

export function getSessionNumber(sessionId: string): number {
  return getAllSessions().findIndex((session) => session.id === sessionId) + 1;
}

export function getAdjacentSessions(moduleSlug: string, sessionSlug: string) {
  const refs = getAllSessionRefs();
  const index = refs.findIndex(
    (ref) => ref.module.slug === moduleSlug && ref.session.slug === sessionSlug,
  );

  return {
    previous: index > 0 ? refs[index - 1] : null,
    next: index >= 0 && index < refs.length - 1 ? refs[index + 1] : null,
    index,
    total: refs.length,
  };
}

export function getResumeSession(completedIds: string[]): SessionRef {
  const refs = getAllSessionRefs();
  return (
    refs.find((ref) => !completedIds.includes(ref.session.id)) ??
    refs[0]
  );
}

export function getCompletedCount(completedIds: string[]): number {
  const ids = new Set(completedIds);
  return getAllSessions().filter((session) => ids.has(session.id)).length;
}

export function getProgressPercent(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function getModuleCompletedCount(
  module: CourseModule,
  completedIds: string[],
): number {
  const ids = new Set(completedIds);
  return module.sessions.filter((session) => ids.has(session.id)).length;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return remainder === 0 ? `${hours} hr` : `${hours}h ${remainder}m`;
}

export function toSyllabusCourse(source: Course = course): SyllabusCourse {
  return {
    slug: source.slug,
    title: source.title,
    modules: source.modules.map((module) => ({
      id: module.id,
      slug: module.slug,
      order: module.order,
      title: module.title,
      sessions: module.sessions.map((session) => ({
        id: session.id,
        slug: session.slug,
        title: session.title,
        durationMinutes: session.durationMinutes,
      })),
    })),
  };
}
