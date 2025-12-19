/**
 * Exo Theme Generator
 */

import type { Palette } from '@/palettes'
import { lighten, transparent, withOpacity } from '@/utils'

export function createTheme(palette: Palette) {
  const colors = {
    // Editor
    'editor.background': palette.background,
    'editor.foreground': palette.foreground,
    'editor.lineHighlightBackground': palette.surfaceLight,
    'editor.inactiveSelectionBackground': withOpacity(palette.primary, 0.2),
    'editor.selectionBackground': withOpacity(palette.primary, 0.35),
    'editor.selectionHighlightBackground': withOpacity(palette.string, 0.2),
    'editor.selectionHighlightBorder': transparent,
    'editor.wordHighlightBackground': withOpacity(palette.primary, 0.15),
    'editor.wordHighlightStrongBackground': withOpacity(palette.string, 0.15),
    'editor.wordHighlightBorder': withOpacity(palette.primary, 0.5),
    'editor.wordHighlightStrongBorder': withOpacity(palette.string, 0.5),
    'editor.findMatchBackground': withOpacity(palette.keyword, 0.4),
    'editor.findMatchBorder': withOpacity(palette.keyword, 0.4),
    'editor.findMatchHighlightBackground': withOpacity(palette.keyword, 0.25),
    'editor.findMatchHighlightBorder': withOpacity(palette.keyword, 0.25),
    'editor.findRangeHighlightBackground': withOpacity(palette.keyword, 0.2),
    'editor.rangeHighlightBackground': withOpacity(palette.keyword, 0.2),
    'editorCursor.foreground': palette.primary,
    'editorLink.activeForeground': palette.primary,
    'editorWhitespace.foreground': withOpacity(palette.comment, 0.6),
    'editorIndentGuide.background1': withOpacity(palette.comment, 0.2),
    'editorIndentGuide.activeBackground1': withOpacity(palette.comment, 0.5),
    'editorRuler.foreground': withOpacity(palette.comment, 0.2),
    'editorCodeLens.foreground': withOpacity(palette.foreground, 0.55),
    'editorBracketMatch.background': withOpacity(palette.comment, 0.3),
    'editorBracketMatch.border': withOpacity(palette.comment, 0.3),
    'editor.snippetTabstopHighlightBackground': withOpacity(palette.string, 0.2),
    'editorError.foreground': palette.error,
    'editorWarning.foreground': palette.number,
    'editorLineNumber.foreground': palette.lineNumber,
    'editorLineNumber.activeForeground': lighten(palette.lineNumber, 0.3),

    // Activity Bar
    'activityBar.background': palette.background,
    'activityBar.foreground': palette.primary,
    'activityBarBadge.background': palette.primary,
    'activityBarBadge.foreground': palette.background,

    // Sidebar
    'sideBar.background': palette.background,
    'sideBar.foreground': palette.foregroundDim,
    'sideBarTitle.foreground': palette.foreground,
    'sideBarSectionHeader.background': palette.background,
    'sideBarSectionHeader.foreground': palette.foreground,

    // Lists
    'list.activeSelectionBackground': withOpacity(palette.primary, 0.25),
    'list.activeSelectionForeground': palette.foregroundBright,
    'list.hoverBackground': withOpacity(palette.primary, 0.15),
    'list.focusBackground': withOpacity(palette.primary, 0.25),
    'list.inactiveSelectionBackground': withOpacity(palette.primary, 0.18),
    'list.focusOutline': transparent,
    'list.activeSelectionIconForeground': palette.foregroundBright,

    // Status Bar
    'statusBar.background': palette.surfaceDark,
    'statusBar.foreground': palette.foregroundDim,
    'statusBar.debuggingBackground': palette.error,
    'statusBar.noFolderBackground': palette.surfaceDark,

    // Title Bar
    'titleBar.activeBackground': palette.surfaceDark,
    'titleBar.activeForeground': palette.foreground,
    'titleBar.inactiveBackground': palette.surfaceDark,
    'titleBar.inactiveForeground': palette.comment,

    // Tabs
    'editorGroupHeader.tabsBackground': palette.background,
    'editorGroupHeader.noTabsBackground': palette.background,
    'editorGroupHeader.tabsBorder': transparent,
    'tab.activeBackground': palette.background,
    'tab.activeForeground': palette.foregroundBright,
    'tab.activeBorder': palette.primary,
    'tab.inactiveBackground': palette.panelBackground,
    'tab.inactiveForeground': palette.comment,
    'tab.border': transparent,

    // Panel
    'panel.background': palette.background,
    'panel.border': palette.border,
    'panelTitle.activeForeground': palette.foreground,
    'panelTitle.inactiveForeground': palette.comment,

    // Terminal
    'terminal.background': palette.background,
    'terminal.foreground': palette.foreground,

    // Input
    'input.background': palette.surface,
    'input.foreground': palette.foreground,
    'input.border': palette.border,
    'input.placeholderForeground': palette.comment,
    'inputOption.activeBorder': palette.primary,

    // Dropdown & Menus
    'dropdown.background': palette.overlay,
    'dropdown.border': palette.border,
    'dropdown.listBackground': palette.overlay,
    'menu.background': palette.overlay,
    'menu.border': palette.border,
    'menu.foreground': palette.foreground,
    'menu.selectionBackground': withOpacity(palette.primary, 0.3),
    'menu.selectionForeground': palette.foregroundBright,
    'menu.separatorBackground': palette.border,
    'menubar.selectionBackground': withOpacity(palette.primary, 0.28),

    // Quick Input (Command Palette)
    'quickInput.background': palette.overlay,
    'quickInput.foreground': palette.foreground,
    'quickInputList.focusBackground': withOpacity(palette.primary, 0.3),
    'quickInputList.focusForeground': palette.foregroundBright,
    'quickInputList.focusIconForeground': palette.foregroundBright,
    'quickInputTitle.background': palette.overlay,
    'pickerGroup.border': palette.border,
    'pickerGroup.foreground': palette.primary,
    'editorWidget.background': palette.overlay,
    'editorWidget.border': withOpacity(palette.primary, 0.4),
    'editorWidget.foreground': palette.foreground,

    // Chat / AI panels
    'chat.requestBackground': palette.overlay,
    'chat.requestBorder': palette.border,

    // Notifications
    'notifications.background': palette.overlay,
    'notifications.border': palette.border,
    'notificationCenterHeader.background': palette.overlay,

    // Hover widgets
    'editorHoverWidget.background': palette.overlay,
    'editorHoverWidget.border': withOpacity(palette.primary, 0.4),

    // Button
    'button.background': palette.primary,
    'button.foreground': palette.background,
    'button.hoverBackground': lighten(palette.primary, 0.1),

    // Scrollbar
    'scrollbarSlider.background': withOpacity(palette.foregroundDim, 0.28),
    'scrollbarSlider.hoverBackground': withOpacity(palette.foregroundDim, 0.4),
    'scrollbarSlider.activeBackground': withOpacity(palette.primary, 0.5),

    // Badge
    'badge.background': palette.primary,
    'badge.foreground': palette.background,

    // Misc
    'focusBorder': palette.primary,
    'sash.hoverBorder': palette.primary,
    'widget.shadow': transparent,
    'scrollbar.shadow': transparent,

    // Breadcrumb
    'breadcrumb.background': palette.background,
    'breadcrumb.foreground': palette.foregroundDim,
    'breadcrumb.focusForeground': palette.foreground,
    'breadcrumb.activeSelectionForeground': palette.foregroundBright,

    // Git Decorations
    'gitDecoration.modifiedResourceForeground': palette.modified,
    'gitDecoration.deletedResourceForeground': palette.deleted,
    'gitDecoration.untrackedResourceForeground': palette.added,
    'gitDecoration.ignoredResourceForeground': palette.ignored,
    'gitDecoration.conflictingResourceForeground': palette.conflicting,

    // Editor Gutter
    'editorGutter.background': palette.background,
    'editorGutter.modifiedBackground': withOpacity(palette.primary, 0.8),
    'editorGutter.addedBackground': withOpacity(palette.added, 0.8),
    'editorGutter.deletedBackground': withOpacity(palette.deleted, 0.8),

    // Overview Ruler (scrollbar indicators)
    'editorOverviewRuler.modifiedForeground': palette.primary,
    'editorOverviewRuler.addedForeground': palette.added,
    'editorOverviewRuler.deletedForeground': palette.deleted,
    'editorOverviewRuler.errorForeground': palette.error,
    'editorOverviewRuler.warningForeground': palette.number,
    'editorOverviewRuler.infoForeground': palette.primary,
    'editorOverviewRuler.bracketMatchForeground': palette.primary,

    // Diff Editor
    'diffEditor.insertedLineBackground': withOpacity(palette.added, 0.18),
    'diffEditor.removedLineBackground': withOpacity(palette.deleted, 0.18),
    'diffEditor.insertedTextBackground': withOpacity(palette.added, 0.28),
    'diffEditor.removedTextBackground': withOpacity(palette.deleted, 0.28),

    // Minimap
    'minimap.selectionHighlight': withOpacity(palette.primary, 0.5),
    'minimap.errorHighlight': palette.error,
    'minimap.warningHighlight': palette.number,
    'minimap.findMatchHighlight': withOpacity(palette.keyword, 0.5),

    // Peek View
    'peekView.border': palette.primary,
    'peekViewEditor.background': palette.surfaceDark,
    'peekViewEditor.matchHighlightBackground': withOpacity(palette.keyword, 0.3),
    'peekViewResult.background': palette.surface,
    'peekViewResult.fileForeground': palette.foregroundBright,
    'peekViewResult.lineForeground': palette.foreground,
    'peekViewResult.matchHighlightBackground': withOpacity(palette.keyword, 0.3),
    'peekViewResult.selectionBackground': withOpacity(palette.primary, 0.2),
    'peekViewResult.selectionForeground': palette.foregroundBright,
    'peekViewTitle.background': palette.surface,
    'peekViewTitleDescription.foreground': palette.foregroundDim,
    'peekViewTitleLabel.foreground': palette.foregroundBright,

    // Debug
    'debugToolBar.background': palette.overlay,
    'debugExceptionWidget.background': palette.overlay,
    'debugExceptionWidget.border': palette.error,
    'editor.focusedStackFrameHighlightBackground': withOpacity(palette.added, 0.2),
    'editor.stackFrameHighlightBackground': withOpacity(palette.number, 0.2),

    // Merge Conflicts
    'merge.currentHeaderBackground': withOpacity(palette.added, 0.3),
    'merge.currentContentBackground': withOpacity(palette.added, 0.18),
    'merge.incomingHeaderBackground': withOpacity(palette.primary, 0.3),
    'merge.incomingContentBackground': withOpacity(palette.primary, 0.18),
    'merge.border': palette.border,

    // Terminal ANSI
    'terminal.ansiBlack': palette.surfaceDark,
    'terminal.ansiRed': palette.red,
    'terminal.ansiGreen': palette.green,
    'terminal.ansiYellow': palette.yellow,
    'terminal.ansiBlue': palette.blue,
    'terminal.ansiMagenta': palette.magenta,
    'terminal.ansiCyan': palette.primary,
    'terminal.ansiWhite': palette.foreground,
    'terminal.ansiBrightBlack': palette.comment,
    'terminal.ansiBrightRed': lighten(palette.red, 0.15),
    'terminal.ansiBrightGreen': lighten(palette.green, 0.15),
    'terminal.ansiBrightYellow': lighten(palette.yellow, 0.15),
    'terminal.ansiBrightBlue': lighten(palette.blue, 0.15),
    'terminal.ansiBrightMagenta': lighten(palette.magenta, 0.15),
    'terminal.ansiBrightCyan': lighten(palette.primary, 0.15),
    'terminal.ansiBrightWhite': palette.foregroundBright,
  }

  const tokenColors = [
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.comment,
      },
    },
    {
      name: 'Variables',
      scope: ['variable', 'string constant.other.placeholder'],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: 'Colors',
      scope: ['constant.other.color'],
      settings: {
        foreground: palette.foregroundBright,
      },
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: palette.error,
      },
    },
    {
      name: 'Keyword, Storage',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Operator, Misc',
      scope: [
        'keyword.control',
        'constant.other.color',
        'punctuation',
        'meta.tag',
        'punctuation.definition.tag',
        'punctuation.separator.inheritance.php',
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
        'punctuation.section.embedded',
        'keyword.other.template',
        'keyword.other.substitution',
      ],
      settings: {
        foreground: palette.operator,
      },
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Function, Special Method',
      scope: [
        'entity.name.function',
        'meta.function-call',
        'variable.function',
        'support.function',
        'keyword.other.special-method',
      ],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Block Level Variables',
      scope: ['meta.block variable.other'],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'Other Variable, String Link',
      scope: ['support.other.variable', 'string.other.link'],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
      scope: [
        'constant.numeric',
        'constant.language',
        'support.constant',
        'constant.character',
        'constant.escape',
        'variable.parameter',
        'keyword.other.unit',
        'keyword.other',
      ],
      settings: {
        foreground: palette.number,
      },
    },
    {
      name: 'String, Symbols, Inherited Class, Markup Heading',
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'entity.other.inherited-class',
        'markup.heading',
        'markup.inserted.git_gutter',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
      ],
      settings: {
        foreground: palette.string,
      },
    },
    {
      name: 'Class, Support',
      scope: [
        'entity.name',
        'support.type',
        'support.class',
        'support.other.namespace.use.php',
        'meta.use.php',
        'support.other.namespace.php',
        'markup.changed.git_gutter',
        'support.type.sys-types',
      ],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: 'Entity Types',
      scope: ['support.type'],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'CSS Class and Support',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
      ],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'Sub-methods',
      scope: [
        'entity.name.module.js',
        'variable.import.parameter.js',
        'variable.other.class.js',
      ],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: 'Language methods',
      scope: ['variable.language'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.function,
      },
    },
    {
      name: 'entity.name.method.js',
      scope: ['entity.name.method.js'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.function,
      },
    },
    {
      name: 'meta.method.js',
      scope: [
        'meta.class-method.js entity.name.function.js',
        'variable.function.constructor',
      ],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'HTML Attributes',
      scope: [
        'text.html.basic entity.other.attribute-name.html',
        'text.html.basic entity.other.attribute-name',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: palette.type,
      },
    },
    {
      name: 'CSS Classes',
      scope: ['entity.other.attribute-name.class'],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: "CSS ID's",
      scope: ['source.sass keyword.control'],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Inserted',
      scope: ['markup.inserted'],
      settings: {
        foreground: palette.added,
      },
    },
    {
      name: 'Deleted',
      scope: ['markup.deleted'],
      settings: {
        foreground: palette.deleted,
      },
    },
    {
      name: 'Changed',
      scope: ['markup.changed'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: {
        foreground: palette.operator,
      },
    },
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape'],
      settings: {
        foreground: palette.operator,
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Decorators',
      scope: [
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: palette.function,
      },
    },
    {
      name: 'ES7 Bind Operator',
      scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.constant,
      },
    },
    // JSON Key Levels
    {
      name: 'JSON Key - Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.string,
      },
    },
    // Markdown
    {
      name: 'Markdown - Plain',
      scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: ['text.html.markdown markup.inline.raw.markdown'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Markdown - Heading',
      scope: [
        'markdown.heading',
        'markup.heading | markup.heading entity.name',
        'markup.heading.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.constant,
      },
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold string'],
      settings: {
        fontStyle: 'bold',
        foreground: palette.constant,
      },
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
        foreground: palette.number,
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {
        foreground: palette.comment,
      },
    },
    {
      name: 'Markup - Quote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown - Link',
      scope: ['string.other.link.title.markdown'],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Markdown - Link Anchor',
      scope: ['constant.other.reference.link.markdown'],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: 'Markup - Raw Block',
      scope: ['markup.raw.block'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Markdown - Fenced Code Block',
      scope: ['punctuation.definition.fenced.markdown'],
      settings: {
        foreground: palette.comment,
      },
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['variable.language.fenced.markdown'],
      settings: {
        foreground: palette.comment,
      },
    },
    {
      name: 'Markup - Table',
      scope: ['markup.table'],
      settings: {
        foreground: palette.foreground,
      },
    },
  ]

  return {
    name: palette.name,
    type: 'dark',
    colors,
    tokenColors,
  }
}
