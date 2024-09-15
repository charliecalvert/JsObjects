const { defaults } = require('jest-config');
// require('@testing-library/jest-dom/extend-expect');
/** @type {import('jest').Config} */
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
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '\\.css$': 'jest-transform-css',
    },
   /*  compilerOptions: {
        "types": ["@testing-library/jest-dom"]
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], */
};