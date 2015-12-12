var controllers = angular.module('controllers', []);

controllers.controller('page1Ctrl', function ($scope, formData) {
  	$scope.data = formData;
});