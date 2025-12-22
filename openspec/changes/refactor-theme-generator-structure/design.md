## Context

The theme generator currently defines:

- A large `colors` object mapping VS Code UI color keys.
- A large `tokenColors` array defining TextMate token coloring.

Both are authored inline in `createTheme()` in `src/theme.ts`.

## Goals / Non-Goals

- Goals:
  - Improve maintainability of `src/theme.ts` via modular structure.
  - Make it safer to add and adjust token scopes (e.g., imports/modules).
  - Preserve output behavior and token precedence.

- Non-Goals:
  - Changing palette values.
  - Changing any UI or syntax colors.
  - Introducing new theme capabilities or new themes.

## Decisions

- Decision: Use small pure builder functions that return partial objects/arrays.
  - Rationale: Keeps changes local and makes diffs easier to review.
  - Constraint: Must preserve merge order (for `colors`) and array order (for `tokenColors`).

- Decision: Extract shared scope groups into constants.
  - Rationale: Reduces repetition and makes scope intent clearer.

## Risks / Trade-offs

- Token scope ordering is behavior. Refactoring must keep the same order to avoid changing which rules win.
- UI color objects are merged; later keys override earlier ones. Builders must be composed in a fixed order.

## Migration Plan

- Refactor `colors` first (pure object merges).
- Refactor `tokenColors` next (preserve array order).
- Run build and verify generated themes match.

## Open Questions

- None.
