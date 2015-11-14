/**
 * Created by charlie on 11/14/15.
 */

var elfFixtureUtil = {

    loadFixture: function(fileName, specName) {
        'use strict';
        var fixtureFolder = 'spec/fixtures/';
        try {
            jasmine.getFixtures().fixturesPath = 'base/' + fixtureFolder;
            loadFixtures(fileName);
        } catch (e) {
            elfFixtureUtil.fixtureError(fixtureFolder + fileName, specName);
        }
    },

    fixtureError: function(htmlName, specName) {
        'use strict';
        var htmlMsg = 'Unable to load ' + htmlName + ' in ' + specName + '.';
        console.log(htmlMsg);
        console.log('Look in the GruntCheck03 assignment for details on');
        console.log('how to set up Jasmine Query and create fixture.html.');
        console.log('In particular, make sure you have successfully run');
        console.log('*check-karma-grunt-config* and *grunt fixture*.');
    }
};
