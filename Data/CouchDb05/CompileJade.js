var jade = require('jade');

var html = jade.renderFile('views/layout.jade', { pretty: true });

console.log(html);
