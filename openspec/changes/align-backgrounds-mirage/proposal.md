# Change: Align Backgrounds with Mirage Neutral

## Why
Even after reducing per-theme background saturation, Forest and other themes still show subtle hue fog that hurts readability. The user prefers the Ayu Mirage neutral (`#1F2430`) and wants the Exo themes to share that neutral feel while retaining individual identities through syntax & accents.

## What Changes
- Introduce a Mirage-neutral background base (Ayu Mirage hue/lightness) blended with each theme’s hue using very low saturation.
- Update palette definitions so all themes use the shared Mirage-derived lightness/brightness but retain a subtle hue fingerprint (Option B).
- Keep syntax palettes untouched; only the `createBackgroundColors()` inputs change.

## Non-Goals
- No changes to syntax colors or token scopes beyond the background adjustments already made.
- No new configuration UI or runtime settings; this remains a build-time palette tweak.

## Impact
- Affected spec: `theme-system`
- Affected code: `src/background.ts` (if helper added), `src/palettes/*.ts`, regenerated `themes/*.json`
- Compatibility: Visual change only; theme names/assets stay the same.
