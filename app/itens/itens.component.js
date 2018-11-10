'use strict';
angular.module('itens').component('itens', {
    templateUrl: 'itens/itens.template.html',
    controller: function($scope, $http, $modal) {

        var modal = document.getElementById('modal');

        $scope.meusItens = 'active';
        $http.get('http://localhost:3000/produto/' + localStorage.id).then(function (response) {
            $scope.itens = response.data;
        });
        $scope.modal = function (item) {
            $scope.selected = item;
        };
        $scope.alterar = function (item) {
            $http.post('http://localhost:3000/produto/'+ item.id +'/edit', item).then(function(response) {
                console.log(response);
            });
        };
        $scope.apagar = function (item) {
            $http.post('http://localhost:3000/produto/'+ item.id +'/del', item).then(function(response) {
                console.log(response);
                $scope.itens.pop(item);
            });
        };
    }
});
