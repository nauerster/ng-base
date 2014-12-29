describe('InfoCtrl', function() {

    console.log("InfoCtrl Test: " + new Date().toUTCString());

    var scope, $httpBackend;

    beforeEach(function() {

        module('app');

        inject(function($injector) {

            var $rootScope, $controller;
            $rootScope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            scope = $rootScope.$new();

            $controller('InfoCtrl', {
                $scope: scope
            });
        });
    });

    afterEach(function() {
        scope.$destroy();
    });

    it('should be an array', function() {
        expect(scope.version).toBe('0.0.1');
    });

});
