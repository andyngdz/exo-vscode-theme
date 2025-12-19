# Exo - Dusk

A muted, eye-friendly dark theme for VS Code. Part of the Exo theme family.

## Features

- **Very dark background** - Easy on the eyes for long coding sessions
- **Muted cyan accent** - Subtle primary color that doesn't overwhelm
- **Desaturated syntax colors** - Blues, cyans, and teals for a calm aesthetic
- **Full terminal support** - Complete ANSI color palette
- **Comprehensive UI coverage** - Minimap, peek view, debug, merge conflicts

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0f1419` | Editor background |
| Foreground | `#a8b5c4` | Default text |
| Primary | `#6ba3a8` | Accent, functions |
| Keyword | `#7b93a8` | Keywords, storage |
| String | `#7a9e8c` | Strings, symbols |
| Number | `#b8a586` | Numbers, constants |
| Comment | `#4a5866` | Comments |
| Error | `#b07070` | Errors, deletions |

## Development

The theme is built from TypeScript source files:

```bash
npm install
npm run build
```

Theme source files:
- `src/palette.ts` - Color definitions
- `src/theme.ts` - Theme configuration
- `src/utils.ts` - Color utilities
- `src/build.ts` - Build script

## License

MIT
