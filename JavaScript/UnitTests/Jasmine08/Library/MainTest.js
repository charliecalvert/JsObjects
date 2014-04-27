/**
 * @author Charlie Calvert
 */
require.config({
    paths: {
        jasmine: 'jas/jasmine',
        jasmineHtml: 'jas/jasmine-html',
        boot: 'jas/boot',
        objectMethod: 'spec/GetNumber',
        FunctionObject: 'spec/GetFunction',
        testNumbers: 'spec/TestNumbers',
        testFunctionObject: 'spec/TestFunctionObject'
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
