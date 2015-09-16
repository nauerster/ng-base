(function() {

  'use strict';

  angular
    .module('app.welcome')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {

    var otherwise = '/welcome';
    routerHelper.configureStates(getStates(), otherwise);

  }

  function getStates() {
    return [
      {
        state: 'welcome',
        config: {
          url: '/welcome',
          templateUrl: 'app/welcome/welcome.partial.html',
          controller: 'WelcomeCtrl',
          controllerAs: 'vm',
          title: 'Welcome'
          // settings: {
          //     nav: 1,
          //     content: '<i class="fa fa-dashboard"></i> Dashboard'
          // }
        }
      }
    ];
  }

})();
