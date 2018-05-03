var fs = require('fs');
var module = require('../package.json');

// read compiled stylesheet
var readStyle = fs.createReadStream('./dist/'+module.name+'.css');

// write stylesheet to docs folder
var writeStyle = fs.createWriteStream('./docs/docs.css');

readStyle.pipe(writeStyle);