# Change: Add Midnight Theme

## Why

The Exo theme family currently has Dawn (sunrise) and Dusk (sunset) themes. Midnight completes the day cycle with a deep night sky aesthetic. It offers users a cooler-toned dark theme option with silver/ice blue accents, providing a calm, focused coding experience for those who prefer less warmth in their color palette.

## What Changes

- Add new `midnight` palette in `src/palettes/midnight.ts`
- Export palette from `src/palettes/index.ts`
- Update `Palette` type union to include midnight
- Add theme to build configuration in `src/build.ts`
- Register theme in `package.json`
- Generate theme file `themes/Exo - Midnight-color-theme.json`

## Impact

- Affected specs: `midnight-theme` (new)
- Affected code:
  - `src/palettes/midnight.ts` (new)
  - `src/palettes/index.ts`
  - `src/build.ts`
  - `package.json`
