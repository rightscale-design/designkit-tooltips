var fs = require('fs');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');
var module = require('../package.json');

// Autoprefix css
fs.readFile('./dist/temp/_temp.css', (err, css) => {
  postcss([autoprefixer])
    .process(css, {
      from: './dist/temp/_temp.css',
      to: './dist/app.css'
    })
    .then(result => {
      fs.writeFileSync('./dist/'+module.name+'.css', result.css);
      console.log('Success!');
    });
});