var python = require('node-python');

var mh = python.import('MakeHeadings');
var result = mh.bar('../PhoneGap.html')
console.log(result);



