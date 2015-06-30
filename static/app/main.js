var module = angular.module('eventManager', ['ngRoute', 'chart.js']);


module.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'static/app/template/home/Home.html',
            controller: ''
        }).when('/add_session', {
            templateUrl: 'static/app/template/session/AddSession.html',
            controller: ''
        }).when('/add_speaker', {
            templateUrl: 'static/app/template/speaker/AddSpeaker.html',
            controller: ''
        }).when('/add_track', {
            templateUrl: 'static/app/template/track/AddTrack.html',
            controller: ''
        }).when('/add_sponsor', {
            templateUrl: 'static/app/template/sponser/AddSponser.html',
            controller: ''
        }).when('/add_location', {
            templateUrl: 'static/app/template/location/AddLocation.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
});

var headers = {
    'Content-Type': 'static/application/json',
    'Accept': 'static/application/json'
};
