yaml = require('js-yaml')
argv = require('minimist')(process.argv.slice(2))

var content = ''
process.stdin.resume()
process.stdin.on('data', function(buf) {
  content += buf.toString()
})

process.stdin.on('end', function() {
  var doc = yaml.safeLoad(content);

  argv.shift = 0 - argv.shift
  if (argv.shift > 0) {
    grabFromAhead(doc);
  }
  else {
    grabFromBehind(doc);
  }

  console.log(yaml.safeDump(doc));
})

// Moves output back
function grabFromAhead(doc) {
  for (var i = argv.start; i < argv.end; i++) {
    s = i + '';

    if (doc[s]) {
      t = '' + (i + argv.shift)
      if (doc[t]) {
        doc[s] = doc[t]
      }
    }
  }
}

// Moves output forward
function grabFromBehind(doc) {
  for (var i = argv.end - 1; i >= argv.start; i--) {
    s = i + '';

    if (doc[s]) {
      t = '' + (i + argv.shift)
      if (doc[t]) {
        doc[s] = doc[t]
      }
    }
  }
}
