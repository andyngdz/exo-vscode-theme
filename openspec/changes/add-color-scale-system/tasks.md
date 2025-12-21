## 1. Infrastructure

- [x] 1.1 Create `src/scales.ts` with `generateScale()` function
- [x] 1.2 Create type definitions for Scale and ThemeScales

## 2. Theme Scale Definitions

- [x] 2.1 Create `src/palettes/scales/dusk.ts` - Define base colors for Dusk
- [x] 2.2 Create `src/palettes/scales/dawn.ts` - Define base colors for Dawn
- [x] 2.3 Create `src/palettes/scales/eclipse.ts` - Define base colors for Eclipse
- [x] 2.4 Create `src/palettes/scales/forest.ts` - Define base colors for Forest
- [x] 2.5 Create `src/palettes/scales/midnight.ts` - Define base colors for Midnight
- [x] 2.6 Create `src/palettes/scales/index.ts` - Export all scales

## 3. Palette Refactoring

- [x] 3.1 Refactor `src/palettes/dusk.ts` to use scales for syntax/semantic colors
- [x] 3.2 Refactor `src/palettes/dawn.ts` to use scales for syntax/semantic colors
- [x] 3.3 Refactor `src/palettes/eclipse.ts` to use scales for syntax/semantic colors
- [x] 3.4 Refactor `src/palettes/forest.ts` to use scales for syntax/semantic colors
- [x] 3.5 Refactor `src/palettes/midnight.ts` to use scales for syntax/semantic colors
- [x] 3.6 Update `src/palettes/index.ts` to export scales

## 4. Validation

- [x] 4.1 Build themes successfully
- [x] 4.2 UI colors remain hardcoded for precise control
- [x] 4.3 Syntax/semantic colors use scales

## What Uses Scales

| Category | Colors | Scale |
|----------|--------|-------|
| Syntax | keyword | primary[2-3] |
| Syntax | function | secondary[2-3] |
| Syntax | string | tertiary[2] |
| Syntax | number, constant | warning[2-3] |
| Syntax | type | info[2-3] or success[3] |
| Syntax | comment | neutral[4] |
| Syntax | operator | neutral[2] |
| Semantic | error | danger[3] |
| Git | added | success[3] |
| Git | deleted | danger[3] |
| Git | modified | info[3] |
| Git | conflicting | warning[3] |
| Terminal | red, green, yellow, blue, magenta | corresponding scales |

## What Stays Hardcoded

UI colors require precise manual tuning and theme-specific tinting:
- background, foreground, foregroundBright, foregroundDim
- border, surface, surfaceDark, surfaceLight, overlay
- lineNumber, panelBackground
- ignored
