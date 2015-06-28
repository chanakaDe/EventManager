var module = angular.module('eventManager', ['ngRoute', 'chart.js']);


module.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'static/app/template/home/Home.html',
            controller: ''
        }).when('/add_session', {
            templateUrl: 'static/app/template/session/AddSession.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
});

var headers = {
    'Content-Type': 'static/application/json',
    'Accept': 'static/application/json'
};
