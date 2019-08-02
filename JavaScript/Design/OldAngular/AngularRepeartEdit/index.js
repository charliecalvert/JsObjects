/**
 * @author Charlie Calvert
 */

angular.module('repeatera', ['ui.bootstrap']);

function PersonController($scope, $dialog) { 'use strict';

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

	$scope.edit = function(person) {

		var itemToEdit = person;

		$dialog.dialog(angular.extend(dialogOptions, {
			resolve : {
				person : angular.copy(itemToEdit)
			}
		})).open().then(function(result) {
			if (result) {
				angular.copy(result, itemToEdit);
			}
			itemToEdit = undefined;
		});
	};
}

// the dialog is injected in the specified controller
function EditCtrl($scope, person, dialog){ 'use strict';
  
  $scope.person = person;
  
  $scope.save = function() {
    dialog.close($scope.person);
  };
  
  $scope.close = function(){
    dialog.close(undefined);
  };
}