# Change: Brighten Component & Import Identifiers

## Why
Recent neutral background alignment made component names, aliased imports, and other `support.class`/`support.type` tokens lose clarity— especially in Forest and Dusk where `palette.type` sits near the new dark base (≈5.5:1 contrast). These identifiers represent React/Vue components, TSX elements, and module aliases across languages; when they dim, scanning code becomes harder and increases cognitive load.

## What Changes
- Increase the brightness/contrast of the shared palette token feeding `support.class.component`, `entity.name`, and module alias scopes (`palette.type`) for every theme.
- Ensure the new value delivers ≥7:1 contrast on the neutralized backgrounds while preserving each theme’s color identity (e.g., Dusk keeps its lavender hue, Forest keeps the cool green bias).
- Document the contrast guarantee in the Theme System spec so future palette work keeps component/import identifiers readable across languages, not just JS/TS.

## Impact
- **Specs:** `theme-system` (new contrast requirement for identifier tokens)
- **Code:** `src/palettes/{dawn,dusk,eclipse,forest,midnight}.ts`, regenerated `themes/*.json`
- **Validation:** Need side-by-side contrast checks plus manual TSX/JSX, Python class, and Rust module alias inspection after palette updates.

## Non-Goals
- No new theme variants or non-dark backgrounds.
- No changes to other syntax buckets (keywords, comments, etc.) unless needed to maintain hierarchy.
