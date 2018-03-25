const Workers = (function() {
    'use strict';

    function Workers() {
    }

    Workers.prototype.isEven = function(input) {
        if (input % 2 === 0) {
            console.log('Your input of ' + input + ' is even');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    };

    Workers.prototype.statePopulation = function(stateAbbreviation) {
        let result = 0;

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

    Workers.prototype.funcBranch = function(stateAbbreviation) {

        const stateMap = {
            'AL': 4800736,
            'CA': 38053956,
            'TX': 25901361,
            'WA': 6830038
        };

        console.log('The population of ' + stateAbbreviation + ' = ' + stateMap[stateAbbreviation]);
    };

    Workers.prototype.funcBranch2 = function(stateAbbreviation) {
        const stateMap2 = {
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
        //const bar = stateMap2[stateAbbreviation];
        //console.log('The population of ' + stateAbbreviation + ' = ' + bar());
    };

    return Workers;
})();

module.exports = new Workers();
