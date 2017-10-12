var conteudo = "";

(function(){
	'use strict';

	angular
	.module('myapp')
	.controller('missoesControllerCadastrar', missoesControllerCadastrar);

	//pecaControllerCadastrar.$inject=['pecasAPICadastrar','$scope'];

	function missoesControllerCadastrar($http,$scope){

		$scope.cadastrar = function(){

            console.log($scope);

            var regras = $scope.missao.regras;

            var Indata = {'nome': $scope.missao.nome, 'objetivo': $scope.missao.objetivo,'regras':regras};

            console.log(Indata);

            var config = {
                headers : {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }

            $http.post('http://localhost:3000/missoes/cadastrar', Indata, config)
            .then(function (Indata, status, headers, config) {
                $scope.PostDataResponse = Indata;
            },function (Indata, status, header, config) {
                $scope.ResponseDetails = "Data: " + Indata +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };

    }
 /*
    	pecasAPICadastrar.cadastrar(peca).then(function(msg){
				$scope.retorno = msg
        conteudo = data;
        console.log(data);
			}); */

})();
