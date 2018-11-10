'use strict';

angular.module('chats').component('chats', {
    templateUrl: 'chats/chats.template.html',
    controller: function($scope) {
        $scope.chats = 'active';
        $scope.conversa = function() {
            alert('foi');
        };
    }
});
