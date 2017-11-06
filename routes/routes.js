angular.module('ddApp').config(function ($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'myController'
        })
        .state('listado', {
            url: '/listado',
            templateUrl: '/views/listado.html',
            controller: 'myController'
        })
        .state('listado.personaje', {
            url: '/listado/:personajeId',
            templateUrl: '/views/personajes.html',
            controller: 'myController'
        })
});