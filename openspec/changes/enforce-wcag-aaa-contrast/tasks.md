# Tasks: Enforce WCAG AAA Contrast Standards

## 1. Calculate Required Color Values

- [x] 1.1 Calculate minimum lightness for foregroundDim to achieve 7:1 contrast against each theme's background
- [x] 1.2 Calculate minimum lightness for comment colors to achieve 7:1 contrast

## 2. Update Palette Files

- [x] 2.1 Update `src/palettes/dusk.ts` - brighten foregroundDim to `#a8a0b0` (7.16:1)
- [x] 2.2 Update `src/palettes/dawn.ts` - brighten foregroundDim to `#b0a8a0` (7.54:1)
- [x] 2.3 Update `src/palettes/midnight.ts` - brighten foregroundDim to `#a0a8b8` (7.44:1)
- [x] 2.4 Update `src/palettes/eclipse.ts` - brighten foregroundDim to `#b0a8a0` (7.45:1)
- [x] 2.5 Update `src/palettes/forest.ts` - brighten foregroundDim to `#a0a898` (7.03:1)

## 3. Update Comment Colors

- [x] 3.1 Override comment colors in each palette (instead of using scale):
  - Dusk: `#a8a2b0` (7.28:1)
  - Dawn: `#aca5a5` (7.31:1)
  - Midnight: `#a2a8b5` (7.46:1)
  - Eclipse: `#ada6a0` (7.27:1)
  - Forest: `#a0ab9a` (7.23:1)

## 4. Verify and Build

- [x] 4.1 Run contrast analysis script to verify all colors meet WCAG AAA (7:1+)
- [x] 4.2 Run `pnpm run build` to generate themes
- [x] 4.3 Visual inspection of generated themes

## Final Results

All themes now meet WCAG AAA (7:1+ contrast ratio):

| Theme | foreground | foregroundDim | comment |
|-------|------------|---------------|---------|
| Dusk | 12.55:1 ✓ | 7.16:1 ✓ | 7.28:1 ✓ |
| Dawn | 10.70:1 ✓ | 7.54:1 ✓ | 7.31:1 ✓ |
| Midnight | 10.58:1 ✓ | 7.44:1 ✓ | 7.46:1 ✓ |
| Eclipse | 10.58:1 ✓ | 7.45:1 ✓ | 7.27:1 ✓ |
| Forest | 10.89:1 ✓ | 7.03:1 ✓ | 7.23:1 ✓ |
