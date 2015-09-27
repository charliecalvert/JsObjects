/**
 * Created by charlie on 5/30/2015.
 */

var myModule = angular.module("elvenApp");

myModule.controller('SimpleUser', function(clear) {

    clear();
    $('#response').load('/SimpleUser');
    $('#response').html('Simple user');

});