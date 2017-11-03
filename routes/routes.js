angular.module('ddApp').config(function ($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'myController'
        })
});