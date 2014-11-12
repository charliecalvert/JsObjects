/**
 * @author Charlie
 */

(function() {
	var app = angular.module('main', []);

	app.controller('ListControl', function($scope) {

		'use strict';

		var listData = [ 
		    { text : 'Attend class at BC', done : false }, 
		    { text : 'Complete JavaScript programs', done : false } 
		];

		$scope.todoList = listData;

		$scope.addTodo = function() {
			$scope.todoList.push({
				text : $scope.todoText,
				done : false
			});
			$scope.todoText = '';
		};

		$scope.remaining = function() {
			var count = 0;
			angular.forEach($scope.todoList, function(todo) {
				count += todo.done ? 0 : 1;
			});
			return count;
		};

		$scope.archive = function() {
			var oldTodos = $scope.todoList;
			$scope.todoList = [];
			angular.forEach(oldTodos, function(todo) {
				if (!todo.done)
					$scope.todoList.push(todo);
			});
		};

	});
})();