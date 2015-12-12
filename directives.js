var directives = angular.module('directives', []);

directives.controller('navigationCtrl', function($scope, $location, tabs, navigationState) {
	 var ctrl = this;

	 ctrl.tabs = tabs;

	$scope.$on('$locationChangeSuccess', function(event) {
		 ctrl.currentPath = $location.path().replace('/','');
	});
});

directives.directive('tabs', function() {
  return {
  	restrict: 'E',
    template: '<span ng-repeat="tab in ctrl.tabs" ' +
    	'ng-class="{\'activetab\': ctrl.currentPath===tab.path}">' +
    	'<a href = "#/{{tab.path}}">{{tab.label}}</a></span>',
    controller: 'navigationCtrl',
    controllerAs: 'ctrl'
  };
});