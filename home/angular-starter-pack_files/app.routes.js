// app.config(['$routeProvider','$locationProvider',
// 		function($routeProvider,$locationProvider){
// 		$locationProvider.hashPrefix('!');
// 		$routeProvider
// 		.otherwise({
// 			redirectTo:"/home/home.html"
// 		})

// 		$locationProvider.html5Mode(true);
// 	}]);

app.config(['$routeProvider', '$locationProvider', 
	function ($routeProvider, $locationProvider) {  
		$locationProvider.hashPrefix('!');
    	$routeProvider
    	.when('/',{
			templateUrl: "home/home.html",
			controller: "homeCtrl"
			})
    	.otherwise({
 			redirectTo:"/home/home.html"
		})
    	$locationProvider.html5Mode(true);
}]);