describe('Controller: MainCtrl', function () {
  'use strict';

  // load the controller's module
  beforeEach(module('simpleHttpBackendApp'));

  var $http,
    $httpBackend,
    MainCtrl,
    scope;

  beforeEach(inject(function (_$http_, _$httpBackend_) {
    $http = _$http_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should get first and last name of two scientists from json', function () {

    var response = [{"firstName":"Isaac","lastName":"Newton","address":"101 June Street","city":"New York","state":"NY"},{"firstName":"Albert","lastName":"Einstein","address":"101 June Street","city":"Bellevue","state":"WA"},{"firstName":"Neils","lastName":"Bohr","address":"101 June Street","city":"Bellevue","state":"WA"},{"firstName":"Charles","lastName":"Darwin","address":"101 June Street","city":"Bellevue","state":"WA"}];

    $httpBackend.whenGET(scope.url).respond(response);

    scope.getJson(); // Method to test

    $httpBackend.flush(); // Simulates response from server

    expect(scope.values[0]).toEqual('Isaac Newton');
    expect(scope.values[1]).toEqual('Albert Einstein');
    expect(scope.values[2]).toEqual('Neils Bohr');
  });

});
