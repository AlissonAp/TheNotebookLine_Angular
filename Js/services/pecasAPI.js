var conteudo = "";

(function(){
	'use strict';

	angular
	.module('myapp')
	.factory('pecasAPI',pecasAPI);

	pecasAPI.$inject = ['$http'];

	function pecasAPI($http){
		var _listar  = function(){
			return $http.get('http://localhost:3000/pecas/');
		};
		return{

			listar:_listar
		}
	}

})()
