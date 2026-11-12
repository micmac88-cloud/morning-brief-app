# Status

_Last updated: 12 Nov 2026 by Claude Code_

Handover file: the state of work in this repo right now. Whoever works here updates it at the end of every turn in which anything changed. This repo has no README.md or PROJECT-BRIEF.md; it holds only the published output of a separate source repo, so this file is the only description here.

## Now
- Updated daily by ~/morning-brief/build/morning.sh; agents normally don't edit this repo by hand.
- The run calls build/publish.sh in the source repo, which copies in index.html, manifest.webmanifest, sw.js and icons/, writes robots.txt and .nojekyll, then commits everything as "Update <date>" and pushes.
- brief.enc.json is the day's data, encrypted before it reaches this repo; nothing here is stored as plain text.
- Any hand edit to a tracked file is overwritten or swept into the next daily commit, because publish.sh runs `git add -A`.
- Working tree clean.

## Next
- Nothing planned here. Changes to the app are made in the source repo (build/shell.html) and arrive with the next daily update.

## Decisions
- 9 Oct 2026: only the app shell, the icons and the encrypted data file are published to this repo (build/publish.sh in the source repo).
- 9 Oct 2026: robots.txt asks all crawlers to stay away.
- Waiting on Michelle: nothing recorded.

## Recently done
- 9 Oct to 12 Nov: daily automated "Update <date>" commits, about 40 in all; there is none for the runs labelled 30 Oct, 31 Oct and 5 Nov.
- 9 Oct: first commit ("Init").
