# Change: Reduce UI Vibrancy for Coding Focus

## Why

The current theme has vibrant colors everywhere, which can be distracting. Users should focus on their code, not the UI chrome. By reducing vibrancy in non-code areas (sidebars, icons, git decorations, terminal) while keeping syntax colors moderately vibrant, the code becomes the focal point.

**Design Principles Applied:**
- **Emphasis** - Use color to guide attention to what matters most (the code)
- **Hierarchy** - Code > UI chrome in visual importance
- **Unity** - Consistent muted approach across all non-code elements

**Inspired by:** GitHub Theme's approach - muted UI with focused syntax highlighting.

## What Changes

1. **Syntax colors (20-30% saturation)** - Moderate vibrancy for readability
   - `keyword`, `function`, `string`, `number`, `type`, `constant`, `operator`
   - Keep distinguishable but less "loud"
   - This is where users focus, so maintain enough color to differentiate

2. **UI/Chrome colors (10-15% saturation)** - Subtle, recede into background
   - `primary` (accent color for icons, activity bar, badges, cursors)
   - Git colors: `added`, `deleted`, `modified`, `conflicting`
   - Terminal colors: `red`, `green`, `yellow`, `blue`, `magenta`
   - `error` color (still visible but not screaming)

## Impact

- Affected specs: `theme-system` (vibrancy guidelines)
- Affected code: All palette files (`src/palettes/*.ts`)
- User experience: Code-focused, less visual noise from UI elements
