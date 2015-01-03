/**
 * @author Charlie Calvert
 */
require.config({
	baseUrl: '../',
    paths: {
        jasmine: 'Library/jas/jasmine',
        jasmineHtml: 'Library/jas/jasmine-html',
        boot: 'Library/jas/boot',
        objectMethod: 'Spec/GetNumber',
        FunctionObject: 'Spec/GetFunction',
        testNumbers: 'Spec/TestNumbers',
        testFunctionObject: 'Spec/TestFunctionObject'
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

    require(['testNumbers', 'testFunctionObject', 'FunctionObject'], function(a, b, FunctionObject) {
        console.log(typeof functionObject);
        console.log(new FunctionObject().getA());
        window.onload();
    });
});
