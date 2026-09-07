# Croquis
Built using the CUBE CSS Boilerplate 

🚨 **PLEASE READ THIS EXPLAINER**: https://piccalil.li/blog/a-css-project-boilerplate 🚨

## Contributing

If you find a bug, please raise an issue first before a pull request. Any pull request that is raised without an issue will be closed automatically.

Issues will also be closed automatically if they’re opinions rather than bug reports. 

Thank you! 

## Getting started 

After running `npm install` run `npm start`. This will serve up a local version of the HTML page and watch for CSS changes.

Once npm is running and the url is accessible, visit the folder(s) under src e.g. http://localhost:8080/themeName to see the template.

## Create a new pattern or variant in pattern library

More information in src/pattern-library/index.md

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Changes from CUBE CSS Boilerplate
Tailwind has been removed and this template uses [postcss-design-token-utils](https://github.com/saneef/postcss-design-token-utils), a postcss implementation of [gorko](https://github.com/hankchizljaw/gorko.git)

postcss-design-token-utils:
--font-regular      change to --font-weight-regular
@media screen(X)    change to @media screen(--X) and add @custom-media --X (min-width: XXXpx);

## Theme
### Add a theme variable
In the file `.env` add the theme variable `THEME="{themename}"` e.g. THEME="default". This will also be the folder name for your theme. 
### Create your folders
Create new folder using your theme name `themename` in the following sections and copy the files under a previous theme folder:
- `design-tokens/themename`
- `_includes/icons/themename`
- `css/global/themename`
For a new global.css file using the theme changes, copy the file `css/global.css` and create a new file called `css/global-themename.css`
- `css/global-themename.css`
Remove the theme from git (if need be)

## Pattern library
_data/design/*.js files are used to change the Pattern library. Update the links if you want to change to a new theme
update extraCSSFiles if you use a new theme