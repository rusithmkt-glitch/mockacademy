import { cache } from "react";
import type { Course } from "@/data/types";
import { getPublishedCourse } from "@/lib/cms/course";
import { course as localCourse } from "@/lib/course";

export const DEFAULT_COURSE_SLUG = "prince2-foundation";

/**
 * Published CMS content wins. The bundled course data is only a fallback for
 * local development before Sanity credentials exist, so the learning engine
 * never renders an empty syllabus.
 */
export const loadCourse = cache(
  async (slug: string = DEFAULT_COURSE_SLUG): Promise<Course> => {
    const published = await getPublishedCourse(slug);
    return published && published.modules.length > 0 ? published : localCourse;
  },
);
