#!/usr/bin/env node

const gulp = require('gulp');
const { exec } = require('child_process');
const { log } = require('./logger');

if (!log) {
    throw new Error('Logger not found');
}

// List of folder names
const folders = [
    'ElfExpressServer',
    'MaterialBrowserify',
    'ReactEs6',
    'ReactFetchTests',
    'ReactRouterDomBasics',
    'ReactRouterDomCss',
    'ReactRouterDomFetch',
    'ReactRouterDomNavigate',
    'RestBoiler',
    'RestExpress',
    'drawer-menu',
    'dynamic-load',
    'gatsby-site',
    'higher-order-component',
    'material-button-components',
    'node_modules',
    'react-app-create',
    'react-simple',
    'react-webpack-simple',
    'redux-simple',
    'simple-express-jest',
    'simple-inputs-bit-dev',
    'simple-inputs',
    'simple-radio-buttons',
    'simple-state',
    'style-guide-examples',
    'todo-redux',
];

// Create a Gulp task for each folder
folders.forEach((folder) => {
    gulp.task(folder, (done) => {
        exec(`cd ${folder} && npm run build`, (err, stdout, stderr) => {
            log(stdout);
            log(stderr);
            done(err);
        });
    });
});

// Default task to run all build tasks sequentially
gulp.task('build-all', gulp.series(...folders));
exports.default = gulp.series('build-all');
