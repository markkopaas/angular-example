var exampleApp = angular.module('exampleApp', [
    'ngRoute', 'controllers', 'services', 'constants']);

exampleApp.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: 'partials/page1.html',
            controller: 'page1Ctrl'
        })
        .when('/page2', {
            templateUrl: 'partials/page2.html',
            controller: 'page2Ctrl'
        })
        .when('/page3', {
            templateUrl: 'partials/page3.html',
            controller: 'page3Ctrl'
        })
        .when('/pageConfirm', {
            templateUrl: 'partials/pageConfirm.html',
            controller: 'pageConfirmCtrl'
        })
        .otherwise({
            redirectTo: '/page1'
        });
    }
]);