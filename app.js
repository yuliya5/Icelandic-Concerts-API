var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', '$http', function ($scope, $http, $q) {
	// $http.get('http://apis.is/concerts').
 //    success(function(data, status, headers, config) {
 //      $scope.concerts = data.name;

 //    })


    $scope.getConcert = function(){
    	// var deferred = $q.defer();
    	$http({
	    	method: 'GET', 
	        url: 'http://apis.is/concerts',
	  		// dataType: 'json',
	  		// success: function(response) {
	    // 		console.log(response);
  			// }
    	})
    	.then(function(concertData){
    		// deferred.resolve(concertData);
    		console.log(concertData)
    		$scope.concerts = concertData.data.results;
    	})
    	// return deferred.promise;
    }


    $scope.getConcert(); //this automatically displays all the pictures in the window

}])





