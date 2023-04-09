/**
 * Created by charlie on 10/7/15.
 */

describe('Elvenware Simple Plain Suite', function() {
    'use strict';

    var scope;

    beforeEach(module('elfApp'));

    /*
     * instantiate the controller without the directive
     */
    beforeEach(inject(function(_$rootScope_, _$controller_) {
        scope = _$rootScope_.$new();
        _$controller_('HomeController', {
            $scope: scope
        });
    }));

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('should find the description', function() {
        expect(scope.description).toBe('HomeController Data');
    });
});
