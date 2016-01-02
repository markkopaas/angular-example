describe('pageConfirmCtrl', function() {
    var ctrl,
        formDataMock = {},
        luckyNumbersMock = [{number: 3, text: 'three'},{number: 4, text: 'four'}],
        $scope;

    beforeEach(module('exampleApp'));

    beforeEach(inject(function($controller, $rootScope){
        $scope = $rootScope.$new();
        ctrl = $controller('pageConfirmCtrl', {$scope:$scope, formData:formDataMock, luckyNumbers:luckyNumbersMock});
    }));

    it('binds formData service', function() {
        expect(ctrl.data).to.equal(formDataMock);
    });   

    it('looks up the lucky number text', function() {
        formDataMock.luckyNumber = 4;

        $scope.$emit('$routeChangeSuccess');

        expect(ctrl.luckyNumberText).to.equal('four');
    });

    it('looks up the lucky number text and uses empty, if not found', function() {
        formDataMock.luckyNumber = 5;

        $scope.$emit('$routeChangeSuccess');

        expect(ctrl.luckyNumberText).to.equal('');
    });
});