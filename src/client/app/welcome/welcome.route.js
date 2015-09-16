(function() {

  'use strict';

  angular
    .module('app.welcome')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'welcome',
        config: {
          url: '/',
          templateUrl: '/welcome/welcome.partial.html',
          controller: 'WelcomeCtrl',
          controllerAs: 'vm',
          title: 'welcome',
          settings: {
              nav: 1,
              content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      }
    ];
  }

})();
