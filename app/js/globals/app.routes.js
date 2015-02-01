'use strict';

angular
  .module('app.core')
  .config(routes);

  function routes($stateProvider, $urlRouterProvider, $httpProvider) {

      $httpProvider.defaults.useXDomain = true;

      $stateProvider.state('info', {
          url: '/info',
          views: {
              content: {
                  templateUrl: '/includes/views/info/partial.info.html',
                  controller: 'InfoCtrl',
                  controller: 'vm'
              }
          }
      }).state('dashboard', {
          url: '/dashboard',
          views: {
              content: {
                  templateUrl: '/includes/views/dashboard/partial.dashboard.html',
                  controller: 'DashboardCtrl',
                  controller: 'vm'
              }
          }
      });

      $urlRouterProvider.otherwise('/info');
  }
