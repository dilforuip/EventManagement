var photoModule = angular.module("myApp.photo",['ngRoute'])
	.controller('photoCtrl',function(){
		vm = this;
		var print = "Hello"
		activate();
		vm.userName = '';
		function activate() {
			console.log(print);
		}
	});
