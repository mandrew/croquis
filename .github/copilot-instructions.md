# Croquis Copilot Instructions

## Project Purpose

Croquis is an Eleventy 1 pattern library built with Nunjucks, PostCSS, CUBE CSS,
and JSON design tokens. It builds static pages into `dist/` and documents reusable
patterns, layout compositions, utilities, and theme tokens.

## Reference Documentation

- `README.md`: project setup, commands, theme setup, and CUBE CSS background.
- `src/pattern-library/index.md`: pattern-library usage and pattern-generator arguments.
- `postcss.config.js`: the source of truth for token processing, generated utility
  classes, and custom-media breakpoints.
- `.eleventy.js`: source/output directories, passthrough assets, and the SVG shortcode.

Run `npm run build` after changes to templates, tokens, CSS, or build configuration.
Run `THEME=themeName npm run build` when changing shared
global styles, token processing, or theme-specific code.

## Theme System

- The active theme is selected by `THEME` in `.env`; it defaults to `default` when unset.
  The local `.env` value takes precedence over an inherited shell `THEME` value.
- Valid themes have matching directories in `src/design-tokens/<theme>/` containing:
  `colors.json`, `fonts.json`, `spacing.json`, `text-leading.json`, `text-sizes.json`,
  `text-weights.json`, and `viewports.json`.
- Use generated token names rather than literal values. Examples include
  `var(--color-primary)`, `var(--space-m)`, `var(--size-step-2)`, and
  `var(--font-weight-bold)`.
- `src/_data/design/tokens.js` provides active-theme token data to the pattern-library
  pages. Keep its expected token files aligned with the PostCSS configuration.
- New theme-specific global styling belongs in `src/css/global/<theme>/`. Do not put
  brand-specific rules in the root global files.

## CSS Architecture

The common CSS foundation is deliberately theme-neutral:

- `global/reset.css`: reset and baseline browser normalization.
- `global/fonts.css`: local font-face declarations.
- `global/variables.css`: token generation plus shared custom-property defaults.
- `global/styles.css`: shared element defaults for typography, media, forms, tables,
  focus, and selection.

Each `global*.css` entry point is a complete bundle. A page must load exactly one:
`global.css` for the default theme, or `global-<theme>.css` for a named theme. Add
theme-specific overrides within that bundle rather than loading `global.css` first.

`npm run css` compiles top-level files in `src/css/*.css` plus each theme's
`global/<theme>/pattern-library.css`, preserving that nested path in `dist/css/`.
Every theme, including `default`, has its own `global/<theme>/pattern-library.css`
file (empty if the theme needs no pattern-library overrides). The pattern-library
layout links it directly as `/css/global/{{ env.theme }}/pattern-library.css`; other
files in subfolders are partials imported via `@import`/`@import-glob`.

Keep CSS in its CUBE layer:

- `blocks/`: self-contained UI components. A block may configure compositions but
  should not duplicate their layout rules.
- `compositions/`: context-independent layout primitives such as `flow`, `grid`,
  `sidebar`, `switcher`, `wrapper`, and `frame`.
- `utilities/`: single-purpose opt-in helpers. Keep them small and token-driven; do
  not add broad framework-style utility sets or redefine composition class names.
- Use logical properties (`margin-block`, `padding-inline`, `border-inline-start`)
  for new layout and spacing rules.

## Pattern Library Rules

- Pattern source lives at `src/pattern-library/patterns/<pattern>/`. Preserve matching
  names for the pattern directory and its primary `.njk`/`.json` files.
- Variants may be defined in the parent JSON `variants` array or as directories under
  `variants/`. A directory-based variant takes precedence when both use the same name.
- `src/lib/code-sample.js` discovers patterns, renders them for documentation and
  previews, and exposes them through `design.patterns`.
- Reusable pattern markup belongs in the pattern directory; page structure belongs in
  `src/_includes/layouts/`; reusable Nunjucks helpers belong in `src/_includes/macros/`.

## Source Rules

- Source pages are in `src/`; generated output is `dist/` and must not be edited.
- Nunjucks is the template engine for Markdown, data, and HTML.
- `src/_data/env.js` exposes the active theme to templates as `env.theme`.
- `src/_data/design/sidebar.js` controls the pattern-library sidebar navigation.

## Editing Guidance

- Follow existing formatting: two-space indentation in Nunjucks and JavaScript;
  preserve CSS file style unless touching the local rule.
- Prefer existing tokens, blocks, compositions, and Nunjucks macros over new parallel
  abstractions.
- Do not edit `dist/`, `node_modules/`, or generated token utility output.
- Retain accessible semantic markup, meaningful `alt` text, and visible `:focus-visible`
  treatment when adding or changing patterns.
- Keep changes scoped; do not mix unrelated formatting or theme changes with a feature.
