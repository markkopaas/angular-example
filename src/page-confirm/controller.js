angular.module('exampleApp')
.controller('pageConfirmCtrl', 
    ['formData', 'luckyNumbers', 
    function (formData, luckyNumbers) {
        var selectedLuckyNumber =  luckyNumbers.find(function (luckyNumber) {
            return luckyNumber.number === formData.luckyNumber;
        });

        this.data = formData;
        if (selectedLuckyNumber) {
            this.luckyNumberText = selectedLuckyNumber.text;
        }
    }
]);
