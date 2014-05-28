/**
 * @author Charlie Calvert
 */

require.config({
    paths : {
        'Singleton': '../public/javascripts/Singleton',
        'jasmine' : 'jasmine-2.0.0/jasmine',
        'jasmine-html' : 'jasmine-2.0.0/jasmine-html',
        'boot' : 'jasmine-2.0.0/boot'
    },
    shim : {
        'jasmine' : {
            exports : 'jasmine'
        },
        'jasmine-html' : {
            deps : ['jasmine'],
            exports : 'jasmine'
        },
        'boot' : {
            deps : ['jasmine', 'jasmine-html'],
            exports : 'jasmine'
        }
    }
});

/*
 * Do this two step dance with two requires 
 * when you want to load jasmine.
 */ 
require(['boot'], function(boot) {
    'use strict';
    
    // Load the specs with second call to require
    require(["SingletonSpec"], function() {
        console.log("Main called.");    
        window.onload();
    });
});

