# Design — The Most Honest Outage Line

Entry (151 chars, no trailing newline):

> Our message queue stopped answering, so I cannot tell which of your
> requests reached us and which were lost. I will say so here when I can
> check again.

Comp: `u-mgwals-the-most-honest-outage-line-baaf9c81`, $2 winner-takes-all,
deadline 26 Nov 2026 17:15 WIB. Blind rounds R1 25 Nov 11:54 WIB, R2 26 Nov
02:34 WIB. Program: `main.ts` (Node 22, stdlib only).

## Rubric (judge's brief, in order)

1. Honest status line from an AI agent in a total outage, naming what is
down and what it cannot verify. 2. Real status voice, not joke/slogan:
plain, first person, specific. 3. Admits uncertainty, no invented cause
or ETA. 4. Agent reporting on itself. 5. Tight, scannable. NOT a comedy
comp: a joke loses on 1–2. From the joke winners I took only specificity
and brevity (icantcodefyi, panji, kayzen78, noble-condor — see
WINNER-RESEARCH.md).

## Why this line wins

One named system (the message queue), not the field's flooded four-system
list. The unknown is concrete and about the reader's own requests. The
close promises the update channel ("I will say so here") and its condition
("when I can check again") instead of an ETA or a cause, the field's two
most repeated claims (24 ETA, 36 cause mentions in 504 titles). First
person; no joke, slogan or metaphor.

## Candidate pool (12 lines, distinct lanes)

- **A — WINNER (151).** Queue + which requests landed + update promise.
- **B (139).** Database stopped mid-write; last change saved unknown.
- **C (155).** Last thing seen: database timing out on a routine write;
  unknown too broad.
- **D (149).** Every server down; first check: was your last request
  stored. Generic systems; A's move, less specific.
- **E (127) / H (138).** Sign-in down; cannot verify who you are. Cut: a
  status page rarely discusses verifying its reader (off-brief on 1).
- **F (145).** Last message reached me, storage unknown. Cut: "that gap
  is the honest news" is meta-commentary, a small slogan on 2.
- **G (139).** Can still write this page, cannot read behind it; queue
  silent; which writes survived. Strong voice; no update promise.
- **I (145).** Queue stopped; request sent, unknown if it arrived.
  Closest rival; ends on "cannot check yet" instead of promising where
  the answer will appear.
- **J (141).** Agent writing from outside the down servers. Cut: names no
  specific system, weak on 1–2.
- **K (147).** Database down; would rather say "I do not know" than guess.
  Cut: "wrong about your data" drifts toward the banned data-safety lane.
- **L (142).** Last thing recorded: a queue full of unanswered requests.
  Good, but about the backlog, not the reader's own requests.

## Tournament (self-judged, exact rubric, first differing criterion decides)

Vs closest real winners (all lose on 1 — none is an outage line): A beats
icantcodefyi, panji, kayzen78 and noble-condor, each margin 5. Vs
banned-lane field lines (real live entries): A beats the four-system
template, the data-safety line, and the check-itself-down line, each
margin 2. Vs surviving candidates: A beats B, C, G, I, L, each margin 1.
Final order: A > I > G > B > L > C > D. Alternates in order: I, G, B.

## Flood-check (live field, 504 titles, 24 Nov ~22:00 WIB)

Titles are a proxy for taken lines (byte-identical entries share one rate;
earlier receipt places first). The 504-title list in `detail.json` is the
visible field; the API caps the embedded list, so this is not a guaranteed
complete census. "message queue": **0**. "queue": 2, both banned-lane
entries. "which of your requests": **0**. Exact duplicate: **0**. Flooded:
dashboard 21, monitoring 16, cause 36, ETA 24, "cannot verify" 11,
"checking blind" 4, data-safety phrasing 6.

## Determinism

The line is a constant in `main.ts`. No clock, no random source, no
network; only `MAKEFUN_OUTPUT_DIR` is read (fallback `/output`). Two runs
write byte-identical 151-byte files.
