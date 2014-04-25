/**
 * @author Charlie Calvert
 */
require.config({
    paths: {
        jasmine: 'jas/jasmine',
        jasmineHtml: 'jas/jasmine-html',
        boot: 'jas/boot',
        getEight: 'spec/GetNumber',
        SimpleTest: 'spec/SimpleTest',
        Test02: 'spec/Test02'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        jasmineHtml: {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        boot: {
            deps: ['jasmine', 'jasmineHtml'],
            exports: 'jasmine'
        }
    },
});


require(['boot'], function(jasmine) {
    'use strict';
    console.log('Boot jasmine');

    require(['Test02', 'SimpleTest'], function() {
        window.onload();
    });
});
