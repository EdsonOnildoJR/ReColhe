'use strict';
angular.module('sobre').component('sobre', {
    templateUrl: 'sobre/sobre.template.html',
    controller: function($scope) {
        $scope.sobre = 'active';
    }
});
