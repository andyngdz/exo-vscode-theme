## 1. Implementation

- [x] 1.1 Add generic `support` scope rule in `src/theme.ts` using `palette.type` color
- [x] 1.2 Position the rule early in tokenColors so specific rules can override it
- [x] 1.3 Build themes and verify exception types are now colored

## 2. Validation

- [x] 2.1 Test with Python file containing `except CancelledError:` and `except Exception:`
- [x] 2.2 Verify other `support.*` scopes still work correctly (e.g., `support.type`, `support.class`)
- [x] 2.3 Confirm all 5 themes build successfully
