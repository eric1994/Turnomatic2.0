var app = angular.module('myApp', []);
  app.controller('customersCtrl', function($scope, $http) {
      $http.get("http://www.opendatacanarias.es/datos/dataset/6b13318c-5b25-4334-99ec-9606aa95b15a/resource/d686f190-6b3c-4e50-8cdc-f770765c7515/download/playas.json")
      .success(function(response) {$scope.names = response.listado;});
  });