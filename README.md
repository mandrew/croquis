# CUBE CSS Boilerplate 

🚨 **PLEASE READ THIS EXPLAINER**: https://piccalil.li/blog/a-css-project-boilerplate 🚨

## Contributing

This is a boilerplate that **works for us**, here at [Set Studio](https://set.studio/), so please don’t propose changes. If you do however find a bug, please raise an issue first before a pull request. Any pull request that is raised without an issue will be closed automatically.

Issues will also be closed automatically if they’re opinions rather than bug reports. 

Thank you! 

## Getting started 

After running `npm install` run `npm start`. This will serve up a local version of the HTML page and watch for CSS changes. 

The task doesn’t currently watch for changes on the HTML document though. This is because we normally drop the CSS system into various types of projects in the studio. 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Changes
Tailwind has been removed and this template uses [postcss-design-token-utils](https://github.com/saneef/postcss-design-token-utils), a postcss implementation of [gorko](https://github.com/hankchizljaw/gorko.git)

postcss-design-token-utils:
--font-regular      change to --font-weight-regular
@media screen(lg)   change to 