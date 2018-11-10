'use strict';

angular.module('perfil').component('perfil', {
    templateUrl: 'perfil/perfil.template.html',
    controller: function($scope, $http) {
        $scope.perfil = 'active';
        $scope.user = {
            nome: localStorage.nome,
            email: localStorage.email,
            endereco: localStorage.endereco
        };
    }
});
