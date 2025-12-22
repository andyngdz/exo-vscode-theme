## 1. Proposal Validation
- [x] 1.1 Validate proposal with `openspec validate add-module-reference-highlighting --strict`

## 2. Scope Discovery (Non-Code)
- [x] 2.1 Use VS Code `Developer: Inspect Editor Tokens and Scopes` on JS/TS imports to confirm module-related scopes (e.g. `meta.module-reference`, `meta.import … variable.other.readwrite.alias`)
- [ ] 2.2 (Optional) Inspect Python imports and record module path scopes for follow-up expansion

## 3. Implementation
- [x] 3.1 Add `MODULE_REFERENCE_SCOPES` constant containing `meta.module-reference`
- [x] 3.2 Add a new token rule (e.g. `Module References`) using `palette.type`
- [x] 3.3 Place the rule after the generic `Variables` rule so it overrides `variable` where applicable

## 4. Validation
- [x] 4.1 Run `pnpm run build` to regenerate `themes/*.json`
- [x] 4.2 Confirm generated diffs match expected scope change only
- [x] 4.3 Spot-check in VS Code: JS/TS import module references are highlighted distinctly
