var directives = angular.module('directives', []);

directives.controller('navigationCtrl', function($scope, $location, tabs) {
	 var ctrl = this;

	 ctrl.tabs = tabs;

	$scope.$on('$locationChangeSuccess', function(event) {
		ctrl.currentPath = $location.path().replace('/','');
	});

	ctrl.tabIndex = function (path) {
		var foundIndex;

		ctrl.tabs.forEach(function (tab, index) {
			if(tab.path === path) {
				foundIndex = index;
			}
		});

		return foundIndex;
	}

	ctrl.isFirst = function () {
		return ctrl.currentPath === ctrl.tabs[0].path;
	}

	ctrl.isLast = function () {
		return ctrl.currentPath === ctrl.tabs[ctrl.tabs.length - 1].path;
	}

	ctrl.getPreviousPath = function () {
		return ctrl.tabs[ctrl.tabIndex(ctrl.currentPath)-1].path;
	}

	ctrl.getNextPath = function () {
		return ctrl.tabs[ctrl.tabIndex(ctrl.currentPath)+1].path;
	}

	ctrl.confirm = function () {
		alert('Confirmed, thank you!');
	}
});

directives.directive('tabs', function () {
	return {
		restrict: 'E',
		template: '<span ng-repeat="tab in ctrl.tabs" ' +
			'ng-class="{\'activetab\': ctrl.currentPath===tab.path}">' +
			'<a href = "#/{{tab.path}}">{{tab.label}}</a></span>',
		controller: 'navigationCtrl',
		controllerAs: 'ctrl'
	};
});

directives.directive('navigation', function () {
  return {
  	restrict: 'E',
    template: '<span ng-show="!ctrl.isFirst()">' +
    	'<a href = "#/{{ctrl.getPreviousPath()}}">Previous</a></span>' +
    	'<span ng-show="!ctrl.isLast()">' +
    	'<a href = "#/{{ctrl.getNextPath()}}">Next</a></span>' +
    	'<span ng-show="ctrl.isLast()" ng-click="ctrl.confirm()">' +
    	'<a href = "#">Confirm</a></span>',
    controller: 'navigationCtrl',
    controllerAs: 'ctrl'
  };
});