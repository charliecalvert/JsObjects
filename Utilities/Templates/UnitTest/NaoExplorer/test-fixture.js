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
        var button = $('#leftArm');
        // console.log(Object.getOwnPropertyNames(button).sort());
        expect(button.selector).toBe('#leftArm');
    });

    it('expects a button with an id of #behaviors', function() {
        var button = $('#behaviors');
        expect(button.length).toBe(1);
    });

    it('expects a button with an id of #parse', function() {
        var button = $('#parse');
        expect(button.length).toBe(1);
    });

    it('expects a button with an id of #network', function() {
        var button = $('#network');
        expect(button.length).toBe(1);
    });
});
