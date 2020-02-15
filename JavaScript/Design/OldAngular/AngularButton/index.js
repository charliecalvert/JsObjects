/**
 * @author Charlie Calvert
 */

var app = angular.module('main', []);

app.controller('InputView', function($scope) {
    'use strict';

    // ControllerAs
    var view = this;

    view.visible = true;

    view.toggle = function() {
        view.visible = !view.visible;
    };
});
