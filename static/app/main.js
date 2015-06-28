var module = angular.module('eventManager', ['ngRoute', 'chart.js']);


module.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'static/app/template/home/Home.html',
            controller: ''
        }).when('/income', {
            templateUrl: 'static/app/template/income/Income.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
});

var headers = {
    'Content-Type': 'static/application/json',
    'Accept': 'static/application/json'
};
