var argv     = require('minimist')(process.argv.slice(2));
var Imagemin = require('imagemin');

new Imagemin()
  .src(argv.directory + '/**/*.{gif,jpg,png,svg}')
  .dest(argv.output)
  .run();
