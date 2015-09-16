(function() {

  'use strict';

  angular
    .module('blocks.router')
    .provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {

      /* jshint validatethis:true */
      var config = {

        docTitle: undefined,
        resolveAlways: {}

      };

      /* Changes the routing and URLs of our pages without refreshing the page. */
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
      });


      this.configure = function(cfg) {
        // note: .extend(destination, source);
        angular.extend(config, cfg);
      };

      // returns the actual logic implemented inside the provider
      this.$get = RouterHelper;

      RouterHelper.$inject = ['$location', '$rootScope', '$state'];

      function RouterHelper($location, $rootscope, $state) {

        var hasOtherwise = false,
            service = {
              configureStates: configureStates,
              getStates: getStates
            };

        return service;

        //////////////////////////////////////

        function configureStates(states, otherwisePath) {

          states.forEach(function(state) {

            state.config.resolve = angular.extend(state.config.resolve || {}, config.resolveAlways);
            $stateProvider.state(state.state, state.config);

          });

          if(otherwisePath && !hasOtherwise) {
            hasOtherwise = true;
            $urlRouterProvider.otherwise(otherwisePath);
          }

        }

        function getStates() {

          return $state.get();

        }

      }

    }

})();



/*
 * Research Links:
 *
 * https://github.com/johnpapa/angular-styleguide#naming
 *
 * https://github.com/johnpapa/ng-demos/blob/master/modular/src/client/app/blocks/router/routehelper.js
 *
 * https://github.com/MSakamaki/angular-spa/blob/master/app/config.route.js
 *
 * http://www.nuget.org/packages/hottowel.angular
 */
