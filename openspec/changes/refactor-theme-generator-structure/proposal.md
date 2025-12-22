# Change: Refactor Theme Generator Structure

## Why

`src/theme.ts` has grown into a single large function that mixes UI color mappings and TextMate token rules in one monolithic file. This makes it harder to:

- Make small, safe edits without accidental regressions
- Find where a given UI area or token scope is defined
- Add language coverage (e.g., import/module scopes) consistently

We want to improve maintainability and readability *without changing user-visible colors*.

## What Changes

- Reorganize `src/theme.ts` into smaller, named builders for UI colors and token rules.
- Introduce shared scope constants for commonly reused scope groups.
- Keep generated theme output identical (or intentionally equivalent) to current behavior.

## Impact

- Affected specs: `theme-system`
- Affected code: `src/theme.ts` (internal structure only)
- Behavioral impact: None intended (refactor-only)
- Risk: Medium—token rule ordering and merges must remain unchanged
