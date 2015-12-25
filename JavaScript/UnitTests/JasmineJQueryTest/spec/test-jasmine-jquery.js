/**
 * Created by charlie on 11/10/15.
 */

describe('Test Jasmine-JQuery Suite', function() {
    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('fixture.html');
    });

    it('shows we can get at least 1 <P> element', function() {
        var paragraphs = $('p');        
        expect(paragraphs.length).toBeGreaterThan(0);
    });

});
