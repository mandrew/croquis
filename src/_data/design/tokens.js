var theme = process.env.THEME || 'default';

if (theme === "") {
  theme = "default";
  console.log(theme);
}

const colors = require(`../../design-tokens/${theme}/colors.json`);
const fonts = require(`../../design-tokens/${theme}/fonts.json`);
const spacing = require(`../../design-tokens/${theme}/spacing.json`);
const textSizes = require(`../../design-tokens/${theme}/text-sizes.json`);
const textLeading = require(`../../design-tokens/${theme}/text-leading.json`);
const textWeights = require(`../../design-tokens/${theme}/text-weights.json`);

module.exports = () => {
  return {
    colors: colors.items,
    textSizes: textSizes.items,
    textLeading: textLeading.items,
    textWeights: textWeights.items,
    spacing: spacing.items,
    fonts: fonts.items
  };
};
