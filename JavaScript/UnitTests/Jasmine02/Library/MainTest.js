/**
 * @author Charlie Calvert
 */
require.config({
    paths: {
        jasmine: 'jas/jasmine',
        jasmineHtml: 'jas/jasmine-html',
        boot: 'jas/boot',
        GetNumber: 'spec/GetNumber',
        SimpleTest: 'spec/SimpleTest',
        NumberTest: 'spec/NumberTest'
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

    require(['NumberTest', 'SimpleTest'], function() {
        window.onload();
    });
});
