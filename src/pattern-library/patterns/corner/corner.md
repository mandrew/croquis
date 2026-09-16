# Corner

The `corner` block is a highly customisable presentation component. By default, it
is a `100px` square with a single light triangle. Add `data-corner-theme` when a
second dark or themed clip is needed. It remains decorative unless text or
interactive content is added.

It can be configured as follows:

| Custom property            | Default value              |
| -------------------------- | -------------------------- |
| `--corner-size`            | `100px`                    |
| `--corner-primary-color`   | `var(--color-light)`       |
| `--corner-secondary-color` | `var(--color-dark)`        |
| `--corner-offset`          | `30%`                      |
| `--corner-transition`      | `var(--transition-bounce)` |

For example:

```html
<div
  class="my-element"
  style="--corner-primary-color: var(--color-primary); --corner-size: 50vh; --corner-offset: 50%;"
>
  <span class="corner" aria-hidden="true"></span>
</div>
```
## Positioning a corner

The corner is positioned relative to itself by default. Add `data-corner-docked`
to place it in the block-start and inline-end of its nearest positioned parent:

```html
<div style="position: relative; aspect-ratio: 1;">
  <span class="corner" data-corner-docked aria-hidden="true"></span>
</div>
```

Add `data-corner-plain-docked` to the parent item, adds a plain corner to the
inset-block-start inset-inline-end (top right) of the parent, so long as the
parent is positioned `relative`:

```html
<div class="parent-of-corner" data-corner-plain-docked>...</div>
```

**Note:** Adding `data-corner-docked` or `data-corner-plain-docked` has -1 applied to
mask the sub-pixel/rounding mismatch rendering gap, which is sometime seen on the
corners. The arrow might bump out of the box, so adding `overflow: hidden;`
removes the -1.

## Themes and colors

Use the documented custom properties for full control:

```html
<span
  class="corner"
  data-corner-docked
  style="--corner-primary-color: var(--color-primary); --corner-secondary-color: var(--color-dark);"
  aria-hidden="true"
></span>
```

The existing `data-corner-theme="primary"` attribute enables the second clip and
uses the primary token for it. The `data-corner-color` values `light`, `dark`, and
`primary` provide convenient base color presets. A themed corner can still use the
custom properties for full control:

```html
<span
  class="corner"
  data-corner-theme="primary"
  style="--corner-primary-color: var(--color-light); --corner-secondary-color: var(--color-primary);"
  aria-hidden="true"
></span>
```

## Text

Use `data-corner-text` with `.corner` for text inside the corner:

```html
<p class="corner" data-corner-text>
  <span>Last few spots</span>
</p>
```

The text treatment can be customised with `--corner-text-background`,
`--corner-text-color`, `--corner-text-size`, `--corner-text-weight`, and
`--corner-text-padding`.

The existing card alert pattern can use the same `.corner-text` treatment inside
its positioned card container:

```html
<div class="card">
  <p class="corner" data-corner-text>
    <span>Last few spots</span>
  </p>
</div>
```

The text element is decorative by default. If it contains an interactive control,
ensure that control remains keyboard accessible and has an accessible name.

## Interaction and animation

Add `data-corner-interactive` to expand the offset on hover or focus within:

```html
<span class="corner" data-corner-interactive aria-hidden="true"></span>
```

Add `data-corner-animation="bounce"` for an optional clip-path animation. This is
most useful with a themed corner because both clips animate. The animation
automatically stops when `prefers-reduced-motion: reduce` is active.
