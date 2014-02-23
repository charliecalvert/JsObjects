/**
 * @author Charlie Calvert
 */

var request = require('request');

describe("A Mongo Suite", function() {

	it("should respond with hello there", function(done) {
		request("http://localhost:30025/hello", function(error, response, body) {
			expect(body).toEqual("Hi there.");
			done();
		});
	});

	it("should read two records", function(done) {
		request("http://localhost:30025/readTwo", function(error, response, body) {
			console.log("Calling test two records");
			
			// Convert result from a JSON string to a JSON object
			body = JSON.parse(body);
			
			console.log(body);			
			expect(body.length).toEqual(2);
			done();
		});
	});

}); 
