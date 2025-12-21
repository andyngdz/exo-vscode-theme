# Change: Add Centralized Background Color System

## Why

Currently, background colors (background, surface, border, etc.) are hardcoded in each palette file. This makes it difficult to:
1. Ensure consistent readability across all themes
2. Adjust background lightness globally when needed
3. Apply readability science (optimal contrast ratios) uniformly

Based on accessibility research, optimal background lightness for code readability is ~10% (HSL lightness), providing:
- WCAG AAA contrast ratio (~7-9:1) with typical foreground text
- Reduced eye strain for long coding sessions
- Sufficient "room" for syntax colors to stand out without being harsh

## What Changes

- Add new `src/background.ts` module with:
  - `BACKGROUND_LIGHTNESS` constant (10%) - single point of control
  - `createBackgroundColors()` function that generates all background-related colors from a hue and saturation
  - HSL to Hex conversion utilities
- Update all 5 palette files to use `createBackgroundColors()` instead of hardcoded hex values
- Each theme preserves its unique hue (purple for Dusk, blue for Midnight, etc.) but uses consistent lightness

## Impact

- Affected specs: `theme-system`
- Affected code:
  - New: `src/background.ts`
  - Modified: `src/palettes/dusk.ts`, `src/palettes/dawn.ts`, `src/palettes/midnight.ts`, `src/palettes/eclipse.ts`, `src/palettes/forest.ts`
