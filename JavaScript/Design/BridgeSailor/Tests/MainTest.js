/**
 * @author Charlie Calvert
 */

require.config({
    paths : {
        'SailorBridge' : '../public/javascripts/SailorBridge',  
        'SailorExpertBridge' : '../public/javascripts/SailorExpertBridge',
        'Sloop': '../public/javascripts/Boats/Sloop',      
        'Yawl': '../public/javascripts/Boats/Yawl',
        'Ketch': '../public/javascripts/Boats/Ketch',
        'jasmine' : 'jasmine-2.0.0/jasmine',
        'jasmine-html' : 'jasmine-2.0.0/jasmine-html',
        'boot' : 'jasmine-2.0.0/boot',
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
    require(["SailorSpec"], function() {
        console.log("Main called.");    
        window.onload();
    });
});

