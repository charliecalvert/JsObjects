/**
 * Created by charlie on 11/24/15.
 */

describe('Test Result Parser Suite', function() {

    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('fixture.html');
    });

    beforeEach(function() {
        elfControl.initialize();
    });

    beforeEach(function() {
        spyOn($, 'getJSON').and.callFake(function(url, success) {
            success(responses.transportResult01);
            return {
                fail: function() {}
            };
        });
    });

    it('expects elfArm to exist', function() {
        expect(elfArm).toBeDefined();
    });

    it('expects elfDisplay.appendRobotResult to be called with #leftArm trigger', function() {
        spyOn(elfDisplay, 'appendRobotResult');
        $('#leftArm').trigger('click');
        expect(elfDisplay.appendRobotResult).toHaveBeenCalled();
    });

    it('can get a qimesseging.session response', function() {
        $('#leftArm').trigger('click');
        expect(elfArm.messagingSession).toContain('qimessaging.session');
    });

    it('shows that the infoCount is larger than 2', function() {
        $('#leftArm').trigger('click');
        expect(elfArm.infoCount).toBeGreaterThan(2);
    });

});
