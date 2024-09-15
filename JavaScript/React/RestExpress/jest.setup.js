const {defaults} = require('jest-config');

require('@testing-library/jest-dom');
/** @type {import('jest').Config} */
const config = {
    verbose: true,
    "global.IS_REACT_ACT_ENVIRONMENT": true,
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
};

module.exports = config;