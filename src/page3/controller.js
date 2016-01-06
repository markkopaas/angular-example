angular.module('exampleApp')
.controller('page3Ctrl', 
    ['formData', 'luckyNumbers', 
    function (formData, luckyNumbers) {
        this.data = formData;
        this.luckyNumbers = luckyNumbers;
    }
]);