// Everyday Wonder entry: one sentence, 101 characters (inside the 200 cap).
// No trailing newline: the file holds exactly the sentence, nothing else.
// The angle: a tiny autocorrect turns the phone from a tool into something
// that knows my mother by her pet name — the machine out-knows me.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "My phone autocorrects my mother’s name to “Mum”, and suddenly the machine knows her better than I do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
