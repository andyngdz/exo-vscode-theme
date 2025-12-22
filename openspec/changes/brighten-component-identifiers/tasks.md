## 1. Palette & Token Analysis
- [x] 1.1 Verify which token scopes map to `palette.type` (support.class, support.type, module references, HTML attributes) and confirm shared usage across languages.
- [x] 1.2 Capture current contrast ratios (WCAG) between `palette.type` and each theme background to document baseline.

## 2. Palette Updates
- [x] 2.1 Adjust `palette.type` (and only related derived tokens if necessary) in each palette to reach ≥7:1 contrast while retaining color identity and remain visually distinct from normal text.
- [x] 2.2 Rebuild `themes/*.json` using `pnpm run build` and confirm generator outputs align with new palette values.

## 3. Validation
- [x] 3.1 Spot-check component/import readability in TSX, Python classes, and Rust modules to ensure cross-language coverage.
- [x] 3.2 Run `pnpm exec tsc -p tsconfig.json --noEmit`.
- [x] 3.3 Run `pnpm exec openspec validate brighten-component-identifiers --strict`.
- [ ] 3.4 Update screenshots (Forest + Dusk) if visual deltas are significant.
