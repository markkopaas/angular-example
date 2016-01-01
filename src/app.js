var exampleApp = angular.module('exampleApp', ['ngRoute']);

exampleApp.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider
        .when('/page1', {
            templateUrl: 'page1/page.tpl.html',
            controller: 'page1Ctrl',
            controllerAs: 'ctrl'
        })
        .when('/page2', {
            templateUrl: 'page2/page.tpl.html',
            controller: 'page2Ctrl',
            controllerAs: 'ctrl'
        })
        .when('/page3', {
            templateUrl: 'page3/page.tpl.html',
            controller: 'page3Ctrl',
            controllerAs: 'ctrl'
        })
        .when('/pageConfirm', {
            templateUrl: 'page-confirm/page.tpl.html',
            controller: 'pageConfirmCtrl',
            controllerAs: 'ctrl'
        })
        .otherwise({
            redirectTo: '/page1'
        });
    }
]);
