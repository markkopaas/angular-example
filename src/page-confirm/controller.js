angular.module('exampleApp')
.controller('pageConfirmCtrl', 
    ['$scope','formData', 'luckyNumbers', 
    function ($scope, formData, luckyNumbers) {
        var self = this;

        this.data = formData;

        $scope.$on('$routeChangeSuccess', function () {
            self.luckyNumberText = '';

            for (var i = 0; i<luckyNumbers.length; i++) {
                if(luckyNumbers[i].number === formData.luckyNumber) {
                    self.luckyNumberText = luckyNumbers[i].text;
                    break;
                }
            }
        });
    }
]);
