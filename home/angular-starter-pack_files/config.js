homeModule.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl: "home/home.html",
			controller: "homeCtrl"
		})
	}]);