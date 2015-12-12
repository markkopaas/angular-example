
var services = angular.module('services', []);

services.factory('formData', function () {
	return {
  		text1: 'default1',
  		text2: 'default2'	
  	};
});