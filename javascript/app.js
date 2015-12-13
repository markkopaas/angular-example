var exampleApp = angular.module('exampleApp', [
    'ngRoute', 'controllers', 'services', 'constants', 'directives']);

exampleApp.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: 'partials/page1.html',
            controller: 'page1Ctrl',
            controllerAs: 'ctrl'
        })
        .when('/page2', {
            templateUrl: 'partials/page2.html',
            controller: 'page2Ctrl',
            controllerAs: 'ctrl'
        })
        .when('/page3', {
            templateUrl: 'partials/page3.html',
            controller: 'page3Ctrl',
            controllerAs: 'ctrl'
        })
        .when('/pageConfirm', {
            templateUrl: 'partials/pageConfirm.html',
            controller: 'pageConfirmCtrl',
            controllerAs: 'ctrl'
        })
        .otherwise({
            redirectTo: '/page1'
        });
    }
]);
