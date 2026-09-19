Hero is a component for displaying a large box or image with a title and description. Useful as an page introduction, with buttons calling the user to accomplish main tasks.

The image appears as a background image and could be a file (jpg etc) or svg.

## Styles

You can add different classes on the hero block by defining `styles`.

Setting center on both `contentStyles` and `actions`, centers all text and actions.

```json
  "styles": "center"
```

## Custom properties

You can override the following attributes on the `.hero` class to provide different styles through these custom properties:

```css
  --hero-min-height
  --hero-border-radius
  --hero-grid-area
  --hero-content-align
  --hero-display
  --hero-overlay-gradient
  --hero-overlay-opacity
```

## Data attribute

The pattern adds `data-hero-variant` when `variant` is supplied. That
attribute is the hook used by theme-specific CSS overrides.

```json
  "context": {
    "variant": "hero-theme-name-goes-here"
  }
```

## Content

### Heading

The heading configuration ia a **mandatory** flexible title, that has a level variable which you can change depending on where your hero appears, so the correct heading hierarchy is used. By default the heading level will be 2.

```json
  "heading": {
    "text": "Build something remarkable",
    "level": "1"
  },
```

### Body text
`intro` and `description` are defined in the template so you can have two rows of content. Both are optional and use `styles` so you can change the way the text appears.

```json
  "intro": {
    "text": "That will change the way you work.",
    "styles": "text-step-2"
  },
```
