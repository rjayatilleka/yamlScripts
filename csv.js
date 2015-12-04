yaml = require('js-yaml')
argv = require('minimist')(process.argv.slice(2))

var content = ''
process.stdin.resume()
process.stdin.on('data', function(buf) {
  content += buf.toString()
})


process.stdin.on('end', function() {
  var doc = yaml.safeLoad(content)

  if (argv.minus) {
    argv.inc = 0 - argv.inc
  }

  console.log('channels: %d', doc.channels)

  for (var i = argv.start; i < argv.end; i++) {
    s = i + '';

    if (doc[s]) {
      for (var j = 0; j < doc[s].length; j++) {
        doc[s][j] += argv.inc
        //console.log(s, ': ', doc[s])
        console.log(s + ':', doc[s])
      }
    }
  }

  //console.log(yaml.safeDump(doc, {flowLevel: 1}))
})


