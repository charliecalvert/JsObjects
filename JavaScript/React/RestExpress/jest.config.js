/** @type {import('jest').Config} */
module.exports = {
    // ... your configuration options
    // "global.IS_REACT_ACT_ENVIRONMENT": true,
    "testRegex": "((\\.|/*.)(spec|test))\\.js?$",
    verbose: true,
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        html: '<html lang="zh-cmn-Hant"></html>',
        url: 'https://jestjs.io/',
        userAgent: 'Agent/007',
    },
};