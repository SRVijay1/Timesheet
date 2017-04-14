/*! TimeSheet - v0.1.0 - 2017-04-14 */// module
var TMAPP = angular.module("timeSheet", []);

TMAPP.controller("loginctrl", function($scope){
	
		
		$scope.username = "";
		$scope.password = "";
		$scope.success = false;
		$scope.usrnm = false;
		$scope.pswrd = false;

	$scope.loginFun = function(){
		
		var uname = "vijay";
		var pwd = "vijay@123";

		var bool = true;
		
		if($scope.username != uname){
			console.log("Enter the Valid Username");
			$scope.usrnm = true;
			//return true;
		}
		if($scope.password != pwd){
			console.log("Enter the valid Password");
			$scope.pswrd = true;
			//return true;
		}
		if($scope.username == uname && $scope.password == pwd){
			
			$scope.success = true;
			$scope.usrnm = false;
			$scope.pswrd = false;
		}
		

	}

//M5882017- kalirathinam

});
TMAPP.service("ajaxservice", function(){
	this.ajax = function(){
		
	}
})