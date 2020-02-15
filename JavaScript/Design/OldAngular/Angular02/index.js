/**
 * @author Charlie
 */

(function() {
    var app = angular.module('main', []);

    app.controller('ListControl', function($scope) {
        'use strict';

        var listData = [
            { text: 'Attend class at BC', done: false },
            { text: 'Complete JavaScript programs', done: false }
        ];

        $scope.oldTodos = [];
        $scope.todoList = listData;
        $scope.archiveDone = [];

        $scope.addTodo = function() {
            $scope.todoList.push({
                text: $scope.todoText,
                done: false
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

        function arrayUnique(array) {
            var a = array.concat();
            for (var i = 0; i < a.length; ++i) {
                for (var j = i + 1; j < a.length; ++j) {
                    if (a[i] === a[j]) a.splice(j--, 1);
                }
            }

            return a;
        }

        $scope.archive = function() {
            $scope.oldTodos = $scope.oldTodos.concat($scope.todoList);
            $scope.oldTodos = arrayUnique($scope.oldTodos);
            $scope.todoList = [];
            angular.forEach($scope.oldTodos, function(todo) {
                if (!todo.done) {
                    $scope.todoList.push(todo);
                } else {
                    $scope.archiveDone.push(todo);
                    $scope.archiveDone = arrayUnique($scope.archiveDone);
                }
            });
        };

        $scope.showTodos = function() {
            angular.forEach($scope.oldTodos, function(todo) {
                console.log(todo);
            });
        };
    });
})();
