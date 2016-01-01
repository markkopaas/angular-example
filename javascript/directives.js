var directives = angular.module('directives', []);

directives.directive('tabs', function () {
    return {
        restrict: 'E',
        template: '<span ng-repeat="tab in ctrlTabs.tabs" ' +
            'ng-class="{\'activetab\': ctrlTabs.currentPath===tab.path}">' +
            '<a href = "#{{tab.path}}">{{tab.label}}</a></span>',
        controller: ['$scope', '$location', 'tabs',
            function($scope,  $location, tabs) {
                var ctrl = this;

                ctrl.tabs = tabs;
        
                $scope.$on('$locationChangeSuccess', onLocationChange);
                
                function onLocationChange() {
                    ctrl.currentPath = $location.path();
                }
            }
        ],
        controllerAs: 'ctrlTabs'
    };
});

directives.directive('navigation', function () {
    return {
        restrict: 'E',
        template: '<span ng-show="!ctrl.isFirst">' +
            '<a href = "#{{ctrl.previousPath}}">Previous</a></span>' +
            '<span ng-show="!ctrl.isLast">' +
            '<a href = "#{{ctrl.nextPath}}">Next</a></span>' +
            '<span ng-show="ctrl.isLast" ng-click="ctrl.confirm()">' +
            '<a href = "#">Confirm</a></span>',
        controller: ['$scope', '$location', 'tabs',
            function($scope, $location, tabs) {
                var ctrl = this;

                ctrl.confirm = function () {
                    alert('Confirmed, thank you!');
                };

                $scope.$on('$locationChangeSuccess', onLocationChange);

                function onLocationChange () {
                    ctrl.currentPath = $location.path();
                    ctrl.isFirst = ctrl.currentPath === tabs[0].path;
                    ctrl.isLast = ctrl.currentPath === tabs[tabs.length - 1].path;
                    ctrl.previousPath = ctrl.isFirst ? null : tabs[tabIndex(ctrl.currentPath) - 1].path;
                    ctrl.nextPath = ctrl.isLast ? null : tabs[tabIndex(ctrl.currentPath) + 1].path;
                }

                function tabIndex (path) {
                    var foundIndex;

                    tabs.forEach(function (tab, index) {
                        if(tab.path === path) {
                            foundIndex = index;
                        }
                    });

                    return foundIndex;
                }
            }
        ],
        controllerAs: 'ctrl'
    };
});