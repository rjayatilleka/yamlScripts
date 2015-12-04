yaml = require('js-yaml')
argv = require('minimist')(process.argv.slice(2))

var content = ''
process.stdin.resume()
process.stdin.on('data', function(buf) {
  content += buf.toString()
})
process.stdin.on('end', function() {
  //var doc = yaml.safeLoad(fs.readFileSync(argv.input, 'utf8'))
  var doc = yaml.safeLoad(content)
  console.log(doc)
})


