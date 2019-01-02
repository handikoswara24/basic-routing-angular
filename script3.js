var app = angular.module("project", ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'utama.html'
        })
        .when('/galeri', {
            templateUrl: 'galeri.html'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'utama.html'
        })
        .when('/galeri', {
            templateUrl: 'galeri.html'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

app.controller('operasi', function ($scope) {
    $scope.gambar = ['alo1', 'alo2', 'alo3', 'alo4', 'pemandangan1', 'pemandangan2', 'pemandangan3'];
});