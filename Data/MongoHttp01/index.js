angular.module('customResourceDemo', ['mongoMod'])
.constant('CONFIG', {
    DB_NAME: 'elvenlab01',    
    API_KEY: 'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy'
})
.factory('presidents', function (mongolabResource) {
    return mongolabResource('Presidents');
})
.controller('CustomResourceCtrl', function ($scope, presidents) {

    presidents.query().then(function(presidentData){
      $scope.presidents = presidentData;
    });

    $scope.addPresident = function () {
      var pres = { 
        presidentName: 'John Quincy Adames', 
        termStart: 1825, 
        termEnd: 1829 };
      new presidents(pres)
      .$save(function(president, r) {
          $scope.presidents.push(president);
      });
    };
    
    $scope.deletePresident = function() {
        var indexOfItemToDelete = 5;
        // if (indexOfItemToDelete < $scope.presidents.length) {}
        $scope.presidents[indexOfItemToDelete].$remove(function(deletedObject, headers) {
            $scope.presidents.splice(indexOfItemToDelete, 1);
            $scope.presidentsLength = $scope.presidents.length;
        }, function(err) {
            console.log("error: " + err.data.message);  
        });
    };
  });

