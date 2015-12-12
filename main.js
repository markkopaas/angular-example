var exampleApp = angular.module('exampleApp', []);

exampleApp.controller('helloWorldCtrl', function ($scope) {
  $scope.helloWorld = 'hello world!';
});