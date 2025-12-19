# Change: Add Eclipse Theme

## Why

The Exo theme family currently has Dawn (sunrise), Dusk (sunset), and Midnight (night). Eclipse adds a dramatic, high-contrast dark theme inspired by a solar eclipse. It offers users a bolder option with deep crimson accents, providing an intense, focused coding experience for those who prefer more dramatic color schemes.

## What Changes

- Add new `eclipse` palette in `src/palettes/eclipse.ts`
- Export palette from `src/palettes/index.ts`
- Update `Palette` type union to include eclipse
- Add theme to build configuration in `src/build.ts`
- Register theme in `package.json`
- Generate theme file `themes/Exo - Eclipse-color-theme.json`

## Impact

- Affected specs: `eclipse-theme` (new)
- Affected code:
  - `src/palettes/eclipse.ts` (new)
  - `src/palettes/index.ts`
  - `src/build.ts`
  - `package.json`
