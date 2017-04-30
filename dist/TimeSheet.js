/*! TimeSheet - v0.1.0 - 2017-04-30 */// module
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

		var indexValue = date_differ + 1;
		$scope.daterange = new Array(indexValue);
		console.log(indexValue)

	}
});
TMAPP.controller("loginctrl", function($scope, $rootScope, ajaxFactory){
		
		$scope.username = "";
		$scope.password = "";
		$scope.success = false;
		$scope.usrnm = false;
		$scope.pswrd = false;
		$rootScope.hideSign = false;
		$rootScope.showSign = false;
		











	$scope.loginFun = function(){
		var bool = true;
		if($scope.username == ""){
			console.log("Enter the valid username");
			$scope.usrnm = true;
			bool = false;
		}
		if($scope.password == ""){
			console.log("Enter the valid password");
			$scope.pswrd = true;
			bool = false;
		}

		if(bool == true){
			var data = {
				username : $scope.username,
				password : $scope.password
			}

			ajaxFactory.ajaxCall("http://localhost/Timesheet/framework/login.php", "POST", "JSON", data, function(response){
				console.log("response", response);
				console.log(response.data);
				console.log(response.data.status);
				$rootScope.hideSign = true;
				
				if(response.data.status == "Success"){
					angular.element('#myModal').modal('hide');
					$rootScope.showSign = true;
					$rootScope.currentUser = $scope.username;
				}
				else{
					console.log("Error");
				}

				
/*				if(username == $scope.username && password == $scope.password){	
					angular.element('#myModal').modal('hide');
				}
*/



			});
		}
		


/*

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
*/	}


});

TMAPP.factory("ajaxFactory", function($http, $q){
	var requestAjax = {};

	requestAjax.ajaxCall = function(url, method, dataType, data, callback) {
		data = data || {};

		$http({
			url : url,
			method : method,
			dataType: dataType,
			headers : {
				'Content-type':'application/x-www-form-urlencoded; charset=UTF-8' 
			},
			data: $.param(data)
		})

		.then(function(result){
			callback(result);
		},function(status, error, config, Result){
			console.log(status);
		});
	};


	return requestAjax;
})