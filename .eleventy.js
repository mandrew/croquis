require('dotenv').config({override: true});
const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = config => {
  // Creates a global variable for the current __dirname to make including and
  // working with files in the pattern library a little easier
  global.__basedir = __dirname;

  config.addPlugin(svgSprite, {
    path: "./src/images/", // relative path to SVG directory
  });

  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/js');

  if(process.env.NODE_ENV !== 'production') {
    config.setUseGitIgnore(false); // only run this for development env
  }

  config.addPairedAsyncShortcode('svg', async function (filename, svgOptions = {}) {
    const isNjk = svgOptions.hasOwnProperty('isNjk') ? svgOptions.isNjk : true;
    const filePath = `src/_includes/assets/svg/${filename}.svg${isNjk ? '.njk' : ''}`;
    const engine = svgOptions.hasOwnProperty('engine') ? svgOptions.engine : (isNjk ? 'njk' : 'html'); // HTML engine for vanilla SVG if none is provided
    const content = config.nunjucksAsyncShortcodes.renderFile(filePath, svgOptions, engine);
    return content;
  });

  config.addHandlebarsHelper("uppercase", function(myStringArg) {
    return myStringArg.toUpperCase();
  });

  config.addShortcode("user", function(firstName) {
    return firstName.toUpperCase();
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
