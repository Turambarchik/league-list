# League List

## 🚀 What is this?
A React + TypeScript web app that lists sports leagues from TheSportsDB and lets users search/filter them.
It also shows a season badge for the selected league.

## 🎯 Problem it solves
TheSportsDB returns a large raw league list that is hard to browse directly.
This project provides a simple UI to quickly find leagues by name or sport and inspect badge data for a chosen league.

## ✨ Key Features
- Fetches and displays all leagues from TheSportsDB (`all_leagues.php`).
- Client-side league filtering by search text and sport category.
- Debounced search input to reduce unnecessary filter recalculations while typing.
- League selection panel that loads season badge data on demand.
- Query-based caching for league list and badge requests to avoid repeated network calls.
- Built-in loading, empty, and error UI states.

## 🛠 Tech Stack
- React 18
- TypeScript
- Vite
- TanStack React Query
- Tailwind CSS

## ⚡ Quick Start
```bash
npm install
npm run dev
```

## 📦 Scripts
- `npm run dev` — start local dev server.
- `npm run build` — type-check and create production build.
- `npm run lint` — run ESLint.
- `npm run preview` — preview the production build locally.

## 📌 Notes
- Uses the public TheSportsDB endpoint configured in `src/features/leagues/api/leaguesApi.ts`.
- No environment variables are required for local development.
- Filtering is intentionally client-side (not server-side).
