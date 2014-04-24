var App = (function() {
    'use strict';

    var Alabama = 'AL',
        California = 'CA',
        Texas = 'TX',
        Washington = 'WA';

    function App() {
        describe('If Statements');
        runIfStatements();
        describe('Switch Statement');
        runState();
        describe('Object Map');
        runFuncState();
        describe('Object Map Version 2');
        runFuncState2();
    }

    var describe = function(value) {
        console.log();
        console.log(value);
        console.log("==============");
    };

    var isEven = function(input) {
        if (input % 2 === 0) {
            console.log('Your input of ' + input + ' is even');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    };

    var statePopulation = function(stateAbbreviation) {
        var result = 0;

        switch (stateAbbreviation) {
            case 'AL':
                result = 4800736;
                break;

            case 'CA':
                result = 38053956;
                break;

            case 'TX':
                result = 25901361;
                break;

            case 'WA':
                result = 6830038;
                break;

            default:
                result = -1;
        }

        console.log('The population of ' + stateAbbreviation + ' is ' + result);
    };

    var funcBranch = function(stateAbbreviation) {

        var stateMap = {
            'AL': 4800736,
            'CA': 38053956,
            'TX': 25901361,
            'WA': 6830038
        };

        console.log('The population of ' + stateAbbreviation + ' = ' + stateMap[stateAbbreviation]);
    };

    var funcBranch2 = function(stateAbbreviation) {
        var stateMap2 = {
            'AL': function() {
                return 4800736 / 100;
            }(),
            'CA': function() {
                return 38053956 / 100;
            }(),
            'TX': function() {
                return 25901361 / 100;
            }(),

            'WA': function() {
                return 6830038 / 100;
            }()
        };

        console.log('The population of ' + stateAbbreviation + ' = ' + stateMap2[stateAbbreviation]);
        //var bar = stateMap2[stateAbbreviation];
        //console.log('The population of ' + stateAbbreviation + ' = ' + bar());
    };

    var runIfStatements = function() {
        isEven(2);
        isEven(3);
        isEven(4);
        isEven(5);
    };

    var runState = function() {
        statePopulation(Alabama);
        statePopulation(California);
        statePopulation(Texas);
        statePopulation(Washington);
        statePopulation('Unknown');
    };

    var runFuncState = function() {
        funcBranch(Alabama);
        funcBranch(California);
        funcBranch(Texas);
        funcBranch(Washington);
        funcBranch('Unknown');
    };

    var runFuncState2 = function() {
        funcBranch2(Alabama);
        funcBranch2(California);
        funcBranch2(Texas);
        funcBranch2(Washington);
    };

    return App;
})();

var app = new App();
