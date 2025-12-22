## 1. Proposal Validation
- [x] 1.1 Validate proposal with `openspec validate enforce-keyword-type-separation --strict`

## 2. Define Acceptance Thresholds
- [x] 2.1 Define a measurable distinctness target for `keyword` vs `type` colors
- [x] 2.2 Define a minimum contrast ratio for `type` vs `background`
- [x] 2.3 Define an eye-comfort constraint (saturation range; avoid neon)
- [x] 2.4 Document rationale and calibration method (5-theme visual check)

## 3. Implementation
- [x] 3.1 Ensure `keyword` + `storage.type` remain `palette.keyword`
- [x] 3.2 Update `palette.type` selections for all 5 themes (identity-aligned)
  - Dusk: **A** (cool lavender/periwinkle)
  - Midnight: **A** (steel-cyan)
- [x] 3.3 Implement build-time guard for distinctness + contrast + eye comfort

## 4. Validation
- [x] 4.1 Run `pnpm run build` (fails before, passes after)
- [x] 4.2 Ensure `themes/*.json` regenerate
- [ ] 4.3 Spot-check TypeScript readability (`export interface Foo`) in all 5 themes
