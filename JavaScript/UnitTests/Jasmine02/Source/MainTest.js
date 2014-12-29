/**
 * @author Charlie Calvert
 */

require.config({
	baseUrl: '../',
    paths: {
        jasmine: 'Library/jas/jasmine',
        jasmineHtml: 'Library/jas/jasmine-html',
        boot: 'Library/jas/boot',
        GetNumber: 'Source/GetNumber',
        SimpleTest: 'Spec/SimpleTest',
        NumberTest: 'Spec/NumberTest'
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

    require(['NumberTest', 'SimpleTest', 'SimpleTestSpec'], function() {
        window.onload();
    });
});
