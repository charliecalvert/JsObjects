var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();


jasmine.onComplete(function(passed) { 'use strict';
    if(passed) {
        console.log('Elven specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});