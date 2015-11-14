/**
 * Created by charlie on 11/13/15.
 */


describe('Test TwitterInteractive Core Object Suite', function() {
    'use strict';

    var twitterKeys;

    beforeEach(function() {
        twitterKeys = Object.keys(twitterInteractive);
    });

    it('expects an object called twitterRefine to be defined', function() {
        expect(twitterInteractive).toBeDefined();
    });

    it('expects tweets object of sample tweets from tweets.js exists', function() {
        //  and that it was loaded in the files section of karma.conf
        // Can be found in $ELF_TEMPLATES
        expect(tweets).toBeDefined();
    });

    it('that tweets.statuses to be defined', function() {
        expect(tweets.statuses).toBeDefined();
    });

    it('that tweets.search_metadata be defined', function() {
        expect(tweets.search_metadata).toBeDefined();
    });

    it('that twitterRefine to have at least 4 methods', function() {
        expect(twitterKeys.length).toBeGreaterThan(3);
    });

    it('that twitterRefine to have a method called search', function() {
        expect(twitterKeys).toContain('search');
    });

    it('that twitterRefine to have a method called appendUrl', function() {
        expect(twitterKeys).toContain('appendUrl');
    });

    it('that twitterRefine to have a method called renderTable', function() {
        expect(twitterKeys).toContain('renderTable');
    });

    it('that twitterRefine to have a method called init', function() {
        expect(twitterKeys).toContain('init');
    });

});

