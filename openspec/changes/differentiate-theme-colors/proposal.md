# Change: Differentiate Theme Colors by Unique Hue Families

## Why

After initial attempts, themes still look too similar because colors are in the **same hue families**:

- **Dusk, Dawn, Eclipse** all have pink/red keywords (320°-0° on color wheel)
- **Dusk, Dawn, Eclipse, Forest** all have gold/amber/tan functions (25°-45°)
- Colors differ only in saturation/lightness, appearing as "same color, different opacity"

Each theme needs colors from **completely different parts of the color wheel** (40-60° separation minimum).

## What Changes

### Color Wheel Separation Strategy

| Theme | Keyword Hue | Function Hue | String Hue |
|-------|-------------|--------------|------------|
| **Dusk** | Purple 280° | Orange 30° | Lavender 270° |
| **Dawn** | Coral 0° | Yellow 55° | Peach 25° |
| **Eclipse** | Orange-Red 15° | Bright Orange 35° | Gold 50° |
| **Forest** | Green 140° | Brown 30° | Teal 165° |
| **Midnight** | Blue 220° | Cyan 185° | Ice Blue 210° |

### Specific Color Assignments

| Theme | Keywords | Functions | Strings |
|-------|----------|-----------|---------|
| **Dusk** | Purple `#b478e0` | Orange `#e89050` | Lavender `#a890d8` |
| **Dawn** | Coral `#e87878` | Yellow `#e8c830` | Peach `#e8a878` |
| **Eclipse** | Orange-Red `#f06830` | Bright Orange `#f0a030` | Gold `#e0c060` |
| **Forest** | Green `#50c878` | Brown `#b89858` | Teal `#60c8a8` |
| **Midnight** | Blue `#7090e8` | Cyan `#40c8d8` | Ice Blue `#90b8e0` |

### Key Visual Differentiators

When viewing `@decorator` or `import` keywords:
- **Dusk** → Purple (clearly violet, not pink)
- **Dawn** → Coral/Pink
- **Eclipse** → Orange (shifted from red)
- **Forest** → Green
- **Midnight** → Blue

No two themes share the same keyword hue family.

## Impact

- Affected specs: `theme-system`
- Affected code: All palette files in `src/palettes/`
- User experience: Each theme is **immediately recognizable** by its keyword color alone
