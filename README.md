# League List — Frontend Assignment

## Overview
This project is a small React application that displays a list of sports leagues using the **TheSportsDB API**.  
Users can search leagues by name, filter them by sport, and view a season badge for a selected league.

The solution focuses on clean architecture, client-side filtering, and efficient data fetching with caching.

---

## Features

- Fetch and display all leagues from TheSportsDB API
- Search leagues by name (case-insensitive)
- Filter leagues by sport using a dropdown
- Display league details:
  - League name
  - Sport
  - Alternate name
- Click a league to load and display a season badge
- Cached API responses to avoid repeated network calls
- Loading, empty, and error states
- Debounced search input for better performance

---

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **TanStack React Query** (data fetching & caching)
- **Tailwind CSS** (styling)

---

## Getting Started

### Prerequisites
- Node.js (>= 18)

### Installation
```bash
npm install
```

### Run locally
```bash
npm run dev
```

```bash
The app will be available at http://localhost:5173.
```

## Design Decisions

### Architecture
- A **feature-based structure** was chosen to keep all league-related logic (API, hooks, model, UI) colocated and easy to reason about.
- Shared UI components and hooks are placed in a `shared` layer to avoid duplication and keep feature code focused.

### Data Fetching & Caching
- **TanStack React Query** is used to handle server state.
- Each request is cached using semantic query keys:
  - `["leagues"]` for the league list
  - `["league-badge", idLeague]` for season badges
- This ensures repeated selections reuse cached data and avoid unnecessary network calls.
- `staleTime` is explicitly configured for badge data, as it is relatively static.

### Client-Side Filtering
- Search and sport filtering are performed entirely on the client side, as required.
- Filtering logic is implemented via pure selector functions to keep components declarative and easy to test.

### Performance Considerations
- Search input is **debounced** to reduce unnecessary recomputation during typing.
- Derived data (filtered leagues, sport options) is memoized.
- Components that are independent from frequent state changes are memoized selectively to avoid over-optimization.

### Styling
- Tailwind CSS is used for rapid iteration and consistent styling.
- Styling choices prioritize clarity and responsiveness over visual complexity.

---


---

## AI Usage

AI-assisted tools were used in a limited and supportive capacity during development, primarily as a second opinion for reviewing architectural decisions, validating edge cases, and refining documentation.

All application logic, structure, and implementation were written and finalized manually. No code was included in the project without explicit review and approval.

---