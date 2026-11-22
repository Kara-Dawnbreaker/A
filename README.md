# THE BOREDOM MACHINE

An experimental, multi-station browser application. This repository is the clean rebuild; the previous implementation is a reference, not a codebase to copy.

## Current status

**Phase 0 — Repository foundation**

The current build contains only the development foundation and a minimal application shell. The eight stations and shared product systems are not implemented yet.

## Technology

- React 19
- TypeScript (strict mode)
- Vite 6
- Tailwind CSS 4 through the official Vite plugin
- ESLint 9

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
