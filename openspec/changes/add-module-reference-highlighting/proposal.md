# Change: Add Module Reference Highlighting

## Why

Module/package references in import statements are currently difficult to visually distinguish from general identifiers, especially when scanning code quickly.

Our research shows the GitHub VS Code Theme improves this by explicitly styling module references via the TextMate scope `meta.module-reference`. We want to adopt the same approach (structure/targeting) while preserving Exo’s unique palette-based colors.

## What Changes

- Add a dedicated TextMate token color rule for module references.
- Target `meta.module-reference` (GitHub Theme’s key scope for module references) and apply Exo’s palette color (no hardcoded hex).
- Ensure rule ordering so the module reference rule overrides the generic `variable` rule when both match.
- Regenerate `themes/*.json` via the existing build pipeline.

## Impact

- Affected specs: `theme-system`
- Affected code: `src/theme.ts` (tokenColors), `themes/*.json` (generated output)
- User-visible change: module references (e.g. import paths) become more visually distinct.
- Non-goals:
  - No palette changes.
  - No broad recoloring of all variables.
  - No attempt to fully normalize import scopes across all languages without first validating real scopes in VS Code.
