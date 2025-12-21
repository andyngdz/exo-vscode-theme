# Change: Enable Semantic Highlighting

## Why

Exception class names like `CancelledError`, `Exception`, and `HTTPException` appear white/unstyled in Python files. Investigation revealed that GitHub Theme works because it has `semanticHighlighting: true`, which enables VS Code to use semantic token data from language servers like Pylance.

With semantic highlighting enabled:
- Pylance identifies `CancelledError` as a `class` semantic token type
- VS Code maps this to `entity.name.type.class` scope
- Theme rules for `entity.name` then apply color

Without semantic highlighting:
- Only TextMate grammar scopes are used
- `CancelledError` gets generic `source.python` scope
- Falls through to default foreground (white)

## What Changes

1. Add `semanticHighlighting: true` to the theme output in `src/theme.ts`
2. This enables VS Code's semantic token API for richer syntax highlighting

## Impact

- Affected specs: `theme-system`
- Affected code: `src/theme.ts` (createTheme function return object)
- Visual change: Class names, type references, and other semantic tokens will now be properly colored based on language server data
