/**
 * @author Charlie Calvert
 */

var tests = [];
var TEST_REGEXP = /(Spec|Test)\.js$/i;

Object.keys(window.__karma__.files).forEach(function(file) { 'use strict';
    if (TEST_REGEXP.test(file)) {
        console.log(file);
        tests.push(file);
    }
});

requirejs.config({

    baseUrl: '/base/Source/',

    // Tell require to load our tests
    deps: tests,

    // start test run, once Require.js is done
    callback : window.__karma__.start
});
