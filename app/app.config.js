'use strict';

angular.module('app').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/', {
            template: '<inicio></inicio>'
        }).when('/cadastro', {
            template: '<cadastro></cadastro>'
        }).when('/dashboard', {
            template: '<dashboard></dashboard>'
        }).when('/descartar', {
            template: '<descartar></descartar>'
        }).when('/perfil', {
            template: '<perfil></perfil>'
        }).when('/itens', {
            template: '<itens></itens>'
        }).when('/coletar', {
            template: '<coletar></coletar>'
        }).when('/chats', {
            template: '<chats></chats>'
        }).when('/sobre', {
            template: '<sobre></sobre>'
        }).otherwise({
            template: '<inicio></inicio>'
        });
    }
]);
