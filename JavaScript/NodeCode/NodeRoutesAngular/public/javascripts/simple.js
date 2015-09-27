/**
 * Created by charlie on 5/30/2015.
 */


var myModule = angular.module("elvenApp");

myModule.controller('SimpleController', function($scope, clear) {

    $scope.response = "You clicked the simple link.";

});
