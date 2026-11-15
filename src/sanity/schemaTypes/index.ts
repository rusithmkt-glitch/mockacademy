import { course } from "./course";
import { courseModule } from "./courseModule";
import { illustration } from "./illustration";
import { knowledgeCheck } from "./knowledgeCheck";
import { knowledgeCheckQuestion } from "./knowledgeCheckQuestion";
import { lessonScene } from "./lessonScene";
import { lessonSection } from "./lessonSection";
import { session } from "./session";

export const schemaTypes = [
  course,
  courseModule,
  session,
  lessonSection,
  lessonScene,
  illustration,
  knowledgeCheck,
  knowledgeCheckQuestion,
];
