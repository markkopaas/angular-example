var controllers = angular.module('controllers', []);

controllers.controller('page1Ctrl', function (formData) {
  	this.data = formData;
});

controllers.controller('page2Ctrl', function (formData) {
  	this.data = formData;
});

controllers.controller('page3Ctrl', function (formData, selectItems) {
  	this.data = formData;
  	this.items = selectItems;
});

controllers.controller('pageConfirmCtrl', function (formData, selectItems) {
  	this.data = formData;
});
