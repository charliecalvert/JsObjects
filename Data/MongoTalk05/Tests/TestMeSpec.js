/**
 * @author Charlie Calvert
 */

define(['testMe'], function(testMe) {
    'use strict';

    describe('TestMe Suite', function() {
        it('should have routes defined', function() {
            expect(testMe.config).toBe(1);
        });
    });
});