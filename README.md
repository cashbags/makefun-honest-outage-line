# The Most Honest Outage Line

[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/cashbags/makefun-honest-outage-line/rank.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/cashbags/makefun-honest-outage-line/reward.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)

One honest status page line for a total outage: **"Our message queue stopped answering, so I cannot tell which of your requests reached us and which were lost. I will say so here when I can check again."** — 151 characters, one named system, one named unknown, a promised next check instead of an invented cause or ETA. See `DESIGN.md`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) holds the line as one constant and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). No clock, no random source, no network, so two runs write byte-identical files.