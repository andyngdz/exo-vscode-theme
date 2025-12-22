# Change: Fix Support Scope Highlighting

## Why

Exception class names like `CancelledError`, `Exception`, and `HTTPException` in Python appear white/unstyled, making them hard to distinguish from regular text. GitHub Theme colors these with a distinct color because it has a generic `support` scope rule that catches built-in types, functions, and exception classes.

Our theme lacks this rule, causing built-in support classes to fall through to the default foreground color (`foregroundBright`), which is too bright and reduces code readability.

## What Changes

1. Add a generic `support` scope rule to color built-in types, functions, and classes (including exceptions)
2. Ensure the rule is placed correctly in the tokenColors cascade so more specific rules (like `support.type`) can still override when needed

## Impact

- Affected specs: `theme-system`
- Affected code: `src/theme.ts` (tokenColors section)
- Visual change: Exception types and other built-in support classes will now have color instead of appearing white
