/**
 * @name Control
 */

var myModule = angular.module('myModule', ['ngRoute']);

var queryController = myModule.controller('QueryController',    
    function($scope, result) {
        'use strict';
        if (result.ok) {
            $scope.result = "It worked";
        } else if (result.requestFailed) {
            $scope.result = JSON.stringify(result.requestFailed, null, 4);
        } else {
            $scope.result = result;
        }

        $scope.docs = result.docs;
    });

function runQuery(query, $q) {
    'use strict';
    var defers = $q.defer();
    $.getJSON(query, function(json) {
        defers.resolve(json);
    }).fail(function(jqxhr, textStatus, error) {
        var response = JSON.parse(jqxhr.responseText);
        response.genericError = error;
        response.statusText = textStatus;
        defers.resolve({
            'requestFailed': response
        });
    });
    return defers.promise;
}

queryController.delete = function($q) {
    'use strict';
    return runQuery('/deleteDb', $q);
};

queryController.create = function($q) {
    'use strict';
    return runQuery('/createDb', $q);
};

queryController.statesBulk = function($q) {
    'use strict';
    return runQuery('/insertBulk?fileName=States.json', $q);
};

queryController.statesOneDoc = function($q) {
    'use strict';
    return runQuery('/insertFile?fileName=States.json&id=oneDoc', $q);
};

queryController.design = function($q) {
    'use strict';
    return runQuery('/designDoc', $q);
};

queryController.viewBulk = function($q) {
    'use strict';
    return runQuery('/viewBulk?designDoc=states&view=docBulk', $q);
};

queryController.readOne = function($q) {
    'use strict';
    return runQuery('/read?docName=statesDoc', $q);
};

queryController.viewOneDoc = function($q) {
    'use strict';
    return runQuery('/viewOneDoc?designDoc=states&view=docStatesDoc', $q);
};

queryController.viewBulkAngular = function($q) {
    'use strict';
    return runQuery('/viewStateCapitalAngular?designDoc=states&view=docStateCapital', $q);
};

var nameController = myModule.controller('NameController', function($scope, databaseName, allDbs) {
    'use strict';
    $scope.databaseName = databaseName;
    $scope.allDbs = allDbs;
});

nameController.databaseName = function($q) {
    'use strict';
    return runQuery('/databaseName', $q);
};

nameController.allDbs = function($q) {
    'use strict';
    return runQuery('/listDb', $q);
};

myModule.config(function($routeProvider) {
    'use strict';
    $routeProvider.when('/databaseName', {
        templateUrl: 'templates/DatabaseNames.html',
        controller: 'NameController',
        resolve: {
            databaseName: nameController.databaseName,
            allDbs: nameController.allDbs
        }
    }).when('/deleteDb', {
        templateUrl: 'templates/QueryView.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.delete
        }
    }).when('/createDb', {
        templateUrl: 'templates/QueryView.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.create
        }
    }).when('/insertStatesBulk', {
        templateUrl: 'templates/States.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.statesBulk
        }
    }).when('/insertStatesOneDoc', {
        templateUrl: 'templates/States.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.statesOneDoc
        }
    }).when('/insertDesignDoc', {
        templateUrl: 'templates/QueryView.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.design
        }
    }).when('/readOne', {
        templateUrl: 'templates/QueryView.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.readOne
        }
    }).when('/viewBulk', {
        templateUrl: 'templates/QueryView.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.viewBulk
        }
    }).when('/viewOneDoc', {
        templateUrl: 'templates/QueryView.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.viewOneDoc
        }
    }).when('/viewBulkStatesCapital', {
        templateUrl: 'templates/QueryView.html',
        controller: 'QueryController',
        resolve: {
            result: queryController.viewBulkAngular
        }
    }).otherwise({
        redirectTo: '/'
    });
});

/*
window.onload = function() {
   $.getJSON("/read?docName=3e82f91797ece19dcfa2285dde098e8e", function(result) {
       console.log(result);
   });
} */
