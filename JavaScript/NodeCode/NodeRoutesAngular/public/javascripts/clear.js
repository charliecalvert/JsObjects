/**
 * Created by charlie on 5/30/2015.
 */

var myModule = angular.module("elvenApp");

myModule.factory('clear', function() {

    function clear() {
        $('#response').html('');
        $('#route').html('');
        $('#result').html('');
        $('#request').html('');
        $('#params').html('');
    }

    return clear;
});