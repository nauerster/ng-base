/* Help configure the state-base ui.router */
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

      function RouterHelper($location, $rootScope, $state) {

        var hasOtherwise = false,
            service = {
              configureStates: configureStates,
              getStates: getStates
            };


        // see below
        init();

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

        // Route cancellation:
        // On routing error, go to the dashboard.
        function handleRoutingErrors() {
          $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error) {
              if (handlingStateChangeError) {
                return;
              }

              stateCounts.errors++;
              handlingStateChangeError = true;

              var destination = (toState && (toState.title || toState.name || toState.loadedTemplateUrl)) || 'unknown target';

                  console.log(destination);

              var msg = 'Error routing to ' + destination + '. ' + (error.data || '') + '. <br/>' + (error.statusText || '') + ': ' + (error.status || '');

                  console.log(msg);

              $location.path('/');
            }
          );
        }


        function init() {
          handleRoutingErrors();
          updateDocTitle();

        }


        function getStates() {

          return $state.get();

        }

        function updateDocTitle() {

          $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {

              var title = config.docTitle + ' ' + (toState.title || '');

              $rootScope.title = title; // data bind to <title>

            }
          );
        }
      }

    }

})();

// Reference: https://github.com/johnpapa/generator-hottowel/blob/master/app/templates/src/client/app/blocks/router/router-helper.provider.js
