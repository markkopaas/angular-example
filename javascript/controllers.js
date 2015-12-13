var controllers = angular.module('controllers', []);

controllers.controller('page1Ctrl', ['formData', function (formData) {
  	this.data = formData;
}]);

controllers.controller('page2Ctrl', ['formData', function (formData) {
  	this.data = formData;
}]);

controllers.controller('page3Ctrl', ['formData', 'luckyNumbers', function (formData, luckyNumbers) {
  	this.data = formData;
  	this.luckyNumbers = luckyNumbers;
}]);

controllers.controller('pageConfirmCtrl', ['formData', 'luckyNumbers', function (formData, luckyNumbers) {
  	var selectedLuckyNumber =  luckyNumbers.find(function (luckyNumber) {
  		return luckyNumber.number === formData.luckyNumber});

  	this.data = formData;
  	if (selectedLuckyNumber) {
	  	this.luckyNumberText = selectedLuckyNumber.text;
  	}
}]);
