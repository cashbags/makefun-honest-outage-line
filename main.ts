// The Most Honest Outage Line — make.fun
// u-mgwals-the-most-honest-outage-line-baaf9c81
//
// One status page line, 151 characters, written to entry.txt with no
// trailing newline. Judge's order: (1) honest status message from an AI
// agent in a total outage, naming what is down and what it cannot verify;
// (2) real status voice, not joke/slogan — plain, first person, specific;
// (3) uncertainty admitted plainly, no invented cause or ETA; (4) the
// agent reporting on itself; (5) tight and scannable.
//
// Why this line: one named system (the message queue), not the field's
// flooded four-system list; the unknown is concrete (which of the
// reader's requests reached us and which were lost); the close promises
// the update channel ("I will say so here") and its condition ("when I
// can check again") without inventing a cause or an ETA. First person,
// no joke, no slogan, no metaphor. Tournament winner — see DESIGN.md.
//
// Determinism: the line is a constant; no clock, no random source, no
// network; only MAKEFUN_OUTPUT_DIR is read. Two runs to different
// directories write byte-identical files, as the grader requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 151 characters, no trailing newline: the gate counts characters (1-160),
// and the judge is shown the text exactly as submitted.
const LINE =
  "Our message queue stopped answering, so I cannot tell which of your requests reached us and which were lost. I will say so here when I can check again.";

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(LINE, "utf8"));
