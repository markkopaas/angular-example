angular.module('exampleApp')
.controller('page1Ctrl', 
    ['formData', 
    function (formData) {
        this.data = formData;
    }
]);
