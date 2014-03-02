/**
 * @author Charlie Calvert
 */

var request = require('request');

describe("A Mongo Suite", function() { 'use strict';

	it("should respond with hello there", function(done) { 
		console.log('Calling Hello');
		request("http://localhost:30025/hello", function(error, response, body) {
			expect(body).toEqual("Hi there.");
			done();
		});
	});
	
	it("should respond with goober", function(done) { 
		console.log('Calling Hello');
		request("http://localhost:30025/barfoo", function(error, response, bar) {
			console.log(response.statusCode);
			expect(bar).toEqual("foobar");
			done();
		});
	});

	it("should get total document count", function(done) {
		request("http://localhost:30025/getDocumentCount", function(error, response, body) {
			console.log("Calling get Document Count");			
			// Convert result from a JSON string to a JSON object
			body = JSON.parse(body);			
			//console.log(body);			
			expect(body.documentCount).toEqual(9);
			done();
		});
	});
	
	it("should read two documents", function(done) {
		request("http://localhost:30025/readTwo", function(error, response, body) {
			console.log("Calling test two records");
			
			// Convert result from a JSON string to a JSON object
			body = JSON.parse(body);
			
			//console.log(body);			
			expect(body.length).toEqual(2);
			done();
		});
	});
	
	it("should ask for 3 records", function(done) {
		request("http://localhost:30025/readDocuments?numRequested=3", function(error, response, body) {
			console.log("Calling ask for 3 records");
			
			// Convert result from a JSON string to a JSON object
			body = JSON.parse(body);
			
			//console.log(body);			
			expect(body.length).toEqual(3);
			done();
		});
	});
	
	it("should read all the documents", function(done) {
		request("http://localhost:30025/readAll", function(error, response, body) {
			console.log("Calling ask for all documents");
			
			// Convert result from a JSON string to a JSON object
			body = JSON.parse(body);
			
			//console.log(body);			
			expect(body.length).toEqual(9);
			done();
		});
	});
	
	

}); 
