# Tasks: Reduce Background Tint

## 1. Proposal
- [x] Confirm goals: more neutral backgrounds, preserve identity
- [x] Choose per-theme saturation targets and rationale

## 2. Implementation
- [x] Adjust Forest background saturation to reduce green tint
- [x] Review other themes; reduce saturation only where needed
- [x] Regenerate `themes/*.json` via build script

## 3. Validation
- [x] Run `pnpm run build`
- [x] Run `pnpm exec tsc -p tsconfig.json --noEmit`
- [x] Run `pnpm exec openspec validate reduce-background-tint --strict`

## 4. Manual Review
- [x] Verify selection/highlight clarity in each theme
- [x] Capture before/after background hex values

## Notes
- Saturation reductions were applied per-theme (no global lightness change).
- Background hexes changed for all themes after regeneration; see PR summary / validation output.
