/**
 * Created by charlie on 5/30/2015.
 */


var myModule = angular.module("elvenApp");

myModule.controller('ParamId', function($http, $routeParams, clear) {



    clear();
    var id = $routeParams.id;
    var choice = ('Param: ' + id);
    $http('/users/' + id, function(response) {
        $('#response').html(JSON.stringify(response));
        $('#route').html(response.route);
        $('#result').html(response.result);
        $('#request').html(response.request);
        $('#params').html(response.params);
        elf.utilities.showMessage(choice, true);
    });
});