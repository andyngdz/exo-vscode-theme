# Change: Remove Light Theme Support

## Why

The Exo theme family only supports dark themes. The current codebase has unused `type: 'dark' | 'light'` parameter in `createTheme()` and conditional logic for light themes that will never be executed. Removing this simplifies the code and makes the dark-only intent explicit.

## What Changes

- Remove `type` parameter from `createTheme()` function
- Hardcode dark theme behavior (always use `lighten()` for contrast adjustments)
- Remove `type: 'dark' as const` from theme array in `build.ts`
- Update theme-system spec to reflect dark-only support

## Impact

- Affected specs: `theme-system` (modified)
- Affected code:
  - `src/theme.ts` - Remove type parameter, hardcode dark behavior
  - `src/build.ts` - Remove type from theme array
