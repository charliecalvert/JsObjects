/**
 * @author Charlie Calvert
 */

require.config({
	baseUrl: '../',
    paths : {
        'SailorBridge' : 'javascripts/SailorBridge',  
        'SailorBridgeExpert' : 'javascripts/SailorBridgeExpert',
        'Sloop': 'javascripts/Boats/Sloop',      
        'Yawl': 'javascripts/Boats/Yawl',
        'Ketch': 'javascripts/Boats/Ketch',
        'SailorSpec': 'Tests/SailorSpec',
        'jasmine' : 'Tests/jasmine-2.0.0/jasmine',
        'jasmine-html' : 'Tests/jasmine-2.0.0/jasmine-html',
        'boot' : 'Tests/jasmine-2.0.0/boot',        
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

