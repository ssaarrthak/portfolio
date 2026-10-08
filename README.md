# Saarthak Singh — Portfolio Website

Personal portfolio website for **Saarthak Singh** — BCA scholar (GGSIPU / KCC ILHE), software QA specialist, and video editor.

- **Live site:** https://ssaarrthak.github.io/portfolio/
- **Repository:** https://github.com/ssaarrthak/portfolio
- **Built with:** Vite + React 18 + TypeScript + Tailwind CSS v3

This README documents the full project, including a clear division of what was **built by AI (opencode)** and what was **handled by Saarthak**. A copy of this file is stored locally at `C:\Users\Lenovo\Downloads\PORTFOLIO-README.md` and in the repository root.

---

## Tech Stack & Why

| Technology | Why it was chosen |
|------------|-------------------|
| Tailwind CSS v3 | The original design was already authored in Tailwind utility classes with a custom config — porting that config 1:1 guarantees pixel-perfect fidelity. v3 (not v4) because the existing config is JS-object format, which is exactly v3's syntax |
| React 18 | The design repeats ~18 identical card patterns (metrics, certs, skills, timeline roles) — each became one data-driven component. Also the most in-demand frontend skill |
| TypeScript | Type-safe data models; catches bugs before the browser does — fitting for a QA-themed portfolio |
| Vite | Instant dev server with hot-reload, zero config, free & open source; builds static files deployable on any host |
| GitHub Actions + Pages | Free CI/CD — every push to `main` redeploys the site automatically |

## Project Structure

```
portfolio/  (repo root)
├── index.html                  fonts (Syne, Plus Jakarta Sans, JetBrains Mono) + Material Symbols
├── tailwind.config.js          design tokens ported 1:1 from the original design
├── postcss.config.js           Tailwind + Autoprefixer pipeline
├── vite.config.ts              base: "./" for GitHub Pages subpath hosting
├── .github/workflows/deploy.yml  CI/CD: build + deploy to GitHub Pages on push to main
├── public/
│   ├── IMG_0212.png            header avatar photo (provided by Saarthak)
│   └── IMG_0245.png            hero portrait photo (provided by Saarthak)
└── src/
    ├── main.tsx                React entry point
    ├── App.tsx                 page assembly
    ├── index.css               base styles + scroll-reveal animation
    ├── data/profile.ts         ALL site content as typed data — edit here to update the site
    └── components/
        ├── Header.tsx          fixed nav bar with scroll-spy + mobile menu
        ├── ContextBar.tsx      top notification/context bar
        ├── Hero.tsx            editorial split monograph with portrait card
        ├── MetricsBar.tsx      4 key metric cards
        ├── DualFocus.tsx       QA vs Video Editing comparison
        ├── Experience.tsx      work experience timeline (4 roles)
        ├── Skills.tsx          skills matrix (4 bento pillars)
        ├── Certifications.tsx  certifications grid (6 cards)
        ├── ContactBanner.tsx   dark contact card with copy-email button
        ├── Footer.tsx          3-column footer
        └── Reveal.tsx          IntersectionObserver scroll-reveal wrapper
```

---

## Division of Work

### Built by AI (opencode)

**Design & architecture**
- Analyzed the original `index.html` design and extracted the complete custom Tailwind config (Material Design 3 color tokens, spacing scale, font families Syne / Plus Jakarta Sans / JetBrains Mono, all font-size tokens with line-heights and letter-spacing)
- Chose the technology bundle (Vite + React + TypeScript + Tailwind v3) with learning-focused reasoning, and explained why alternatives (Next.js, Astro, plain HTML/JS) were rejected

**Build**
- Scaffolded the project (`portfolio/`): package.json, tsconfig.json, vite.config.ts, PostCSS setup
- Ported the Tailwind config 1:1 into `tailwind.config.js` — pixel-perfect design fidelity
- Built the typed data layer `src/data/profile.ts` and stripped AI-export Angular artifacts (`source-footnote`, `ng-version`, `data-path-to-node`, empty comment nodes) from the original markup
- Integrated the photos: `IMG_0212.png` (header avatar), `IMG_0245.png` (hero portrait)
- Built all UI components: Header, ContextBar, Hero, MetricsBar, DualFocus, Experience, Skills, Certifications, ContactBanner, Footer, Reveal

**Interactivity (without changing the design)**
- Scroll-reveal animations via native `IntersectionObserver` (zero dependencies)
- Scroll-spy navigation highlighting (one `useEffect` tracking scroll position)
- Smooth anchor scrolling + fixed-header anchor offset (`scroll-margin-top`)
- Copy-email button with "Copied!" feedback

