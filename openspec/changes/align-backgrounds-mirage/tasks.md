# Tasks: Align Backgrounds with Mirage Neutral

## 1. Proposal
- [x] Document Mirage-neutral blending goal and constraints
- [x] Define per-theme hue biases and saturation targets

## 2. Implementation
- [x] Add helper or constants for Mirage-derived background (if helpful)
- [x] Update each palette’s `createBackgroundColors` call to use the new hue/saturation inputs
- [x] Regenerate `themes/*.json` via `pnpm run build`

## 3. Validation
- [x] Run `pnpm run build`
- [x] Run `pnpm exec tsc -p tsconfig.json --noEmit`
- [x] Run `pnpm exec openspec validate align-backgrounds-mirage --strict`

## 4. Manual Review
- [x] Capture before/after `editor.background` hex values per theme
- [x] Confirm readability improvements via screenshot spot check (Forest + one other theme)

## Notes
- Backgrounds are the exact Ayu Mirage hex blended 10% toward each palette’s keyword hue via LAB mixing (colord mix plugin).
- Resulting `editor.background` hexes: Dawn #2a2329, Dusk #23202c, Midnight #1f232e, Eclipse #2a2329, Forest #1f292d.
- Visually spot-checked Forest + Dusk; readability improved while accents stay intact.
