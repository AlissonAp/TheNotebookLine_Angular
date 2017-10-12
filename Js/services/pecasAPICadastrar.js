var conteudo = "";

(function(){
	'use strict';

	angular
	.module('myapp')
	.factory('pecasAPICadastrar',pecasAPICadastrar);

	pecasAPICadastrar.$inject = ['$http'];


  function pecasAPICadastrar($http){

    var _msg  = function(){

      return $http({
        method:'POST',
        url:'http://localhost:3000/pecas/cadastrar',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        data: {descricao: $scope.peca.descricao, categoria: $scope.peca.categoria}

      }).then(function(){});

    };
    return{
      cadastrar:_msg
    }
  }

})()
