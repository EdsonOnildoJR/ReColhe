'use strict';

angular.module('descartar').component('descartar', {
    templateUrl: 'descartar/descartar.template.html',
    controller: function($scope, $http) {
        $scope.descarte = 'active';

        $scope.produto = {
            idUsuario: localStorage.id
        };
        $scope.descartar = function(produto) {
            console.log(produto);
            $http.post('http://localhost:3000/produto/novo', produto).then(function(response) {
                console.log(response);
            });
            $scope.produto = {};
        };
    }
});
