const workers = require('./workers');

const App = (function() {
    'use strict';

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

    const
        Alabama = 'AL',
        California = 'CA',
        Texas = 'TX',
        Washington = 'WA';

    const describe = function(value) {
        console.log();
        console.log(value);
        console.log("==============");
    };

    const runIfStatements = function() {
        workers.isEven(2);
        workers.isEven(3);
        workers.isEven(4);
        workers.isEven(5);
    };


    const runState = function() {
        workers.statePopulation(Alabama);
        workers.statePopulation(California);
        workers.statePopulation(Texas);
        workers.statePopulation(Washington);
        workers.statePopulation('Unknown');
    };

    const runFuncState = function() {
        workers.funcBranch(Alabama);
        workers.funcBranch(California);
        workers.funcBranch(Texas);
        workers.funcBranch(Washington);
        workers.funcBranch('Unknown');
    };

    const runFuncState2 = function() {
        workers.funcBranch2(Alabama);
        workers.funcBranch2(California);
        workers.funcBranch2(Texas);
        workers.funcBranch2(Washington);
    };


    return App;
})();

const app = new App();
