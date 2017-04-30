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