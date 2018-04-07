photoModule.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/photo',{
			templateUrl: "photo/photo.html",
			controller: "photoCtrl"
		})
	}]);