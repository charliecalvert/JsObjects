// logger.mjs
function log(message) {
    const timestamp = new Date().toISOString();
    // eslint-disable-next-line no-console
    console.log(`${timestamp}: ${message}`);
}

module.exports = { log };
