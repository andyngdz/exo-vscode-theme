## MODIFIED Requirements

### Requirement: Theme Generation

The system SHALL generate valid VS Code color theme JSON files from palette definitions.

#### Scenario: Generate theme from palette

- **WHEN** `createTheme(palette, type)` is called
- **THEN** it SHALL return a valid VS Code theme object with:
  - `name`: The palette name
  - `type`: Either 'dark' or 'light'
  - `semanticHighlighting`: Set to `true` to enable semantic token support
  - `colors`: UI color mappings
  - `tokenColors`: Syntax highlighting rules

#### Scenario: Build process outputs theme files

- **WHEN** the build script runs
- **THEN** it SHALL generate JSON files in `themes/` directory
- **AND** each file SHALL be named `{palette.name}-color-theme.json`

#### Scenario: Semantic tokens are colored

- **WHEN** a language server (e.g., Pylance) provides semantic token data
- **THEN** VS Code SHALL use the theme's token rules to color semantic tokens like class names, type references, and variables
- **AND** tokens identified as `entity.name.type.class` SHALL receive appropriate coloring from existing `entity.name` rules
