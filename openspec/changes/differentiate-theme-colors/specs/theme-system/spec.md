## MODIFIED Requirements

### Requirement: Theme Identity

Each theme SHALL have a distinct visual identity through unique signature colors with sufficient hue separation.

#### Scenario: Themes have unique keyword hues with 40°+ separation

- **WHEN** comparing keyword colors across themes
- **THEN** each theme SHALL use a distinctly different hue:
  - **Dusk**: Purple hue (~280°)
  - **Dawn**: Coral/Pink hue (~0°)
  - **Eclipse**: Orange-Red hue (~15°)
  - **Forest**: Green hue (~140°)
  - **Midnight**: Blue hue (~220°)
- **AND** no two themes SHALL have keywords within 30° of each other on the color wheel

#### Scenario: Themes have unique function hues

- **WHEN** comparing function colors across themes
- **THEN** each theme SHALL use a different hue for functions:
  - **Dusk**: Orange hue (~30°)
  - **Dawn**: Yellow hue (~55°)
  - **Eclipse**: Bright Orange hue (~35°)
  - **Forest**: Brown hue (~30°)
  - **Midnight**: Cyan hue (~185°)

#### Scenario: Theme is immediately recognizable by keyword color

- **WHEN** a user views code with a theme applied
- **THEN** the keyword color alone SHALL be sufficient to identify which theme is active
- **AND** keywords SHALL NOT appear as "same color, different opacity" across themes
