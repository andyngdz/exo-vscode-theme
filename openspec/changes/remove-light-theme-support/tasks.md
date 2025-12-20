## 1. Implementation

- [x] 1.1 Remove `type` parameter from `createTheme()` function in `src/theme.ts`
- [x] 1.2 Replace `type === 'dark'` conditionals with hardcoded dark theme behavior
- [x] 1.3 Hardcode `type: 'dark'` in the returned theme object
- [x] 1.4 Remove `type: 'dark' as const` from theme array in `src/build.ts`
- [x] 1.5 Update `createTheme()` call in `build.ts` to not pass type
- [x] 1.6 Run build and verify all themes generate correctly
