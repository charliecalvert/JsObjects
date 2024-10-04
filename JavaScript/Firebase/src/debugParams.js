const { log } = require('console');

function debugParams(dir, entries) {
    log(`Searching in: ${dir}`);
    log(`Entries: ${entries}`);
}

exports.debugParams = debugParams;
