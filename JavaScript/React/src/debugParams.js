const { log } = require('console');

function debugParams(dir, fileName, programToRun, entries) {
    log(`Searching in: ${dir}`);
    log(`Searching for: ${fileName}`);
    log(`Program to run: ${programToRun}`);
    log(`Entries: ${entries}`);
}
exports.debugParams = debugParams;
