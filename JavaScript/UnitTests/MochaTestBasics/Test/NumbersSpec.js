var chai = require('chai');
var expect = chai.expect;

var objectGetOne = require('../Source/ObjectGetOne.js');
var objectNumbers = require('../Source/ObjectNumbers.js');
var functionGetOne = require('../Source/FunctionGetOne.js');
var functionNumbers = require('../Source/FunctionNumbers.js');

describe("Unit Test Object Demo", function () {

	it("proves true is true", function () {
		expect(true).to.equal(true);
	});

	it("proves ObjectGetOne getOne returns 1", function() {
		expect(objectGetOne.getOne()).to.equal(1);
	});

	it("proves ObjectNumbers getOne returns 1", function() {
		expect(objectNumbers.numbers.getOne()).to.equal(1);
	});

	it("proves functionGetOne getOne returns 1", function() {
		expect(functionGetOne.getOne()).to.equal(1);
	});

	it("proves functionNumbers getOne returns 1", function() {
		expect(functionNumbers.numbers.getOne()).to.equal(1);
	});

});