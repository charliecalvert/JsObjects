/**
 * Created by charlie on 1/18/16.
 */

var setupMarked = require('./setup-marked');
var utils = require('./utils');
var argv = require('yargs')
    .usage('Usage: $0 -f')
    .demand('f')
    .alias('f', 'filename')
    .nargs('f', 1)
    .describe('f', 'Load a file')
    .help('h')
    .alias('h', 'help')
    .argv;

console.log("File:", argv.f);
setupMarked.getSingleFile(utils.fileNameFromPath(argv.f), argv.f, function(message, html) {
    console.log(message, html);
});

