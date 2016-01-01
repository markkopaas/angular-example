angular.module('exampleApp')
.factory('formData', function () {
    //initialized with default values
    return {
        text1: 'default1',
        text2: 'default2',
        email: 'chan@ge.me',
        gender: 'female',
        luckyNumber: 7
    };
});
