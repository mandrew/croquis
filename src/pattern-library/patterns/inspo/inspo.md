A design component that manipulates the heading (and optional image), but still keeps accessibility.

Some really important factors about this pattern are the following: 
1. The heading is visually hidden 
2. This heading should be broken on to two lines, which are in turn, distributed by CSS grid 
3. Try to keep the heading short and snappy 
4. Make sure the image fits nicely in a 16/9 aspect ratio

## Custom properties

Define the below properties on `.inspo` to update component styles

```css
--inspo-image-border-radius
--inspo-font-size
--inspo-font-weight
--inspo-line-height
```

Define the below properties to move the top and bottom visual headings

```css
--inspo-heading-transform-first
--inspo-heading-transform-last
```