/**
 * @author charlie
 * This test is run in the browser.
 */

define('SimpleTest', [], function() {
    'use strict';

    describe("Elvenware Simple Plain Suite", function() {
        it("expects true to be true", function() {
            expect(true).toBe(true);
        });

        it("expects seven to be seven", function() {
            expect(7).toBe(7);
        });
    });   
    
});
