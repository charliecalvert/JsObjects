/**
 * @author Charlie Calvert
 */

angular.module('plunker', ['ui.bootstrap']);

var PersonController = function($scope, $dialog) {

	$scope.personValue = 0;

	$scope.people = [{
		firstName : "George",
		lastName : "Washington",
		sequence : 1
	}, {
		firstName : "John",
		lastName : "Adams",
		sequence : 2
	}, {
		firstName : "Thomas",
		lastName : "Jefferson",
		sequence : 3
	}, {
		firstName : "James",
		lastName : "Madison",
		sequence : 4
	}];

	var dialogOptions = {
		controller : 'EditCtrl',
		templateUrl : 'PersonEdit.html'
	};

	$scope.edit = function(item) {

		var itemToEdit = item;

		$dialog.dialog(angular.extend(dialogOptions, {
			resolve : {
				item : angular.copy(itemToEdit)
			}
		})).open().then(function(result) {
			if (result) {
				angular.copy(result, itemToEdit);
			}
			itemToEdit = undefined;
		});
	};

	$scope.getPersonValue = function() {
		return "people[" + $scope.personValue + "].firstName";
		// return $scope.people[$scope.personValue].firstName;
	};
};

// the dialog is injected in the specified controller
function EditCtrl($scope, item, dialog){
  
  $scope.person = item;
  
  $scope.save = function() {
    dialog.close($scope.person);
  };
  
  $scope.close = function(){
    dialog.close(undefined);
  };
}