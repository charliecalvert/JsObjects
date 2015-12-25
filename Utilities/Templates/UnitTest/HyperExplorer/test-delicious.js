/**
 * Created by charlie on 11/9/15.
 */

describe('Delicious Basics Suite', function() {
    'use strict';

    beforeEach(function() {
        spyOn($, 'ajax').and.callFake(function(ajaxObject) {
            ajaxObject.success(deliciousLinks);
            return {
                fail: function() {}
            };
        });
    });

    afterEach(function() {
        elfDelicious.deliciousLinks = null;
    });

    it('proves we can access elfDelicious', function() {
        expect(deliciousLinks).toBeDefined();
    });

    it('proves we can access elfDelicious', function() {
        expect(elfDelicious).toBeDefined();
    });

    it('shows we can get our deliciousLink array', function() {
        elfDelicious.callDelicious('javascript');
        var linkObject = elfDelicious.deliciousLinks;
        expect(linkObject).toBeTruthy();
    });

    it('shows we can call deliciousSetup and that it is calls displayCheckBoxSelection', function() {
        spyOn(elfDelicious, 'displayCheckboxSelection');
        elfDelicious.deliciousSetup();
        expect(elfDelicious.displayCheckboxSelection).toHaveBeenCalled();
    });

});
