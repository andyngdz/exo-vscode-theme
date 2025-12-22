# Change: Reduce Background Tint

## Why
Some themes (notably Forest) have background hues that read as a noticeable colored “fog”, which reduces eye comfort and can make selections/highlights and syntax contrast feel less clean.

## What Changes
- Reduce background saturation used by `createBackgroundColors(hue, saturation)` across palettes to produce a more neutral “charcoal” base with only a subtle theme tint.
- Keep each theme’s background hue identity (hue stays theme-specific).
- Avoid global lightness changes unless necessary; preference is per-theme saturation tuning.

## Non-Goals
- Do not change syntax token rules or semantic highlighting behavior.
- Do not introduce a new background configuration system unless required.

## Impact
- Affected spec: `theme-system`
- Affected code:
  - `src/palettes/*.ts` (background generator parameters)
  - `themes/*.json` (regenerated outputs)
- Compatibility: no breaking changes; existing theme names and tokens remain.
