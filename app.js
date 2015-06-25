var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('http://apis.is/earthquake/is').
    success(function(data, status, headers, config) {
      $scope.earthquakes = data.results;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
}])
