var photoModule = angular.module("myApp.signup",['ngRoute'])
	.controller('signupCtrl',function(){
		vm = this;
		activate();
		vm.userName = '';
		function activate() {
			console.log(print);
		}
	});
