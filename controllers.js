var controllers = angular.module('controllers', []);

controllers.controller('page1Ctrl', function ($scope, formData) {
  	$scope.data = formData;
});

controllers.controller('page2Ctrl', function ($scope, formData) {
  	$scope.data = formData;
});