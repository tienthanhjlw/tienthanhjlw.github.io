(function () {
	'use strict';

	angular.module('myApp', [])

	.controller('LunchCheckController', function ($scope) {
		$scope.name = "";
		var arrayname; 
		$scope.sayHello = function () {
			return "Hello "+$scope.name+" Welcome to Coursera";
		};

		$scope.lunchCheck = function () {
			if($scope.name == "") {
				return console.log("Noo");
			}
			arrayname = $scope.name.split(',');
			console.log(arrayname);
			if (!arrayname.length) {
				$scope.message = "Please enter data first";
				$scope.message_color = "red";

			} else if(arrayname.length > 5) {
				$scope.message = "Too much!";
				$scope.message_color = "green";
			} else {
				$scope.message = "Enjoy!";
				$scope.message_color = "green";
			}
		}
	});

})();