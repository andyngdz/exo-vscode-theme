# Agents Guidelines for Exo Theme

These guidelines apply to AI assistants working on this VS Code theme project.

## Design Principles

Follow the [12 Principles of Design](https://www.toptal.com/designers/ui/principles-of-design) when making any color or visual decisions:

### 1. Contrast

- Ensure sufficient contrast between text and backgrounds
- Foreground colors must be readable against their backgrounds
- Use WCAG guidelines as a baseline for accessibility

### 2. Balance

- Distribute visual weight evenly across UI elements
- Dark and light themes should feel equally polished

### 3. Emphasis

- Use primary/accent colors purposefully to highlight important elements
- Active states, selections, and interactive elements should stand out
- Errors and warnings deserve visual prominence

### 4. Proportion

- Opacity values should be proportional to element importance
- More important elements get higher opacity/visibility

### 5. Hierarchy

- Maintain clear text hierarchy: `foregroundBright` > `foreground` > `foregroundDim`
- Syntax highlighting should guide the eye to important code elements
- UI hierarchy: active > hover > inactive states

### 6. Repetition

- Use the same colors consistently for similar elements
- All selections should use the same base color (primary)
- Similar syntax elements should share colors

### 7. Rhythm

- Apply consistent patterns in color usage
- Opacity scales should follow predictable increments

### 8. Pattern

- Follow established conventions:
  - Red for errors/deletions
  - Green for success/additions
  - Yellow/Orange for warnings/modifications
  - Blue for information/types

### 9. White Space

- Background colors should provide breathing room
- Don't over-saturate the UI with colors
- Transparent elements create depth without clutter

### 10. Movement

- Visual flow should guide user attention naturally
- Active/focused elements should be immediately apparent

### 11. Variety

- Syntax colors must be distinguishable from each other
- Provide enough differentiation without creating chaos
- Each syntax category should have its own identity

### 12. Unity

- All colors must feel cohesive within the palette
- Maintain the muted, eye-friendly aesthetic across all elements
- New colors should derive from or complement existing palette

## Theme Identity

**Each theme must have its own distinct color personality.**

- Do NOT create a new theme by simply adjusting brightness of an existing theme
- Each theme should have unique accent colors, syntax colors, and character
- Themes are separate creative works, not light/dark variants of each other

Examples:
- Dusk: teal accent, coral keywords, golden functions, cool undertones
- Dawn: different accent, different syntax colors, warm undertones

When creating a new theme:
1. Define its unique personality first (mood, temperature, inspiration)
2. Choose a distinct primary/accent color
3. Build syntax colors that complement the new identity
4. Ensure it stands apart from existing themes

## Technical Rules

### Color Definitions

- **Never hardcode colors** in `theme.ts` - always use palette references
- All colors must be defined in palette files (`src/palettes/*.ts`)
- Use utility functions (`withOpacity`, `lighten`, `darken`) for variations

### Palette Structure

Each palette must include:

- Base colors: `background`, `foreground`, `foregroundBright`, `foregroundDim`
- Accent: `primary`
- Syntax: `keyword`, `function`, `string`, `number`, `comment`, `operator`, `type`, `constant`, `error`
- UI: `border`, `surface`, `surfaceDark`, `surfaceLight`, `overlay`, `lineNumber`, `panelBackground`
- Git: `added`, `deleted`, `modified`, `ignored`, `conflicting`
- Terminal: `red`, `green`, `yellow`, `blue`, `magenta`

### Opacity Guidelines

- High emphasis (active selections): 0.25 - 0.35
- Medium emphasis (hover states): 0.15 - 0.25
- Low emphasis (inactive/subtle): 0.08 - 0.15
- Borders and separators: 0.1 - 0.2

### Theme Types

- Dark themes (`vs-dark`): Dark backgrounds, light text
- Light themes (`vs`): Light backgrounds, dark text
- Both must use the same `createTheme()` function for consistency

## Quality Checklist

Before submitting changes:

- [ ] All colors reference palette, no hardcoded hex values in theme.ts
- [ ] Build succeeds (`npm run build`)
- [ ] Both Dusk and Dawn themes generate correctly
- [ ] Contrast is sufficient for readability
- [ ] Syntax highlighting differentiates code elements
- [ ] UI elements follow consistent patterns
