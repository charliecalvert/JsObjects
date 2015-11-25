/**
 * Created by charlie on 11/23/15.
 */



describe('Test Run Message Suite', function() {

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

    it('expects elfControl to exist', function() {
        expect(elfControl).toBeDefined();
    });

    it('expects elfRobot.callingRobot to be called', function() {
        spyOn(elfRobot, 'callingRobot');
        elfArm.armServerCall({});
        expect(elfRobot.callingRobot).toHaveBeenCalled();
    });

    it('expects elfRobot.callingRobot to be called with #leftArm trigger', function() {
        spyOn(elfRobot, 'callingRobot');
        $('#leftArm').trigger('click');
        expect(elfRobot.callingRobot).toHaveBeenCalled();
    });

    it('expects elfDisplay.appendRobotResult to be called with #leftArm trigger', function() {
        spyOn(elfDisplay, 'appendRobotResult');
        $('#leftArm').trigger('click');
        expect(elfDisplay.appendRobotResult).toHaveBeenCalled();
    });

    it('expects elfDisplay.clear to be called by #leftArm trigger', function() {
        spyOn(elfDisplay, 'clear');
        $('#leftArm').trigger('click');
        expect(elfDisplay.clear).toHaveBeenCalled();
    });

    it('expects elfDisplay.clear to be called by parseBehaviors', function() {
        spyOn(elfDisplay, 'clear');
        $('#behaviors').trigger('click');
        expect(elfDisplay.clear).toHaveBeenCalled();
    });

    it('expects elfDisplay.appendRobotResult to be called by parseBehaviors', function() {
        spyOn(elfDisplay, 'appendRobotResult');
        $('#behaviors').trigger('click');
        expect(elfDisplay.appendRobotResult).toHaveBeenCalled();
    });
});
