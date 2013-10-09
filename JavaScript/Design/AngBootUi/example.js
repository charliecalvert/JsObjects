/**
 * @author charlie
 */

angular.module('plunker', ['ui.bootstrap']);

function ListCtrl($scope, $dialog) {
  
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
}
// the dialog is injected in the specified controller
function EditCtrl($scope, person, dialog){
  
  $scope.person = person;
  
  $scope.save = function() {
    dialog.close($scope.person);
  };
  
  $scope.close = function(){
    dialog.close(undefined);
  };
}