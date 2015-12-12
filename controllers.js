var controllers = angular.module('controllers', []);

controllers.controller('page1Ctrl', function ($scope, formData) {
  	$scope.data = formData;
});

controllers.controller('page2Ctrl', function ($scope, formData) {
  	$scope.data = formData;
});

controllers.controller('page3Ctrl', function ($scope, formData, selectItems) {
  	$scope.data = formData;
  	$scope.items = selectItems;
  	console.log($scope.data.choose)
  	$scope.log = function () {
  		console.log($scope.data.choose)
  	}
});

controllers.controller('pageConfirmCtrl', function ($scope, formData, selectItems) {
  	$scope.data = formData;
});
