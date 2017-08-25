/**
 * Created by charlie on 3/1/16.
 */

var elfLog = require('./elven-log')('custom-reporter');
elfLog.elfName = 'custom-reporter';

var myReporter = {

    jasmineStarted: function(suiteInfo) {
        'use strict';
        console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
    },

    // suiteStarted is invoked when a describe starts to run
    suiteStarted: function(result) {
        'use strict';
        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    // specStarted is invoked when an it starts to run (including associated beforeEach functions)
    specStarted: function(result) {
        'use strict';
        elfLog.details('Spec started elf: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    // specDone is invoked when an it and its associated beforeEach and afterEach functions have been run.
    // While jasmine doesn’t require any specific functions, not defining a specDone will make it
    // impossible for a reporter to know when a spec has failed.
    specDone: function(result) {
        'use strict';
        console.log('Spec: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
        console.log(result.passedExpectations.length);
    },

    // suiteDone is invoked when all of the child specs and suites for a given suite have been run
    // While jasmine doesn’t require any specific functions, not defining a suiteDone will make it
    // impossible for a reporter to know when a suite has failures in an afterAll.

    suiteDone: function(result) {
        'use strict';
        // The result here is the same object as in suiteStarted but with the addition of a status and a
        // list of failedExpectations.

        console.log('Suite: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {

            /*
                Any failedExpectations on the suite itself are the result of a failure in an afterAll.
                Each failedExpectation has a message that describes the failure and a stack trace.
             */

            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    },

    jasmineDone: function() {
        'use strict';
        console.log('Finished suite');
    }
};

module.exports = myReporter;
