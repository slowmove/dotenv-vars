var fs = require('fs'),
    path = require('path'),
    dir = path.dirname(require.main.filename),
    envfilepath = dir + path.sep + '.env';

var envFile = fs.readFileSync(envfilepath, 'utf8');
var envArray = envFile.split('\n');

envArray.forEach(function(envKeyVal) {
    if(envKeyVal.length == 0 || envKeyVal.indexOf('=') == -1 || envKeyVal.indexOf('#') > -1) return;
    var key = envKeyVal.split('=')[0].trim(),
        val = envKeyVal.split('=')[1].trim();
    process.env[key] = val;        
}, this);