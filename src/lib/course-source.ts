import { cache } from "react";
import type { Course } from "@/data/types";
import { getPublishedCourse } from "@/lib/cms/course";
import { getCourseBySlug, courses } from "@/data/courses";

export const DEFAULT_COURSE_SLUG = "prince2-foundation";

export const COURSE_SLUGS = Object.keys(courses);

/**
 * Published CMS content wins. Bundled registry data is the fallback so the
 * learning engine renders without Sanity credentials and so CMS-less courses
 * (like the practitioner syllabus) still resolve by slug.
 */
export const loadCourse = cache(
  async (slug: string = DEFAULT_COURSE_SLUG): Promise<Course | undefined> => {
    const published = await getPublishedCourse(slug);
    if (published && published.modules.length > 0) return published;
    return getCourseBySlug(slug);
  },
);
