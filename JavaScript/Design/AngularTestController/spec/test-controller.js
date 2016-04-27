/**
 * Created by charlie on 4/25/16.
 */

describe('Test MainController Suite', function() {

    'use strict';

    var mainController;
    var scope;

    beforeEach(module('elfApp'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        scope = _$rootScope_.$new();
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    it('can access controllerAs variable', function() {
        expect(scope.scopeData).toContain('Scope when creating');
    });

    it('can get nine', function() {
        expect(scope.getNine()).toBe(9);
    });

});
