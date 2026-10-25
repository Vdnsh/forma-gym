# Forma — weekly workout plan

A lightweight, mobile-first workout site for a six-day push/pull/lower-body rotation. The homepage lists Monday through Sunday, with Sunday off. Each training day has its own page, five exercises, a 75-minute session timeline, inline animated SVG form guides, technique cues, and per-set reps/weight logging.

Open [the live site](https://vdnsh.github.io/forma-gym/) in Safari. It is hosted free on GitHub Pages from the public [Vdnsh/forma-gym](https://github.com/Vdnsh/forma-gym) repository. The site is static HTML, CSS and JavaScript, with no build step, external images, web fonts, packages, or paid domain.

Choose any day on any date. On the homepage, expand **See exercises** or search by name to jump directly to an exercise card. Every set requires at least 12 reps before it can be marked complete. For bodyweight moves, enter 0 kg or the added weight. Records are saved in that browser's local storage by calendar date and workout page; they remain after reload but do not sync across devices.

For local preview, run `python3 -m http.server 4173` in this folder and open `http://127.0.0.1:4173/`. To update the live site after editing, commit and push to `main`; GitHub Pages deploys from the repository root.

The inline movement drawings are schematic form reminders. Read each card's technique cues and use a load you can control. The push/pull/lower rotation trains major muscle groups twice per week, consistent with [ACSM's resistance-training guidance](https://acsm.org/resistance-training-guidelines-update-2026/). The aerobic schedule can be supplemented with other moderate activity toward [WHO's weekly activity guidance](https://www.who.int/europe/news-room/fact-sheets/item/physical-activity).
