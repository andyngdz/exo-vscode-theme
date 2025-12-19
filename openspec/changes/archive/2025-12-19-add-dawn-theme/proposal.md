# Change: Add Dawn Theme

## Why

The Exo theme family needs a dark theme inspired by sunrise and early morning light. Dawn provides a muted, eye-friendly coding experience with soft coral accents and warm-tinted backgrounds that evoke the feeling of first light.

## What Changes

- Add new `dawn` palette in `src/palettes/dawn.ts`
- Export palette from `src/palettes/index.ts`
- Register theme in `package.json`
- Generate theme file `themes/Exo - Dawn-color-theme.json`

## Impact

- Affected specs: `dawn-theme`
- Affected code: `src/palettes/dawn.ts`, `src/palettes/index.ts`, `src/build.ts`, `package.json`
