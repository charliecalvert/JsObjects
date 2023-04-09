angular
    .module('customResourceDemo')
    .factory('address', function(mongolabResource) {
        return mongolabResource('address');
    })
    .controller('addressController', function($scope, address) {
        function showAddress() {
            address.query().then(function(address) {
                $scope.addressData = address;
            });
        }

        function defaultAddress() {
            return {
                firstName: 'Paul',
                lastName: 'Jones',
                address: '123 First Avenue',
                city: 'New York',
                state: 'NY',
                zip: '12345',
                phoneHome: '111-222-3333',
                phoneMobile: '555-666-8888',
                email: 'one@two.com'
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
            var newAddress = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                address: $scope.address,
                city: $scope.city,
                state: $scope.state,
                zip: $scope.zip,
                phoneHome: $scope.phoneHome,
                phoneMobile: $scope.phoneMobile,
                email: $scope.email
            };
            new address(newAddress).save(function(address) {
                showAddress();
            });
        };

        $scope.remove = function() {
            address.remove($scope.addressData[0]);
        };

        showAddress();
    });
