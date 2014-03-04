/**
 * @author Charlie Calvert
 */

function test() {
	describe("Jasmine-JQuery example suite", function() {

		jasmine.getFixtures().fixturesPath = '../Public/';
				
		it('proves jasmine-jquery suite is called and working', function() {
			expect(true).toBe(true);
		});

		it('Manually finds if the word *talk* has been loaded into the page', function(done) {
			$("#test").load("../Public/Pieces.html #introTemplate", function() {				
				var test = $('#test');
				var foo = test.text();
				expect(foo).toContain('Talk');
				test.empty();
				done();
			});			
		}); 

		it('Uses Jasmine-JQuery to check for the word *talk* using loadFixtures and toContainText', function() {
			loadFixtures('Pieces.html');
			expect($("#introTemplate")).toContainText("Talk");
		});
	});	
	
}


$(document).ready(function() {
	test();
});
