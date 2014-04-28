/*global describe:true, it:true, expect: true */

var Ketch = require("../public/javascripts/Boats/Ketch");

describe("A Ketch Suite", function() {
    'use strict';

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("can create a ketch", function() {
        var ketch = new Ketch();
        expect(ketch).not.toBe(null);
    });

    it("shows a ketch can tack", function() {
        var ketch = new Ketch();
        expect(ketch.tack()).toBe('Ketch tack called.');
    });

    it("shows a ketch can luff", function() {
        var ketch = new Ketch();
        expect(ketch.luff()).toBe('Ketch luff called.');
    });

    it("shows a ketch can reach", function() {
        var ketch = new Ketch();
        expect(ketch.reach()).toBe('Ketch reach called.');
    });

    it("shows a Ketch can anchor", function() {
        var ketch = new Ketch();
        expect(ketch.anchor()).toBe('Ketch anchor called.');
    });

    it("shows a Ketch can dock", function() {
        var ketch = new Ketch();
        expect(ketch.dock()).toBe('Ketch dock called.');
    });

});
