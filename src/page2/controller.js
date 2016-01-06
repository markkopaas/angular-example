angular.module('exampleApp')
.controller('page2Ctrl', 
    ['formData', 
    function (formData) {
        this.data = formData;
    }
]);
