/**
 * Created by charlie on 11/9/15.
 */

describe('Twitter Basics Suite', function() {
    'use strict';

    beforeEach(function() {

        var simpleGetJson = true;

        if (simpleGetJson) {
            spyOn($, 'getJSON').and.callFake(function(url, params, success) {
                success(tweets);
                return {
                    fail: function() {}
                };
            });
        } else {
            spyOn($, 'getJSON').and.callFake(function(url, params, success) {
                success(tweets);
                return {
                    done: function() {
                        return {
                            fail: function() {
                                return {
                                    always: function() {}
                                };
                            }
                        };
                    }
                };
            });
        }
    });

    it('proves that elfTwitter object exists and passes at least a basic sanity test.', function() {
        expect(elfTwitter).toBeDefined();
    });

    it('shows we can call elfTwitter.search and that it calls appendUrl', function() {
        spyOn(elfTwitter, 'appendUrl');
        elfTwitter.search();
        expect(elfTwitter.appendUrl).toHaveBeenCalled();
    });

    it('shows we can call elfTwitter.search and that it calls renderTable', function() {
        spyOn(elfTwitter, 'renderTable');
        elfTwitter.search();
        expect(elfTwitter.renderTable).toHaveBeenCalled();
    });

    it('shows we can call twitterSetup and that it calls clearControls', function() {
        spyOn(elfTwitter, 'clearControls');
        elfTwitter.twitterSetup();
        expect(elfTwitter.clearControls).toHaveBeenCalled();
    });

});
