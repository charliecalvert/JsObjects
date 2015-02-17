# simple-http-backend

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

```
var $http, $httpBackend, $scope, ctrl, url;

beforeEach(inject(function (_$http_, _$httpBackend_) {
  $http = _$http_;
  $httpBackend = _$httpBackend_;
}));

it('should return Alabama state information', function () {

  var response = [["P0010001","NAME","state"],["4779736","Alabama","01"]];
  
  $httpBackend.whenGET($scope.url).respond(response);

  //invoke code under test
  $scope.getStates();

  //simulate response
  $httpBackend.flush();

  //verify results
  expect($scope.response1.length).toEqual(3);
  expect($scope.response2.length).toEqual(3);
});

afterEach(function() {
  $httpBackend.verifyNoOutstandingExpectation();
  $httpBackend.verifyNoOutstandingRequest();
});
```
