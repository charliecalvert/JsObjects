/*global describe:true, it:true, expect: true*/

var Sloop = require("../Sloop").Sloop;

describe("A Sloop Suite", function() {
    'use strict';

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("can create a sloop", function() {
        var sloop = new Sloop();
        expect(sloop).not.toBe(null);
    });

    it("shows a sloop can tack", function() {
        var sloop = new Sloop();
        expect(sloop.tack()).toBe('Sloop tack called.');
    });

    it("shows a sloop can luff", function() {
        var sloop = new Sloop();
        expect(sloop.luff()).toBe('Sloop luff called.');
    });

    it("shows a sloop can reach", function() {
        var sloop = new Sloop();
        expect(sloop.reach()).toBe('Sloop reach called.');
    });

    it("shows a Sloop can anchor", function() {
        var sloop = new Sloop();
        expect(sloop.anchor()).toBe('Sloop anchor called.');
    });

    it("shows a Sloop can dock", function() {
        var sloop = new Sloop();
        expect(sloop.dock()).toBe('Sloop dock called.');
    });



});
