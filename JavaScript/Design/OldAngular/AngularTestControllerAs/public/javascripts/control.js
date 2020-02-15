/**
 * Created by charlie on 4/24/16.
 */

var elfApp = angular.module('elfApp', []);

elfApp.controller('MainController', function($scope) {
    'use strict';
    var mainController = this;
    mainController.mainData = 'Main Data';
    $scope.scopeData =
        'We will need to use Scope when creating controller in text';
});

elfApp.controller('OnlyControllerAs', function() {
    'use strict';
    this.sample = 'No locals, no scope when creating controller';
});
