import type { ExamQuestion } from "@/lib/exam/types";

export const examTopicModules = {
  Foundations: "foundations",
  Principles: "principles",
  People: "people",
  "Business case": "business-case",
  Organising: "organising",
  Plans: "plans",
  Quality: "quality",
  Risk: "risk",
  Issues: "issues",
  Progress: "progress",
  "Starting and initiating": "starting-and-initiating",
  "Delivering and closing": "delivering-and-closing",
  Tailoring: "tailoring-and-exam-preparation",
} as const;

export type BankTopic = keyof typeof examTopicModules;

const PAIRS = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
] as const;

const optionId = (index: number) => String.fromCharCode(97 + index);

/** Deterministic generator so answer positions stay stable between builds. */
function seededRandom(seed: string) {
  let state = 0;
  for (const char of seed) state = (state * 31 + char.charCodeAt(0)) >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function createBank(prefix: string) {
  const questions: ExamQuestion[] = [];
  const random = seededRandom(prefix);
  let positions: number[] = [];

  function push(
    topic: BankTopic,
    prompt: string,
    labels: string[],
    correctIndex: number,
    explanation: string,
  ) {
    questions.push({
      id: `${prefix}-${String(questions.length + 1).padStart(3, "0")}`,
      topic,
      moduleId: examTopicModules[topic],
      prompt,
      options: labels.map((label, index) => ({ id: optionId(index), label })),
      correctOptionId: optionId(correctIndex),
      explanation,
    });
  }

  /** Single answer with three distractors; the answer position is balanced across a–d. */
  function mc(
    topic: BankTopic,
    prompt: string,
    answer: string,
    distractors: [string, string, string],
    explanation: string,
  ) {
    if (positions.length === 0) positions = shuffle([0, 1, 2, 3], random);
    const position = positions.shift()!;
    const labels = [...distractors];
    labels.splice(position, 0, answer);
    push(topic, prompt, labels, position, explanation);
  }

  /** "Which two statements…" item; statements render as a numbered list. */
  function two(
    topic: BankTopic,
    lead: string,
    statements: [string, string, string, string],
    correct: [1 | 2 | 3 | 4, 1 | 2 | 3 | 4],
    explanation: string,
  ) {
    const key = PAIRS.findIndex(
      ([a, b]) => a === Math.min(...correct) && b === Math.max(...correct),
    );
    const others = shuffle(
      PAIRS.map((_, index) => index).filter((index) => index !== key),
      random,
    ).slice(0, 3);
    const chosen = [key, ...others].sort((a, b) => a - b);
    const prompt = [lead, ...statements.map((text, i) => `${i + 1}. ${text}`)].join(
      "\n",
    );
    push(
      topic,
      prompt,
      chosen.map((index) => `${PAIRS[index][0]} and ${PAIRS[index][1]}`),
      chosen.indexOf(key),
      explanation,
    );
  }

  return { mc, two, questions };
}
