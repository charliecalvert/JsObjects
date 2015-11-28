/**
 * Created by charlie on 11/23/15.
 */

describe('Test Fixture Suite', function() {

    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('fixture.html');
    });

    it('expects at least four buttons', function() {
        var buttons = $('button');
        expect(buttons.length).toBeGreaterThan(3);
    });

    it('expects a button with an id of #leftArm', function() {
        var button = document.getElementById('leftArm')
        var id = $(button).attr('id');
        expect(id).toBe('leftArm');
    });

    it('expects a button with a caption of Left Arm', function() {
        var button = document.getElementById('leftArm');
        var caption = button.innerHTML
        expect(caption).toBe('Left Arm');
    });

    it('expects a button with an caption of Get Behaviors', function() {
        var button = $('#behaviors');
        expect(button[0].innerHTML).toBe('Get Behaviors');
    });

    it('expects a button with an id of #behaviors', function() {
        var button = $('#behaviors');
        expect($(button[0]).attr('id')).toBe('behaviors');
    });

    it('expects a button with an id of #parse', function() {
        var button = document.getElementById('parse')
        var id = $(button).attr('id');
        expect(id).toBe('parse');
    });

    it('expects a button with a caption of Parse', function() {
        var button = document.getElementById('parse');
        var caption = button.innerHTML
        expect(caption).toBe('Parse');
    });

    it('expects a button with an id of #network', function() {
        var button = document.getElementById('network')
        var id = $(button).attr('id');
        expect(id).toBe('network');
    });

    it('expects a button with a caption of Network', function() {
        var button = document.getElementById('network');
        var caption = button.innerHTML
        expect(caption).toBe('Network');
    });

});
