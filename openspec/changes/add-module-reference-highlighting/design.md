## Context

Exo’s theme generator uses palette-based token rules in `src/theme.ts`. There is a broad `variable` rule that improves identifier visibility, but it can make import/module references blend in with other symbols.

GitHub’s VS Code theme improves scanability by targeting module references specifically via the TextMate scope `meta.module-reference`.

## Goals / Non-Goals

- Goals:
  - Improve readability of import/module references with a dedicated rule.
  - Follow GitHub Theme’s targeting strategy (`meta.module-reference`) while using Exo palette colors.
  - Preserve token rule precedence: specific module references override generic variables.

- Non-Goals:
  - Do not change palette files.
  - Do not attempt to comprehensively cover every language’s import grammar without validated scope inspection.

## Decisions

- Color choice: `palette.type`
  - Rationale: Exo already uses `palette.type` for `support` scopes; GitHub uses a similar “support/type-ish” color family for `meta.module-reference`.
  - This keeps the behavior consistent without imposing a new semantic color.

- Scope choice: start with `meta.module-reference`
  - Rationale: proven in GitHub Theme; low-risk, precise.
  - Follow-up: expand to additional scopes after capturing real scope stacks via VS Code token inspection.

- Rule placement: after `Variables` token rule
  - Rationale: ensures module references override generic `variable` styling.

## Risks / Trade-offs

- Some languages (notably Python) may not emit `meta.module-reference`.
  - Mitigation: keep the initial change focused; extend scope coverage once actual Python scopes are confirmed.
