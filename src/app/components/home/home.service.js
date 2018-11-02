
(function () {
'use strict';

	angular.module('myAppHomeService', [])
		.factory('homeService', function($http){
			function getData() {  
				return $http.get("http://data.fixer.io/api/latest?access_key=6b9ba0b444b32640320983237ce8d950")
					.then(function(response) {
					return response.data;
				});
			}

			return {
				getData: getData
			}	
	});
})();