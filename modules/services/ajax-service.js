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