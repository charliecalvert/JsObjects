/**
 * @author Charlie Calvert
 */

var request = require('request');

describe("A suite", function() {

	it("should respond with hello there", function(done) {
		request("http://localhost:30025/hello", function(error, response, body) {
			expect(body).toEqual("Hi there.");
			done();
		});

	});

}); 