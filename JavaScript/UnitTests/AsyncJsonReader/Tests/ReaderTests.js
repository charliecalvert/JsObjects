/**
 * @author Charlie Calvert
 */

define(["JsonReader"], function(JsonReader) {
	'use strict';

	describe("Simple Suite", function() {

		it("proves we can run a test", function() {
			expect(true).toBe(true);
		});
		
		it("proves we can create a ReaderFactory, JasonReader and MarkdownReader", function() {
			expect(JsonReader).toBeTruthy();
		});
		
		it("proves we can run an async callback test on JsonReader", function(done) {
			var jsonReader = new JsonReader();
			jsonReader.readFile('public/FileList.json', function(data) {
				expect(data).toBeTruthy();
				done();
			});			
		});
		
		it("proves we can run an async callback test on JsonReader and parse the data", function(done) {
			var jsonReader = new JsonReader();
			jsonReader.readFile('public/FileList.json', function(data) {
				expect(data.content['President01.json']).toBe('/home/charlie/Documents/Data/Presidents01.json');
				done();
			});			
		});

	});
});