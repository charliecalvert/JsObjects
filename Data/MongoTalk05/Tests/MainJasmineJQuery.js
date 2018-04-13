/**
 * @author Charlie Calvert
 */

require.config({
    paths: {
        'jquery': '/scripts/jquery.min',
        //'pubSub' : '../Public/PubSubOn',
        //'clientMongo' : "../Public/ClientMongo",
        //'clientUi' : "../Public/ClientUi",
        'jasmine': '/scripts/jasmine',
        'jasmine-html': '/scripts/jasmine-html',
        'jasmine-jquery': '/scripts/jasmine-jquery',
        'boot': '/scripts/boot',

    },
    shim: {
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'jasmine'
        },
        'jasmine-jquery': {
            deps: ['boot'],
            exports: 'jasmine-jquery'
        }
    }
});

require(['jquery', 'jasmine-jquery'], function(j, b, c) {
    'use strict';

    // Load the specs
    require(["JQuerySpec"], function() {
        console.log("Main called.");
        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();
    });
});