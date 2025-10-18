const colors = require('../../design-tokens/bloom/colors.json');
const fonts = require('../../design-tokens/bloom/fonts.json');
const spacing = require('../../design-tokens/bloom/spacing.json');
const textSizes = require('../../design-tokens/bloom/text-sizes.json');
const textLeading = require('../../design-tokens/bloom/text-leading.json');
const textWeights = require('../../design-tokens/bloom/text-weights.json');

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
