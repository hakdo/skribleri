const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('img');
  
    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');
    eleventyConfig.addWatchTarget('js');
    eleventyConfig.addWatchTarget('img');
    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'Europe/Oslo' }).toLocaleString(
          DateTime.DATE_SHORT
        );
      });
      eleventyConfig.addFilter('pastFuture', (datestring) => {
        var parsedDate = DateTime.fromISO(datestring);
        var now = DateTime.now();
        return parsedDate > now;
      });
      eleventyConfig.addFilter('parent', (stemPath) => {
        var mystem = stemPath.split("/");
        var outpath = mystem.slice(0,mystem.length-1).join("/");
        return outpath
      });
  };