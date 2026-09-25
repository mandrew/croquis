The pagination component maintains a number of pagination links.

When there are more than ten pages, truncation should occur.

### Truncation

- Use the current pages as a centre point for the truncation window
- Never truncate the first or last page
- Show "Previous" and/or "Next" buttons

The truncation window is a sliding window which can only contain ten items. The first and last pages are always at the start and end, and the middle eight items are calculated forwards and backwards from the current active page.

Ellipsis will appear in place of links which fall outside of the truncation window. They can appear in slot two after the first page, and/or in slot nine before the last page. This is to always keep the pages immediately before and after the current page visible for better usability.

Examples:

- [1] 2 3 4 5 6 7 8 … 13
- 1 … 4 5 [6] 7 8 9 … 13
- 1 … 6 7 8 9 10 11 12 [13]

### Previous and Next buttons

The previous button:

- Should not rendered when on the first page
- Links to the page immediately before the current page

The next button:

- Should not rendered when on the last page
- Links to the page immediately after the current page