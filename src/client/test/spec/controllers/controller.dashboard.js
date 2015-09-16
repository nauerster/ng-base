describe('DashboardCtrl', function() {
    console.log("DashboardCtrl Test: " + new Date().toUTCString());

    var scope, ctrl, factory, http, httpback;

    beforeEach(function() {

        module('app');

        inject(function($rootScope, $controller, $injector) {

            scope = $rootScope.$new();
            factory = $injector.get('baseFactory');
            http = $injector.get("$http");
            httpback = $injector.get("$httpBackend");

            ctrl = $controller('DashboardCtrl', {
                $scope: scope,
                'baseFactory': factory,
                $http: http,
            });
        });
    });

    afterEach(function() {
        scope.$destroy();
    });

    it('should be a text string', function() {
        expect(scope.test).toBe('I\'m a test. Use me to run your initial TDD');
    });

});
