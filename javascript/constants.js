var constants = angular.module('constants', []);

constants.value('luckyNumbers', [
	{number: 7, text: 'seven'},
	{number: 11, text: 'eleven'}
])

constants.value('tabs', [
	{path: '/page1', label: 'Personal'},
	{path: '/page2', label: 'Deeply private'},
	{path: '/page3', label: 'Important'},
	{path: '/pageConfirm', label: 'Confirm'}
]);