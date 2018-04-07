// 'use strict';

travelModule.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/travel',{
			templateUrl: "travel/travel.html",
			controller: "travelCtrl"
		})
	}]);