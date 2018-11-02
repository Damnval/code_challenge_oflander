(function () {
'use strict';

	angular.module('myAppHomeCtrl', [])
		.controller('homeController', ['$scope', 'homeService', function($scope, homeService){
		var data =  [];

	   var myDataPromise = homeService.getData();
	    myDataPromise.then(function(result) {  

	       // this is only run after getData() resolves
	       	$scope.currency = result;
	       	angular.forEach($scope.currency.rates, function(value, key) {
			  data.push( [key, value] );
			});

			angular.element(document).ready(function () {
				$('#myTable').DataTable({
					data: data,
					columns: [
					{ title: "Currency" },
					{ title: "Value" }	         
					]
	  		  	});	
			});
	    });
	}]);

})();