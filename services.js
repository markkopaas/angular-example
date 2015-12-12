
var services = angular.module('services', []);

services.factory('formData', function (selectItems) {
	return {
  		text1: 'default1',
  		text2: 'default2',
  		email: 'chan@ge.me',
  		gender: 'female',
  		choose: selectItems[0]
  	};
});