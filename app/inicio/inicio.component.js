'use strict';

angular.module('inicio').component('inicio', {
    templateUrl: 'inicio/inicio.template.html',
    controller: function($scope, $http) {
        $scope.cadastro = function () {
            window.location = '/#!/cadastro';
        };
        $scope.login = function(user) {
            $http.post('http://localhost:3000/usuario', user).then(function(response) {
                if (response.status == 200) {
                    localStorage.id = response.data.id;
                    localStorage.nome = response.data.nome;
                    localStorage.email = response.data.email;
                    localStorage.endereco = response.data.endereco;
                    window.location = '/#!/itens';
                } else {
                    console.log('erro ao logar');
                }
            });
        };
    }
});
