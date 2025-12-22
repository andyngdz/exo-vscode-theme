## Context

Exo’s theme generator maps `keyword` and `storage.type` scopes to `palette.keyword`, and broad type/entity scopes (e.g. `entity.name`, `support.class`) to `palette.type`.

In TypeScript declarations like `export interface HealthResponse`:
- `export interface` should read as a strong, unified keyword/storage signal.
- The declared type identifier (`HealthResponse`) must be immediately distinct.

Simply maximizing keyword↔type color distance can create out-of-family or harsh colors. We need “distinct but cohesive”.

## Goals / Non-Goals

- Goals:
  - **Totally distinct** keyword/storage vs declared type identifier colors for fast scanning.
  - Preserve each theme’s identity and hue family.
  - Keep syntax colors **eye-friendly** (muted; avoid neon spikes).
  - Ensure **good contrast** against background.
  - Prevent regressions as palettes evolve.

- Non-Goals:
  - Do not add TypeScript-only one-off rules.
  - Do not copy GitHub’s exact hex colors; only follow the readability pattern.
  - Do not introduce a complex theming configuration layer.

## Decisions

- Keep `keyword` + `storage.type` in the keyword family.
  - This preserves the intended reading of `export interface`.

- Make `palette.type` an identity-aligned secondary accent per theme.
  - User preference:
    - Dusk A: cool lavender/periwinkle types.
    - Midnight A: steel-cyan types.

- Enforce quality through build-time validation.
  - Validate **distinctness** between `palette.keyword` and `palette.type`.
  - Validate **contrast** (type vs background).
  - Validate **eye comfort** (avoid very high saturation).

## Validation Strategy

Implement deterministic checks during `pnpm run build` for every palette:
- **Distinctness** (`keyword` vs `type`): RGB distance >= `60`.
- **Contrast** (`type` vs `background`): WCAG contrast ratio >= `4.5`.
- **Eye comfort** (type saturation): HSL saturation <= `0.6`.

Calibrate thresholds by checking readability in all 5 themes on the same TypeScript sample (`export interface Foo`).

## Risks / Trade-offs

- Stronger distinction can reduce subtle cohesiveness.
  - Mitigation: pick `palette.type` from an existing, identity-aligned scale and enforce saturation limits.
