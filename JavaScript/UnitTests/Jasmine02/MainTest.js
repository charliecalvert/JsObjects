/**
 * @author Charlie Calvert
 */
require.config({
    paths: {
        jasmine: 'Library/jas/jasmine',
        jasmineHtml: 'Library/jas/jasmine-html',
        boot: 'Library/jas/boot',
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
