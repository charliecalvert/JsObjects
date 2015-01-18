var chai = require('chai');
var expect = chai.expect;

var objectGetOne = require('../Source/ObjectGetOne.js');
var objectNumbers = require('../Source/ObjectNumbers.js');
var functionUtilities = require('../Source/FunctionUtilities.js');
var functionNumbers = require('../Source/FunctionNumbers.js');

describe("Alternate Module Tests", function () {

    describe("Unit Test Alt-ObjectGetOne", function () {
        'use strict';

        it("proves true is true", function () {
            expect(true).to.equal(true);
        });

        it("proves ObjectGetOne getOne returns 1", function () {
            expect(objectGetOne.getOne()).to.equal(1);
        });

    });

    describe("Unit Test Alt-ObjectNumbers", function () {

        it("proves ObjectNumbers getOne returns 1", function () {
            expect(objectNumbers.getOne()).to.equal(1);
        });

        it("proves ObjectNumbers getTwo returns 2", function () {
            expect(objectNumbers.getTwo()).to.equal(2);
        });

    });

    describe("Unit test Alt-FunctionUtilities", function() {

        it.only("proves functionUtilities getOne returns 1", function () {
            expect(functionUtilities.getOne()).to.equal(1);
        });

        it("proves functionUtilities getOne returns 2", function () {
            expect(functionUtilities.getTwo()).to.equal(2);
        });

    });

    describe("Unit test Alt-FunctionNumbers", function() {

        it("proves functionNumbers getOne returns 1", function () {
            expect(functionNumbers.getOne()).to.equal(1);
        });

        it("proves functionNumbers getTwo returns 2", function () {
            expect(functionNumbers.getTwo()).to.equal(2);
        });


    });

});