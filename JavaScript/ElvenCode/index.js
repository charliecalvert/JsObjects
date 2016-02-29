exports.printMsg = function() {
  console.log("This is a message from the demo package");
};

exports.elfUtils = require('./elf-utils');

exports.walker = require('./walker');