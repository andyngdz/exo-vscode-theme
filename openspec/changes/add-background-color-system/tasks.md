# Tasks: Add Centralized Background Color System

## 1. Create Background Color Module

- [x] 1.1 Create `src/background.ts` with `BACKGROUND_LIGHTNESS` constant (10%)
- [x] 1.2 Add `hslToHex()` utility function
- [x] 1.3 Add `createBackgroundColors(hue, saturation)` function that returns all background-related colors
- [x] 1.4 Export types for the background colors object

## 2. Analyze Current Theme Colors

- [x] 2.1 Extract hue and saturation from each theme's current background color
- [x] 2.2 Document the values for each theme (Dusk, Dawn, Midnight, Eclipse, Forest)

Theme color analysis:
| Theme | Hue | Saturation |
|-------|-----|------------|
| Dusk | 267° | 21% |
| Dawn | 330° | 8% |
| Midnight | 220° | 23% |
| Eclipse | 20° | 9% |
| Forest | 120° | 11% |

## 3. Update Palette Files

- [x] 3.1 Update `src/palettes/dusk.ts` to use `createBackgroundColors()`
- [x] 3.2 Update `src/palettes/dawn.ts` to use `createBackgroundColors()`
- [x] 3.3 Update `src/palettes/midnight.ts` to use `createBackgroundColors()`
- [x] 3.4 Update `src/palettes/eclipse.ts` to use `createBackgroundColors()`
- [x] 3.5 Update `src/palettes/forest.ts` to use `createBackgroundColors()`

## 4. Build and Verify

- [x] 4.1 Run `pnpm run build` to generate theme files
- [x] 4.2 Verify all 5 themes generate successfully
- [x] 4.3 Visually inspect generated JSON files for reasonable color values

All themes now have consistent 10% lightness with their unique hues preserved.
