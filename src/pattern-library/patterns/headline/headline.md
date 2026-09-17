The `headline` block is a responsive heading row. It aligns the heading and
optional text at opposite ends, with baseline alignment and a token-based gutter.

Use the `repel` composition to push the optional text to the right

## Base pattern

The base context accepts a structured heading:

```json
{
  "context": {
    "heading": {
      "isHeader": true,
      "text": "Heading text",
      "utilities": "mt-zero"
    },
  }
}
```

`heading.isHeader` controls the element type:

- `true` renders an `h2`. The html is flexible so you can also use `h3` or `h4`
by editing the html.
- `false` renders a `p`, useful when the text is supporting copy rather than a
section heading.

`heading.utilities` is applied directly to the heading or paragraph as a class,
while the top-level `utilities` value is applied to the headline container.
This allows a variant to add composition utilities such as `repel items-end`
without changing the block CSS.

The labelled icon is optional and accepts utility classes plus display text:

```json
{
  "context": {
    "utilities": "repel",
    "labelledIcon": {
      "utilities": "text-light",
      "text": "Scroll for more"
    }
  }
}
```

The pattern adds `data-headline-variant` when `variant` is supplied. That
attribute is the hook used by theme-specific CSS overrides.

## Custom properties

You can override the following attributes to provide the large bottom spacing,
border, display size, line height, and weight through these custom properties:

```css
--headline-padding-end
--headline-border
--headline-font-size
--headline-line-height
--headline-font-weight
```

The base block remains usable without those variables because the corresponding
properties are intentionally unset until a theme or variant supplies them.
