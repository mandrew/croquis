// const postcssBundler = require('@csstools/postcss-bundler');
// const postcssMinify = require('@csstools/postcss-minify');
const postcssPresetEnv = require('postcss-preset-env');
const postcssProcessTokens = require("postcss-design-token-utils");
const postcssImport = require("postcss-import");
const postcssImportExtGlob = require("postcss-import-ext-glob");
// const postcss = require('postcss');
// const postcssJs = require('postcss-js');

require('dotenv').config({override: true});
var theme = process.env.THEME || 'default';

//const darkColorTokens = require("./src/design-tokens/colors-dark.json");
const colorTokens = require(`./src/design-tokens/${theme}/colors.json`);
const fontTokens = require(`./src/design-tokens/${theme}/fonts.json`);
const spacingTokens = require(`./src/design-tokens/${theme}/spacing.json`);
const fontLeadingTokens = require(`./src/design-tokens/${theme}/text-leading.json`);
const fontSizeTokens = require(`./src/design-tokens/${theme}/text-sizes.json`);
const fontWeightTokens = require(`./src/design-tokens/${theme}/text-weights.json`);
const viewportTokens = require(`./src/design-tokens/${theme}/viewports.json`);

const tokensToObject = require("./src/css-utils/tokens-to-object.js");
const clampGenerator = require("./src/css-utils/clamp-generator.js");

const color = tokensToObject(colorTokens.items);
//const darkColor = tokensToObject(darkColorTokens.items);
const font = tokensToObject(fontTokens.items);
const fontWeight = tokensToObject(fontWeightTokens.items);
const space = tokensToObject(clampGenerator(spacingTokens.items));
const size = tokensToObject(clampGenerator(fontSizeTokens.items));
const leading = tokensToObject(fontLeadingTokens.items);
//const viewMin = tokensToObject(viewportTokens.min);

const tokens = {
	color,
	//darkColor,
	font,
	fontWeight,
	size,
	space,
	leading,
};

const config = {
	plugins: [
		//postcssBundler(),
		//postcssMinify(),
		postcssImportExtGlob,
		postcssImport,
		postcssProcessTokens({
			tokens,
			breakpoints: {
				sm: `${viewportTokens.min}px`,
				md: `${viewportTokens.mid}px`,
				lg: `${viewportTokens.large}px`,
        xl: `${viewportTokens.max}px`
			},
			// customProperties: [
			// 	{
			// 		id: "darkColor",
			// 		prefix: "color",
			// 		group: "dark",
			// 	},
			// ],
			utilityClasses: [
				{
					id: "color",
					prefix: "text",
					property: "color",
					responsiveVariants: true,
				},
				{ id: "color", prefix: "bg", property: "background-color" },
				{ id: "font", prefix: "font", property: "font-family" },
				{ id: "fontWeight", prefix: "font", property: "font-weight" },
				{ id: "size", prefix: "text", property: "font-size" },
				{ id: "space", prefix: "flow-space", property: "--flow-space" },
				{ id: "leading", prefix: "leading", property: "leading" },
        { id: "space", prefix: "region-space", property: "--region-space"},
        { id: "space", prefix: "gutter", property: "--gutter"},
        { id: "color", prefix: "indent-color", property: "--indent-color"},
				{ id: "space", prefix: "py", property: "padding-block" },
				{ id: "space", prefix: "px", property: "padding-inline" },
				{ id: "space", prefix: "mt", property: "margin-top"},
			],
		}),
		postcssPresetEnv({
      stage: 2
    }),
	],
};

module.exports = config;