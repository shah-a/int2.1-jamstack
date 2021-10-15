const { DateTime } = require('luxon');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/style.css');

  eleventyConfig.addShortcode('year', () => `${new Date().getUTCFullYear()}`);

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: { input: 'src' }
  }
};
