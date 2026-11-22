# THE BOREDOM MACHINE

An experimental, multi-station browser application. This repository is the clean rebuild; the previous implementation is a reference, not a codebase to copy.

## Current status

**Phase 1 — Core application framework**

The application now has a responsive shell, an eight-station registry, desktop and mobile navigation, hash-based station routes, a station directory overview, and honest not-yet-installed station screens. The stations themselves and shared product systems are scheduled for later phases.

## Technology

- React 19
- TypeScript (strict mode)
- Vite 6
- Tailwind CSS 4 through the official Vite plugin
- ESLint 9
- Browser-native hash navigation (no routing dependency)

## Requirements

- Node.js 20.19+ (Node.js 22 LTS recommended)
- npm

## Getting started

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Application structure

- `src/app` — application composition
- `src/components/layout` — shared shell, sidebar, top bar and mobile navigation
- `src/components/navigation` — reusable station navigation
- `src/components/stations` — station cards and not-yet-installed screens
- `src/config` — central station registry
- `src/hooks` — application hooks, including hash-route synchronization
- `src/pages` — top-level pages
- `src/types` — shared TypeScript contracts
- `src/utils` — route parsing and route serialization
- `src/styles` — global design tokens and responsive application styles

## Project principles

- Keep the application modular and multi-file.
- Treat the approved product GDD as the feature specification.
- Keep shared systems independent from station UI.
- Do not mark a feature complete until it works and has been checked.
- Prefer browser-native capabilities and free dependencies.
- Validate changes with lint, type checking, production builds, and focused tests as the project grows.

## Planned stations

1. Flow Studio
2. Beat Machine
3. Reflex Arcade
4. Blink
5. Life Organ
6. The Ledger
7. Machine Anomalies
8. Research Cases

See the project development roadmap for the phased implementation sequence.
