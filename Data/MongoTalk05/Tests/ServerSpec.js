/**
 * @author Charlie Calvert
 */

var request = require('request');

describe("A Mongo Suite", function() { 'use strict';

	var server = 'http://localhost:30025/';

	beforeEach(function() {

	});

	it("should delete all records", function(done) {
		console.log("Remove all");
		request(server + "removeAll", function(error, response, body) {
			console.log("In removeAll callback");
			if (error) {
				throw error;
			}
			body = JSON.parse(body);
			expect(body.result).toEqual("removeAll Called", "Hi there undefined");
			done();
		});
	});

	it("should insertIntoCollection a JSON document", function(done) {
		request("http://localhost:30025/insertJson", function(error, response, output) {
			console.log("Insertmarkdown called: " + output);
			var output = JSON.parse(output);
			expect(output.result).toBe('Success');
			done();
		});
	});

	it("should call insertIntoCollection and insert a markdown document", function(done) {
		request("http://localhost:30025/insertMarkdown", function(error, response, output) {
			console.log("Insertmarkdown called: " + output);
			var output = JSON.parse(output);
			expect(output.result).toBe('Success');
			done();
		});
	});


	it("should respond with hello there", function(done) {
		console.log('Calling Hello');
		request(server + "hello", function(error, response, body) {
			if (typeof body === 'undefined') {
				console.log("Is there a server running at " + server + "?");
			}
			expect(body).toEqual("Hi there.", "Hi there undefined");
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
			expect(body.documentCount).toBeGreaterThan(3);
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
			expect(body.length).toBeGreaterThan(3);
			done();
		});
	});

	it("should find George Washington in PresidentsIn.md", function(done) {
		console.log('Calling readMarkdown');
		request("http://localhost:30025/readMarkdown", function(error, response, jsonObject) {
			if(error) {
				console.log("Error on call");
				throw error;
			}
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
