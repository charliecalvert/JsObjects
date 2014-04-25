/**
 * @author charlie
 */

describe("Async file", function() {
    'use strict';

    var textLoader = null;

    beforeEach(function() {
        textLoader = new LoadText();
    });

    it("Tests that loadFile gets called", function() {
        // get is stubbed and never really called
        spyOn($, "get");
        textLoader.loadFile("", null);
        expect($.get).toHaveBeenCalled();
    });

    it("Tests that loadFile is called with Sources.html", function() {
        // get is stubbed and never really called
        spyOn($, "get");
        textLoader.loadFile("../Sources.html", function(data) {
            console.log(data);
        });
        expect($.get).toHaveBeenCalledWith("../Sources.html", jasmine.any(Function));
    });

    it("Tests that loadFile is called with Sources.html and makes real integration call", function(done) {
        // Actual call to function
        spyOn($, "get").and.callThrough();
        textLoader.loadFile("../Sources.html", function(responseText) {
            console.log(responseText);
            var fineTime = $(responseText).filter('#paragraph04').html();
            expect(fineTime).toBe('Fine time.');
            done();
        });
        expect($.get).toHaveBeenCalledWith("../Sources.html",
            jasmine.any(Function));
    });

    it("Shows that the callback is called and creates fake get method", function(done) {
        // Create a fake "get". Don't call real jquery.get, call this one.
        spyOn($, "get").and.callFake(function(options, callbackReference) {
            callbackReference(); // This is the jasmine spy callback
            expect(callback).toHaveBeenCalled(); // Was the spy called?
            done();
        });
        var callback = jasmine.createSpy();
        textLoader.loadFile("Sources.html", callback);
    });

    it("Integration test makes a real AJAX request", function(done) {
        textLoader.loadFile("../Sources.html", function(responseText) {
            var bar = $(responseText).filter('#paragraph04').html();
            expect(bar).toBe('Fine time.');
            done();
        });
    });

});
