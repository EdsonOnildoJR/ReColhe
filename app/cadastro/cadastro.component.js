'use strict';

angular.module('cadastro').component('cadastro', {

    templateUrl: 'cadastro/cadastro.template.html',

    controller: ['$scope', '$http', function($scope, $http, NgMap) {

        $scope.cadastro = function(user) {

            $http.post('http://localhost:3000/usuario/novo', user).then(function(response) {
                console.log(user);
                console.log('Usuario cadastrado');
                window.location = '/#!/';
            });
        };
    }]
});
