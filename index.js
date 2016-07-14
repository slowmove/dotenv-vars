var fs = require('fs'),
    path = require('path'),
    dir = path.dirname(require.main.filename);

var envFile = fs.readFileSync(dir + path.sep + '.env', 'utf8');
var envArray = envFile.split('\n');

envArray.forEach(function(envKeyVal) {
    if(envKeyVal.length == 0) return;
    var key = envKeyVal.split('=')[0].trim(),
        val = envKeyVal.split('=')[1].trim();
    process.env[key] = val;
}, this);