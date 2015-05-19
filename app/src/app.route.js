(function() {

  'use strict';

  angular
    .module('app.router')
    .config(config);

    function config($stateProvider, $urlRouterProvider, $httpProvider) {

      $httpProvider.defaults.useXDomain = true;

      /* For any unmatched url, redirect to /state1 */
      $urlRouterProvider.otherwise('/welcome');

      $stateProvider.state('welcome', {
        url: '/welcome',
        views: {
          content: {
            templateUrl: '/src/welcome/welcome.partial.html',
            controller: 'WelcomeCtrl',
            controllerAs: 'vm'
          }
        }
      });

    }

})();
