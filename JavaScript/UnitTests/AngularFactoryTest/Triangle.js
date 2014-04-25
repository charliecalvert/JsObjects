/**
 * @author Charlie
 */
var app = angular.module('triangleMod', [])
    .factory('triangleFactory', function() {
        'use strict';
        return {
            pythagoras: function() {
                return 3;
            }
        };
    });
