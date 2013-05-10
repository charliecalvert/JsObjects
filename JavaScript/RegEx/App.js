var fs = require('fs');

var data = String(fs.readFileSync('NpcGrid235.json'));
var result = data.replace(/\[\"/g, '\n\t[');
result = result.replace(']]', ']\n]');
console.log(result);