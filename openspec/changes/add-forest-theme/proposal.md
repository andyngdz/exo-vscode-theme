# Change: Add Forest Theme

## Why

The Exo theme family currently has 4 themes based on celestial/time-of-day concepts (Dawn, Dusk, Midnight, Eclipse). Forest completes the set of 5 themes by adding a nature-inspired option. It offers users a grounded, organic dark theme with deep greens and earthy tones, providing a calm, natural coding experience for those who prefer earth tones over sky tones.

## Theme Identity

- **Name meaning**: Deep woodland, ancient trees, natural growth
- **Feeling**: Grounded, calm, organic, focused
- **Palette**: Deep forest greens, moss, bark browns, golden sunlight through leaves
- **Temperature**: Neutral-warm earth tones

## What Changes

- Add new `forest` palette in `src/palettes/forest.ts`
- Export palette from `src/palettes/index.ts`
- Update `Palette` type union to include forest
- Add theme to build configuration in `src/build.ts`
- Register theme in `package.json`
- Generate theme file `themes/Exo - Forest-color-theme.json`

## Impact

- Affected specs: `forest-theme` (new)
- Affected code:
  - `src/palettes/forest.ts` (new)
  - `src/palettes/index.ts`
  - `src/build.ts`
  - `package.json`
