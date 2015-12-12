var exampleApp = angular.module('exampleApp', ['ngRoute', 'controllers', 'services']);

exampleApp.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: 'partials/page1.html',
            controller: 'page1Ctrl'
        })
        .otherwise({
            redirectTo: '/page1'
        });
    }
]);