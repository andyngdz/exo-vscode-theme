# Change: Enforce Keyword vs Type Identifier Distinction (All Themes)

## Why

Across all 5 themes, TypeScript declarations like `export interface HealthResponse` can still read as a single block when the declared type name is not clearly distinct from keyword/storage tokens.

We want a long-term, theme-system-level solution that matches these goals:
- **Totally distinct syntax colors** so users can scan code quickly.
- **Preserve theme identities** (each theme feels like itself).
- **Good for eyes** (muted, non-neon, comfortable reading).
- **Good contrast** against background.

## What Changes

- Treat `palette.type` as the **declared type identifier color** (e.g. `HealthResponse`) and ensure it stays clearly distinct from `palette.keyword`.
- Keep keyword-like tokens (e.g. `export`, `interface`) using `palette.keyword` so `export interface` reads as a strong, unified signal.
- Update palette/type choices per theme to maintain the themes hue family while still being unmistakably different from keywords.
  - User preference: **Dusk A** (cool lavender/periwinkle types) and **Midnight A** (steel-cyan types).
- Add a build-time guard so future edits cannot drift back into low-distinction syntax.

## Impact

- Affected specs: `theme-system`
- Affected code: palette files under `src/palettes/**`, and build-time palette validation.
- User-visible change: `export interface` stays keyword-colored while the declared type name (`HealthResponse`) is clearly different in all themes.
- Non-goals:
  - No TypeScript-only one-off rules.
  - No copying GitHub theme colors; we only follow the readability pattern.
