describe('page3Ctrl', function() {
    var ctrl,
        formDataMock = {},
        luckyNumbersMock = {};

    beforeEach(module('exampleApp'));

    beforeEach(inject(function($controller){
        ctrl = $controller('page3Ctrl', {formData:formDataMock, luckyNumbers:luckyNumbersMock});
    }));

    it('binds formData service', function() {
        expect(ctrl.data).to.equal(formDataMock);
    });   

    it('binds luckyNumbers', function() {
        expect(ctrl.luckyNumbers).to.equal(luckyNumbersMock);
    });
});