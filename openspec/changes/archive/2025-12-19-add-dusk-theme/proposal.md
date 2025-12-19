# Change: Add Dusk Theme

## Why

The Exo theme family needs a dark theme inspired by evening twilight. Dusk provides a muted, eye-friendly coding experience with warm amber accents and purple-tinted backgrounds that evoke the feeling of sunset.

## What Changes

- Add new `dusk` palette in `src/palettes/dusk.ts`
- Export palette from `src/palettes/index.ts`
- Register theme in `package.json`
- Generate theme file `themes/Exo - Dusk-color-theme.json`

## Impact

- Affected specs: `dusk-theme`
- Affected code: `src/palettes/dusk.ts`, `src/palettes/index.ts`, `src/build.ts`, `package.json`
