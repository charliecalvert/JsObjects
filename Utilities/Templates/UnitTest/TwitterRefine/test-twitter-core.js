/**
 * Created by charlie on 11/13/15.
 */


describe('Test TwitterRefine Core Object Suite', function() {
    'use strict';

    var twitterKeys;

    beforeEach(function() {
        twitterKeys = Object.keys(twitterRefine);
    });

    it('expects an object called twitterRefine to be defined', function() {
        expect(twitterRefine).toBeDefined();
    });

    it('expects tweets object of sample tweets from tweets.js exists', function() {
        //  and that it was loaded in the files section of karma.conf
        expect(tweets).toBeDefined();
    });

    it('that tweets.statuses to be defined', function() {
        expect(tweets.statuses).toBeDefined();
    });

    it('that tweets.search_metadata be defined', function() {
        expect(tweets.search_metadata).toBeDefined();
    });

    it('that twitterRefine to have 6 methods', function() {
        expect(twitterKeys.length).toBeGreaterThan(5);
    });

});

