var static = require('node-static');

/*
 * Create a node-static server instance to serve the './Site' folder
 * You'll need to run node install or npm install node-static
 * See: https://github.com/cloudhead/node-static
 */
var file = new static.Server('./Site');
var port = 30025;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();	
}).listen(port);
console.log("Listing on port:", port);