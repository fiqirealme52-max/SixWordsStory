// Six Words, One Story — a complete story in exactly six words.
// The program writes the story to /output/entry.txt.
//
// The story: a love triangle in two beats. She kept another man's
// letters and burned the narrator's — the whole affair, the hope, and
// the rejection live in the gap between the two sentences. The gate
// below enforces the form: exactly six words, 1-60 characters.
import { writeFileSync, mkdirSync } from "node:fs";

const STORY = "She kept his letters. Burned mine.";

function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

if (wordCount(STORY) !== 6) {
  throw new Error("story must be exactly six words");
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error("story must be 1-60 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