**Responsive adaptations** (all using the design's own tokens)
- Mobile hamburger menu (the original hid nav links entirely on phones)
- Mobile headline tokens (`display-hero-mobile`, `headline-xl-mobile`) to prevent overflow on small screens

**Verification**
- TypeScript typecheck + production build (CSS ~25 kB / JS ~54 kB gzip)
- Dev-server smoke test (HTTP 200)
- Verified design tokens, fonts, photos, and content in the built output

**Deployment**
- Installed GitHub CLI (winget) and authenticated as `ssaarrthak` via device flow
- Created the public repo `ssaarrthak/portfolio`, first commit, and push
- Created the GitHub Actions deploy workflow (`.github/workflows/deploy.yml`) and enabled Pages with `build_type=workflow` *before* the first push (avoiding a failed run)
- Fixed the `workflow`-scope push rejection via `gh auth refresh -s workflow`
- Verified the live deployment (HTTP 200, bundles + photos loading)

**Changes & PRs**
- Direct-to-main changes (before the PR rule existed): updated the LinkedIn link and GitHub profile link — both deployed and verified live
- **PR #1** (`ui/remove-avatar-center-nav`, 2 commits): removed the navbar avatar, centered the nav links (3-column grid), removed the "Verified Dual Competence" badge, removed the availability pill, reshaped the "Get in Touch" button (`rounded-lg` + one-line text) — **reviewed and merged by Saarthak** (live site auto-redeployed on merge)

**Debugging along the way**
- Expired device-flow codes (ran login in the foreground with a time window so it stays alive)
- Background process reaping between shell calls (switched strategies)
- CSS cascade conflicts between the reveal transition and Tailwind utilities (switched to a keyframe-based animation so hover transforms keep working)
- `workflow` scope missing from the OAuth token (standard `gh auth refresh -s workflow` fix)

**New account onboarding**
- Verified the new account `kyou29696-source` exists, sent the collaborator invite to it via the API (`PUT /collaborators/{username}`)
- Authenticated it via device flow **with the `workflow` scope in a single round** (`gh auth login -s workflow`)
- Switched the active account (`gh auth switch`), re-wired git credentials (`gh auth setup-git`), set repo-local commit identity

### Handled by Saarthak

- **Provided the assets:** the original design (`index.html`) and both photos (`IMG_0212.png`, `IMG_0245.png`), including the photo mapping instructions (0212 → profile picture, 0245 → home page)
- **Made the key decisions:**
  - TypeScript over JavaScript (recommended for learning)
  - New `portfolio/` subfolder layout (original files untouched as design reference)
  - Public repository (required for free GitHub Pages)
  - Repository name `portfolio`
  - "Center nav links" alignment choice after the avatar removal
- **All interactive authorizations:** every device-flow one-time code (initial login, scope refresh, new-account login) and the collaborator invite acceptance — nothing was authorized without him
- **Created the new GitHub account** `kyou29696-source` used for all future pull requests
- **Owns all PR merges and closes** — PR #1 and every future PR stay open until he merges or closes them himself
- **Remains the repo owner** (via `ssaarrthak`) and the owner of the live site

---

## Workflow & Standing Rules

1. Every future change request is handled by AI as: **new branch from `main`** → changes → build verification → commit (identity: `kyou29696-source <kyou29696@gmail.com>`) → push → **new PR** targeting `main`
2. **AI never merges or closes PRs** — Saarthak reviews and merges/closes them himself
3. Merging a PR triggers the GitHub Actions workflow, which rebuilds and auto-deploys to the live site — no local build needed
4. The live site always reflects the `main` branch; open PRs do not affect it until merged

## Run Locally

```powershell
cd portfolio
npm install
npm run dev        # dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Updating Content

- **All site content** (name, email, links, metrics, roles, skills, certifications) lives in `src/data/profile.ts` — edit the typed data objects and the UI updates automatically
- **Design tokens** (colors, spacing, fonts, sizes) live in `tailwind.config.js`
- After editing: commit → push (or via a PR per the standing rules) → auto-deploy on merge to `main`

## Deployment & Accounts

| Account | Role |
|---------|------|
| `ssaarrthak` | Repository owner (original account). Live URL: https://ssaarrthak.github.io/portfolio/ |
| `kyou29696-source` | Collaborator with write access. Author of all future pull requests |

**Deploy pipeline** (`.github/workflows/deploy.yml`): push to `main` → checkout → Node 20 + npm cache → `npm ci` → `npm run build` → publish to GitHub Pages.
