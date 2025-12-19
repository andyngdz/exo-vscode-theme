# Exo Theme

A muted, eye-friendly dark theme family for VS Code. Five beautiful themes designed for long coding sessions without eye strain.

## Themes

| Theme | Inspiration | Accent |
|-------|-------------|--------|
| **Exo - Dusk** | Evening sunset | Warm amber |
| **Exo - Dawn** | Morning sunrise | Soft coral |
| **Exo - Midnight** | Night sky | Ice blue |
| **Exo - Eclipse** | Solar eclipse | Deep crimson |
| **Exo - Forest** | Woodland | Moss green |

## Features

- **Eye comfort first** - Muted, low-saturation colors that don't cause fatigue
- **Distinct personalities** - Each theme has its own unique color identity
- **Semantic highlighting** - Colors follow coding conventions (green strings, etc.)
- **Full UI coverage** - Editor, terminal, git, debug, minimap, and more
- **Dark backgrounds** - Easy on the eyes for long coding sessions

## Theme Previews

### Dusk (Evening)
Soft purples and warm amber tones, like watching the sunset.

### Dawn (Morning)
Coral and sage green tones, fresh like the first light of day.

### Midnight (Night)
Cool blues and silver tones, calm like moonlit water.

### Eclipse (Solar)
Deep crimson and burnt gold, dramatic like a solar eclipse.

### Forest (Woodland)
Moss greens and earthy amber, grounded like an ancient forest.

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Exo Theme"
4. Click Install
5. Go to Preferences > Color Theme and select your preferred Exo theme

## Development

The themes are built from TypeScript source files:

```bash
pnpm install
pnpm run build
```

### Project Structure

```
src/
├── palettes/       # Color definitions for each theme
│   ├── dusk.ts
│   ├── dawn.ts
│   ├── midnight.ts
│   ├── eclipse.ts
│   └── forest.ts
├── theme.ts        # Theme generator
├── utils.ts        # Color utilities
└── build.ts        # Build script
```

## Design Principles

1. **Eye comfort** - Muted colors that don't strain your eyes
2. **Beautiful aesthetics** - "Wow, this looks good" feeling
3. **Theme identity** - Colors match each theme's name and concept
4. **Clear hierarchy** - Important elements stand out appropriately
5. **Semantic meaning** - Colors follow universal coding conventions

## License

MIT
