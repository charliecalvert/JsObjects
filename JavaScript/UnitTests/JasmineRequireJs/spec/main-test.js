/**
 * @author Charlie Calvert
 */

function loadTestsIntoArray() {
    'use strict';
    var tests = [];
    for (var file in window.__karma__.files) {
        if (/test-/.test(file)) {
            console.log('Loaded test:', file);
            tests.push(file);
        }
    }
    return tests;
}

require.config({
    baseUrl: '/base',

    paths: {
        home: 'public/javascripts/home'
    },
    deps: loadTestsIntoArray(),
    callback: window.__karma__.start
});
