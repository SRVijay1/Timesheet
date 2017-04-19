/*! TimeSheet - v0.1.0 - 2017-04-20 */// module
var TMAPP = angular.module("timeSheet", []);

TMAPP.controller("timeCtrl", function($scope){
	
	$scope.startDate = "";
	$scope.endDate = "";


	$scope.saveAttend = function(){
		console.log($scope.startDate);
		console.log($scope.endDate);

		var sDate = $scope.startDate; 
		var eDate = $scope.endDate;

		var date_differ = parseInt((eDate - sDate)/(24*3600*1000));

		console.log(date_differ);
	}
});
TMAPP.controller("loginctrl", function($scope, $rootScope, $ajaxservice){
		
		$scope.username = "";
		$scope.password = "";
		$scope.success = false;
		$scope.usrnm = false;
		$scope.pswrd = false;
		$rootScope.hideSign = false;
		$rootScope.showSign = false;
		


	$scope.loginFun = function(){
//		$ajaxservice.ajax();

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
			$rootScope.hideSign = true;
			angular.element('#myModal').modal('hide');
		}
		if($rootScope.hideSign == true){
			console.log(uname);
			$rootScope.showSign = true;
			$rootScope.currentUser = uname;
		}
	}

});

TMAPP.service("$ajaxservice", function($http){
	this.ajax = function() {
		var data = {};
		$http({
			url : "./ajax/login.json",
			method : "post",
			dataType: "json",
			headers : {
				'Content-type':'application/x-www-form-urlencoded; charset=UTF-8' 
			},
			data: $.param(data)
		}).success(function(response) {
			console.log(response);
		}).error(function(response) {
			$scope.myWelcome = response.statusText;
		});

	}
})