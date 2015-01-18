var chai = require('chai');
var expect = chai.expect;

describe("Module-Tests", function () {
	'use strict';
        
    describe("Unit Test ObjectGetOne", function () {


        var objectGetOne;

        before(function() {
            objectGetOne = require('../Source/ObjectGetOne.js');
        });

        it("proves true is true", function () {
            expect(true).to.equal(true);
        });

        it("proves ObjectGetOne getOne returns 1", function () {
            expect(objectGetOne.getOne()).to.equal(1);
        });

    });

    describe("Unit Test ObjectNumbers", function () {

        var objectNumbers;

            before(function() {
            objectNumbers= require('../Source/ObjectNumbers.js');
            });

        it("proves ObjectNumbers getOne returns 1", function () {
            expect(objectNumbers.getOne()).to.equal(1);
        });

        it("proves ObjectNumbers getTwo returns 2", function () {
            expect(objectNumbers.getTwo()).to.equal(2);
        });

    });

    describe("Unit test functionUtilities", function() {

        var functionUtilities;

        before(function() {
            functionUtilities = require('../Source/FunctionUtilities.js');
        });

        it("proves functionUtilities getOne returns 1", function () {
            expect(functionUtilities.getOne()).to.equal(1);
        });

        it("proves functionUtilities getOne returns 2", function () {
            expect(functionUtilities.getTwo()).to.equal(2);
        });

    });

    describe("Unit test functionNumbers", function() {

        var functionNumbers;

        before(function() {
            functionNumbers = require('../Source/FunctionNumbers.js');
        });

        it("proves functionNumbers getOne returns 1", function () {
            expect(functionNumbers.getOne()).to.equal(1);
        });

        it("proves functionNumbers getTwo returns 2", function () {
            expect(functionNumbers.getTwo()).to.equal(2);
        });


    });

});
