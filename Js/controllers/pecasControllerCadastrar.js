var conteudo = "";

(function(){
	'use strict';

	angular
	.module('myapp')
	.controller('pecaControllerCadastrar', pecaControllerCadastrar);

	//pecaControllerCadastrar.$inject=['pecasAPICadastrar','$scope'];

	function pecaControllerCadastrar($http,$scope){

		$scope.cadastrar = function(){

            console.log($scope);

            var regras = $scope.peca.propriedades;

            var Indata = {'descricao': $scope.peca.descricao, 'categoria': $scope.peca.categoria,'informacoes': $scope.peca.informacoes,'preco':$scope.peca.preco,'propriedades':regras,'nivel':$scope.peca.nivel};

            console.log(Indata);

            var config = {
                headers : {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }

            $http.post('https://apinode20171234.herokuapp.com/pecas/cadastrar', Indata, config)
            .then(function (Indata, status, headers, config) {
                $scope.PostDataResponse = Indata;
								console.log(Indata);
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
