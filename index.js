yaml = require('js-yaml')
fs   = require('fs')
argv = require('minimist')(process.argv.slice(2))

console.log('working')

var doc = yaml.safeLoad(fs.readFileSync(argv.input, 'utf8'));
console.log(doc);


