/**
 * Created by charlie on 4/25/16.
 */

describe('Test ControllerAs with no Locals Suite', function() {
    'use strict';

    var mainController;

    beforeEach(module('elfApp'));

    beforeEach(inject(function(_$controller_) {
        mainController = _$controller_('OnlyControllerAs', {
            /* No Locals. Compare to other suite. */
        });
    }));

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('can access controllerAs variable', function() {
        expect(mainController.sample).toContain('No locals');
    });
});

describe('Test MainController as ControllerAs with Scope Locals Suite', function() {
    'use strict';

    var mainController;

    beforeEach(module('elfApp'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        mainController = _$controller_('MainController', {
            $scope: _$rootScope_
        });
    }));

    it('can access controllerAs variable', function() {
        expect(mainController.mainData).toBe('Main Data');
    });
});
