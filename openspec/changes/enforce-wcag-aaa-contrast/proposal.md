# Change: Enforce WCAG AAA Contrast Standards

## Why

User feedback indicates that some text colors are hard to read against theme backgrounds. Current analysis shows:

**Critical Issues (Below WCAG AA 4.5:1):**
- Dawn `foregroundDim`: 4.07:1 ✗
- Midnight `foregroundDim`: 3.17:1 ✗
- Eclipse `foregroundDim`: 3.19:1 ✗
- Forest `foregroundDim`: 3.65:1 ✗

**Suboptimal (AA but not AAA):**
- Dusk `foregroundDim`: 4.76:1 (should be 7:1+)
- All theme `comment` colors: ~6:1 (should be 7:1+)

Readability is the **TOP 1 RULE** - all text must be easily readable for long coding sessions.

## What Changes

1. **Brighten all `foregroundDim` colors** to achieve minimum 7:1 contrast (WCAG AAA)
2. **Brighten all `comment` colors** to achieve minimum 7:1 contrast
3. **Add WCAG AAA as a design rule** in the spec for future development

## Impact

- Affected specs: `theme-system`
- Affected code:
  - `src/palettes/dusk.ts` - update foregroundDim
  - `src/palettes/dawn.ts` - update foregroundDim
  - `src/palettes/midnight.ts` - update foregroundDim
  - `src/palettes/eclipse.ts` - update foregroundDim
  - `src/palettes/forest.ts` - update foregroundDim
  - `src/palettes/scales/*.ts` - update neutral scale (comment color)
