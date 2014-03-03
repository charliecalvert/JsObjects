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
	
	it("should find George Washington in PresidentsIn.md", function(done) { 
		console.log('Calling Hello');
		request("http://localhost:30025/readMarkdown", function(error, response, jsonObject) {
			console.log("Response statuscode: " + response.statusCode);
			jsonObject = JSON.parse(jsonObject);
			console.log(typeof jsonObject);
			var markdown = jsonObject.text;
			var lengthMarkdown = markdown.length;			
			var george = "George Washington";
			var input = markdown.substring(0, george.length);
			expect(input).toEqual(george);
			done();			
		});
	});


	it("should call insertIntoCollection and insert a document", function(done) {
		request("http://localhost:30025/insertMarkdown", function(error, response, output) {
			console.log("Insertmarkdown called: " + output);
			var output = JSON.parse(output);			
			expect(output.result).toBe('Success');				
			done();
		});
	});

	
	it("should read file out", function(done) {
		request("http://localhost:30025/readFileOut", function(error, response, html) {
			console.log("Calling read file out test");
			console.log(typeof html);
			console.log(html);
			var george = '<h2 id="george-washington">George Washington</h2>';
			var input = html.substring(0, george.length);
			expect(input).toBe('<h2 id="george-washington">George Washington</h2>');			
			done();
		});
	});

}); 
