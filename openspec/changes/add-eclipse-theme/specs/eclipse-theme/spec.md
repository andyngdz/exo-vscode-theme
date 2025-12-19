## ADDED Requirements

### Requirement: Eclipse Color Palette

The Eclipse theme SHALL define a complete color palette with dramatic solar eclipse aesthetics.

#### Scenario: Base colors reflect total eclipse

- **WHEN** the Eclipse palette is applied
- **THEN** the background SHALL be near-black with subtle warm undertone (`#12100f`)
- **AND** foreground SHALL be warm silver (`#c8c0b8`)
- **AND** foregroundBright SHALL be bright cream (`#f0e8e0`)
- **AND** foregroundDim SHALL be muted warm gray (`#706860`)
- **AND** the text hierarchy SHALL progress: `foregroundBright` > `foreground` > `foregroundDim`

#### Scenario: Primary accent is deep crimson

- **WHEN** interactive elements are highlighted
- **THEN** the primary color SHALL be deep crimson (`#c85050`)
- **AND** it SHALL evoke the feeling of the solar corona during eclipse

### Requirement: Eclipse Syntax Colors

The Eclipse theme SHALL provide syntax highlighting colors inspired by the eclipse corona and dramatic lighting.

#### Scenario: Syntax colors are distinguishable

- **WHEN** code is displayed with Eclipse theme
- **THEN** keywords SHALL be dusty rose (`#c07088`) like corona flames
- **AND** functions SHALL be warm gold (`#d0a050`) like scattered sunlight
- **AND** strings SHALL be muted copper (`#b08860`) like ember glow
- **AND** numbers SHALL be pale gold (`#c8b080`) like light rays
- **AND** comments SHALL be warm charcoal (`#585048`) like shadow
- **AND** operators SHALL be warm gray (`#908880`) like ash
- **AND** types SHALL be dusty violet (`#9878a8`) like twilight corona
- **AND** constants SHALL be warm tan (`#a89888`) like sunlit dust
- **AND** errors SHALL be bright crimson (`#d06060`) like warning flare

### Requirement: Eclipse UI Surfaces

The Eclipse theme SHALL define UI surface colors with dark warm undertones.

#### Scenario: UI surfaces create depth

- **WHEN** the UI is rendered
- **THEN** border SHALL be dark warm gray (`#201c1a`)
- **AND** surface SHALL be slightly lighter than background (`#181412`)
- **AND** surfaceDark SHALL be darker than background (`#0a0908`)
- **AND** surfaceLight SHALL be lighter than background (`#201c1a`)
- **AND** overlay SHALL be elevated surface (`#1c1816`)
- **AND** lineNumber SHALL be muted warm gray (`#484038`)
- **AND** panelBackground SHALL match background (`#12100f`)

### Requirement: Eclipse Git Colors

The Eclipse theme SHALL provide git decoration colors that follow conventions while matching the dramatic theme.

#### Scenario: Git colors are recognizable

- **WHEN** git status is displayed
- **THEN** added SHALL be muted copper (`#b08860`)
- **AND** deleted SHALL be bright crimson (`#d06060`)
- **AND** modified SHALL be deep crimson (`#c85050`)
- **AND** ignored SHALL be warm charcoal (`#585048`)
- **AND** conflicting SHALL be pale gold (`#c8b080`)

### Requirement: Eclipse Terminal Colors

The Eclipse theme SHALL provide terminal ANSI colors with warm dramatic tones.

#### Scenario: Terminal colors match theme

- **WHEN** terminal output is displayed
- **THEN** red SHALL be bright crimson (`#e07070`)
- **AND** green SHALL be warm olive (`#a0b070`)
- **AND** yellow SHALL be warm gold (`#d8b860`)
- **AND** blue SHALL be dusty steel (`#8090b0`)
- **AND** magenta SHALL be dusty rose (`#c080a0`)
- **AND** colors SHALL remain distinguishable for readability
