// logger.mjs
export function log(message) {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${message}`);
}