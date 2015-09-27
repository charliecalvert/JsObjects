(function() {

    'use strict';

    var myModule = angular.module("elvenApp");

    myModule.controller('MyController', function($scope, message, clear) {

        console.log('MyController called.');
        var myController = this;
        clear();
        if (message === 'root') {
            $scope.response = "You clicked the root link.";
        }

    });

}());
