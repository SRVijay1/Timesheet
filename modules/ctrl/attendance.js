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