## ADDED Requirements

### Requirement: Forest Color Palette

The Forest theme SHALL define a complete color palette with deep woodland aesthetics.

#### Scenario: Base colors reflect forest depths

- **WHEN** the Forest palette is applied
- **THEN** the background SHALL be deep green-black (`#101410`)
- **AND** foreground SHALL be warm gray-green (`#b8c0b0`)
- **AND** foregroundBright SHALL be pale cream (`#e0e8d8`)
- **AND** foregroundDim SHALL be muted olive (`#687860`)
- **AND** the text hierarchy SHALL progress: `foregroundBright` > `foreground` > `foregroundDim`

#### Scenario: Primary accent is moss green

- **WHEN** interactive elements are highlighted
- **THEN** the primary color SHALL be moss green (`#70a070`)
- **AND** it SHALL evoke the feeling of sunlit moss on bark

### Requirement: Forest Syntax Colors

The Forest theme SHALL provide syntax highlighting colors inspired by woodland elements.

#### Scenario: Syntax colors are distinguishable

- **WHEN** code is displayed with Forest theme
- **THEN** keywords SHALL be soft sage (`#90b080`) like fern fronds
- **AND** functions SHALL be warm amber (`#c8a060`) like sunlight through leaves
- **AND** strings SHALL be moss green (`#80b888`) like forest undergrowth
- **AND** numbers SHALL be warm tan (`#c0a880`) like tree bark
- **AND** comments SHALL be deep olive (`#586850`) like forest shadow
- **AND** operators SHALL be warm gray (`#889080`) like stone
- **AND** types SHALL be soft teal (`#80a898`) like forest stream
- **AND** constants SHALL be warm cream (`#b8b090`) like dried leaves
- **AND** errors SHALL be muted rust (`#c08070`) like autumn leaf

### Requirement: Forest UI Surfaces

The Forest theme SHALL define UI surface colors with deep green undertones.

#### Scenario: UI surfaces create depth

- **WHEN** the UI is rendered
- **THEN** border SHALL be deep green-gray (`#1c201a`)
- **AND** surface SHALL be slightly lighter than background (`#141814`)
- **AND** surfaceDark SHALL be darker than background (`#0a0c0a`)
- **AND** surfaceLight SHALL be lighter than background (`#1c201a`)
- **AND** overlay SHALL be elevated surface (`#181c18`)
- **AND** lineNumber SHALL be muted olive (`#485040`)
- **AND** panelBackground SHALL match background (`#101410`)

### Requirement: Forest Git Colors

The Forest theme SHALL provide git decoration colors that follow conventions while matching the woodland theme.

#### Scenario: Git colors are recognizable

- **WHEN** git status is displayed
- **THEN** added SHALL be moss green (`#80b888`)
- **AND** deleted SHALL be muted rust (`#c08070`)
- **AND** modified SHALL be moss accent (`#70a070`)
- **AND** ignored SHALL be deep olive (`#586850`)
- **AND** conflicting SHALL be warm tan (`#c0a880`)

### Requirement: Forest Terminal Colors

The Forest theme SHALL provide terminal ANSI colors with earthy woodland tones.

#### Scenario: Terminal colors match theme

- **WHEN** terminal output is displayed
- **THEN** red SHALL be soft rust (`#c88078`)
- **AND** green SHALL be forest green (`#88c088`)
- **AND** yellow SHALL be golden amber (`#c8b068`)
- **AND** blue SHALL be stream blue (`#78a0b0`)
- **AND** magenta SHALL be wildflower (`#b088a0`)
- **AND** colors SHALL remain distinguishable for readability
