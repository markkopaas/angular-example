describe('page2Ctrl', function() {
    var ctrl,
        formDataMock = {};

    beforeEach(module('exampleApp'));

    beforeEach(inject(function($controller){
        ctrl = $controller('page2Ctrl', {formData:formDataMock});
    }));

    it('binds formData service', function() {
        expect(ctrl.data).to.equal(formDataMock);
    });
});