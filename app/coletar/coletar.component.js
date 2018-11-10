'use strict';

angular.module('coletar').component('coletar', {

    templateUrl: 'coletar/coletar.template.html',

    controller: function($scope, $http, NgMap, $modal) {
        $scope.coleta = 'active';

        $scope.carinha = {};

        $http.get('http://localhost:3000/produtos').then(function (response) {
            console.log(response);
            $scope.pontos = response.data;
        });

        $scope.buscar = function (busca) {

            $http.get('http://localhost:3000/produto/' + busca).then(function (response) {
                if (!(response.data instanceof Array)) {
                    $scope.pontos = [response.data];
                } else {
                    $scope.pontos = response.data;
                }
            });
        };

        $scope.rota = function () {
            $scope.wayPoints = [];
            for (var i in $scope.pontos) {
                $scope.wayPoints.push({
                    location: $scope.pontos[i].endereco,
                    stopover: false
                });
            }
            $scope.pontos = [];
        };

        NgMap.getMap("map").then(function(map) {
            $scope.map = map;
            $scope.showData = function() {

            };
        });
    }
});
