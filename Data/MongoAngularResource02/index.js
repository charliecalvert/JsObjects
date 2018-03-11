angular.module('customResourceDemo', ['mongoMod'])
.constant('CONFIG', {
    DB_NAME: 'elvenlab01',
    API_KEY: 'PUT YOUR KEY HERE'
})
.factory('presidents', function(mongolabResource) {
    return mongolabResource('Presidents');
})
.factory('address', function(mongolabResource) {
    return mongolabResource('address');
})
.controller('CustomResourceCtrl', function($scope, presidents) {

    presidents.query().then(function(presidentData) {
      $scope.presidents = presidentData;
    });

    $scope.addPresident = function() {
      var pres = {
        presidentName: 'John Quincy Adames',
        termStart: 1825,
        termEnd: 1829
    };
      new presidents(pres).$save(function(president) {
            $scope.presidents.push(president);
        });
    };

    $scope.deletePresident = function() {
        var indexOfItemToDelete = 5;
        $scope.presidents[indexOfItemToDelete].$remove(function(deletedObject, headers) {
            $scope.presidents.splice(indexOfItemToDelete, 1);
            $scope.presidentsLength = $scope.presidents.length;
        }, function(err) {
            console.log("error: " + err.data.message);
        });
    };
})
.controller('addressController', function($scope, address) {

    address.query().then(function(address) {
        $scope.addressData = address;
    });
    
    function setData(index) {
    	$scope.addressData[index].firstName = 'Paul';
    	$scope.addressData[index].lastName = 'Jones';
    	$scope.addressData[index].address = '222 Second Street';
    	$scope.addressData[index].city = 'Secondville';
    	$scope.addressData[index].state = 'WA';
    	$scope.addressData[index].zip = '22222';
    	$scope.addressData[index].phoneHome = '22222';
    	$scope.addressData[index].phoneMobile = '222-222-2222';
    	$scope.addressData[index].email = '222@222.com';
    }
    
    function defaultAddress() {
    	return {
            "firstName" : "Paul",
            "lastName" : "Jones",
            "address": "123 First Avenue",
            "city": "New York",
            "state": "NY",
            "zip": "12345",
            "phoneHome": "111-222-3333",
            "phoneMobile": "555-666-8888",
            "email": "one@two.com"            
        };
    }
    
    $scope.defaultData = function() {
    	var address = defaultAddress();
    	$scope.firstName = address.firstName;
    	$scope.lastName = address.lastName;
    	$scope.address = address.address;
    	$scope.city = address.city;
    	$scope.state = address.state;
    	$scope.zip = address.zip;
    	$scope.phoneHome = address.phoneHome;
    	$scope.phoneMobile = address.phoneMobile;
    	$scope.email = address.email;
    };
    
    $scope.save = function() {    	
		var  newAddress = {
            "firstName" : $scope.firstName,
            "lastName" : $scope.lastName,
            "address": $scope.address,
            "city": $scope.city,
            "state": $scope.state,
            "zip": $scope.zip,
            "phoneHome": $scope.phoneHome,
            "phoneMobile": $scope.phoneMobile,
            "email": $scope.email            
        };    	
        new address(newAddress).$save(function(address, r) {
        	 $scope.addressData.push(address);
        });    	
    };
    
    $scope.remove = function() {
    	address.remove($scope.addressData[0]);
    };
});
