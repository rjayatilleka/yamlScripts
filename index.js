yaml = require('js-yaml')
fs   = require('fs')

console.log('working')

var doc = yaml.safeLoad(fs.readFileSync('/Users/rjayatilleka/Dropbox/code/emcee/src/Patching/ls2015.yaml', 'utf8'));
console.log(doc);
