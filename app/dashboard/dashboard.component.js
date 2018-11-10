'use strict';
angular.module('dashboard').component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html',
    controller: function($scope, NgMap) {
        $scope.dashboard = 'active';
        NgMap.getMap("map").then(function(map) {
            $scope.map = map;
            map.customMarkers.foo.setVisible(false);
            $scope.showCustomMarker= function(evt) {
                map.customMarkers.foo.setVisible(true);
                map.customMarkers.foo.setPosition(this.getPosition());
            };
            $scope.closeCustomMarker= function(evt) {
                this.style.display = 'none';
            };
        });
    }
});
