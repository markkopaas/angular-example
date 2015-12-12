var controllers = angular.module('controllers', []);

controllers.controller('page1Ctrl', function (formData) {
  	this.data = formData;
});

controllers.controller('page2Ctrl', function (formData) {
  	this.data = formData;
});

controllers.controller('page3Ctrl', function (formData, luckyNumbers) {
  	this.data = formData;
  	this.luckyNumbers = luckyNumbers;

  	this.log = function () {
  		console.log(this.data)
  	}
});

controllers.controller('pageConfirmCtrl', function (formData, luckyNumbers) {
  	var selectedLuckyNumber =  luckyNumbers.find(function (luckyNumber) {
  		return luckyNumber.number === formData.luckyNumber});

  	this.data = formData;
  	if (selectedLuckyNumber) {
	  	this.luckyNumberText = selectedLuckyNumber.text;
  	}
});
