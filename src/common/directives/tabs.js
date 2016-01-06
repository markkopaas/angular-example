angular.module('exampleApp')
.directive('tabs', function () {
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
