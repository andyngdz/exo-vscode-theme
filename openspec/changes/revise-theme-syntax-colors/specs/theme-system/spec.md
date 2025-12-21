## MODIFIED Requirements

### Requirement: Palette Structure

Each theme palette SHALL define a complete set of color tokens with GitHub-inspired brightness levels.

#### Scenario: Syntax colors have high brightness for clarity

- **WHEN** defining syntax colors (`keyword`, `function`, `string`, `type`)
- **THEN** colors SHALL have 70-85% lightness (HSL) for clear visibility
- **AND** colors SHALL have 35-55% saturation for muted comfort
- **AND** each theme SHALL have unique hue families

#### Scenario: Foreground is bright enough for variable visibility

- **WHEN** defining `foregroundBright`
- **THEN** it SHALL have 90-95% lightness
- **AND** variables/identifiers SHALL be clearly readable

### Requirement: Theme Identity

Each theme SHALL have a distinct visual identity inspired by its natural phenomenon.

#### Scenario: Each theme has unique syntax color hues

- **WHEN** comparing syntax colors across themes
- **THEN** they SHALL follow these GitHub-inspired color assignments:
  - **Dusk**: Orchid keywords, Lavender functions, Soft Violet strings
  - **Dawn**: Coral keywords, Gold functions, Peach strings
  - **Eclipse**: Orange-Red keywords, Orange functions, Gold strings
  - **Forest**: Emerald keywords, Tan functions, Moss strings
  - **Midnight**: Periwinkle keywords, Cyan functions, Ice Blue strings
- **AND** no two themes SHALL share the same keyword hue

#### Scenario: Visual hierarchy matches GitHub Theme structure

- **WHEN** viewing code with syntax highlighting
- **THEN** the hierarchy SHALL be: Keywords (brightest) > Functions > Strings > Types > Variables > Comments
- **AND** each element SHALL be immediately distinguishable
