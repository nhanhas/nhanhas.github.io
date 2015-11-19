app
.controller('HomeController', ['$scope', '$location', function($scope, $location) { 
		//side bar variable
		$scope.move = false;

		$scope.navigate = function (path) {
			$location.path(path);
		};


		//
		$scope.parseXML = function (){
				$scope.textFile = null;


				var data = new Blob(['asdasda'], {type: 'text/plain'});

				// If we are replacing a previously generated file we need to
				// manually revoke the object URL to avoid memory leaks.
				if ($scope.textFile !== null) {
					window.URL.revokeObjectURL($scope.textFile);
				}

				$scope.textFile = window.URL.createObjectURL(data);

				// returns a URL you can use as a href
				return $scope.textFile;


		};

}]);


