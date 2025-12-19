# Change: Fix Deprecated Indent Guide Properties

## Why

VS Code has deprecated the `editorIndentGuide.background` and `editorIndentGuide.activeBackground` properties. They should be replaced with `editorIndentGuide.background1` and `editorIndentGuide.activeBackground1` respectively. This fix eliminates deprecation warnings and ensures forward compatibility with future VS Code versions.

## What Changes

- Update `src/theme.ts` to use `editorIndentGuide.background1` instead of `editorIndentGuide.background`
- Update `src/theme.ts` to use `editorIndentGuide.activeBackground1` instead of `editorIndentGuide.activeBackground`
- Rebuild all themes to apply the fix

## Impact

- Affected specs: `theme-system` (modified)
- Affected code: `src/theme.ts`
- Affected themes: All (Dusk, Dawn, Midnight)
