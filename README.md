# quang-portfolio

Portfolio of Nguyen Duy Quang, built with Astro as a static site and deployed to GitHub Pages.

Live: https://duyquangnguyen.com/

Text in `[square brackets]` is placeholder copy. Replace it with real content.

## Run locally

Needs Node 18.20+ (20 or 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:4321/.

Other commands:

- `npm run build` builds the static site into `dist/`.
- `npm run preview` serves `dist/` locally.

If you add a new file to `src/pages/`, restart `npm run dev`.

## Add a project

1. Create `src/content/projects/<slug>.md`. The slug becomes the URL `/work/<slug>/`.
2. Add frontmatter:

```yaml
---
prj: "PRJ-07"
title: "Project title"
date: "2026"              # shown as written, e.g. "2022 to 2024"
sort: 2026.01             # sort key, newest first; active work uses 9999
active: false             # true shows the live status light
result: "One-line result with a number"
chips: ["Discipline", "Tag"]
# Optional:
# kicker: "Discipline · 2026"
# tools: ["SolidWorks", "Arduino"]
# part: "What you owned"
# facts:
#   - { k: "Team", v: "4 people" }
---
```

Projects are not ranked. The Work list and the previous/next links follow `sort`, newest first. Nothing is featured.

The case-study sections (Problem, Constraints, Decisions, Build, What broke, Result, What I'd change) live in `src/pages/work/[slug].astro`.

## Add an archive item

1. Create `src/content/archive/NN-<name>.md`. Items show in file-name order, so the number prefix sets the position.
2. Add frontmatter:

```yaml
---
type: film                # research | paper | film | book | music | note
date: "2026"
title: "Title"
note: "Why it is here: one or two sentences"
source: "Source or credit"
# Optional:
# thumb: "/images/thumb.jpg"   # file in public/
# entry: my-entry              # links the card to /archive/my-entry/
---
```

The filter tabs on `/archive/` use `type`, so no other change is needed.

### Long-form archive entries

To add one, create `src/content/entries/<slug>.mdx`, using `sample-entry.mdx` as the template. Give each `<Chapter>` in the body a matching row in the `chapters` frontmatter list, in the same order. That list builds the Contents table.

## Deploy

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

One-time setup: in the repo, set **Settings > Pages > Source** to **GitHub Actions**.

To deploy:

```bash
git push origin main
```

You can follow the run in the repo's Actions tab. The site is at https://duyquangnguyen.com/.

The custom domain is set in `public/CNAME`, in `site` in `astro.config.mjs`, and under **Settings > Pages > Custom domain**. The site serves from the root, so there is no `base`.

## Notes

- The light/dark toggle is the only client-side script. It stores the choice in `localStorage` under `ndq-theme`.
- Filters, scroll-spy and hover linking are pure CSS (`:has()`, radio inputs).
- `prefers-reduced-motion: reduce` turns off all animation and transitions.
