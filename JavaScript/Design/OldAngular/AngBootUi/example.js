/**
 * @author Charlie Calvert
 */

angular.module('elfedit', ['ui.bootstrap'])
.controller('TableEditor', function($scope, $dialog) { 'use strict';
  
  $scope.people = [
    {firstName: 'George', lastName: 'Washington'},
    {firstName: 'John', lastName: 'Adams'},
    {firstName: 'Thomas', lastName: 'Jefferson'}
  ];
  
  var dialogOptions = {
    controller: 'EditCtrl',
    templateUrl: 'itemEdit.html'
  };

  $scope.edit = function(person){
    
    var itemToEdit = person;
    
    $dialog.dialog(angular.extend(dialogOptions, {resolve: {person: angular.copy(itemToEdit)}}))
      .open()
      .then(function(result) {
        if(result) {
          angular.copy(result, itemToEdit);                
        }
        itemToEdit = undefined;
    });
  };
})
// the dialog is injected in the specified controller
.controller('EditCtrl', function($scope, person, dialog){ 'use strict';
  
  $scope.person = person;
  
  $scope.save = function() {
    dialog.close($scope.person);
  };
  
  $scope.close = function(){
    dialog.close(undefined);
  };
});