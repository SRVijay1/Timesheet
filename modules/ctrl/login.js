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
