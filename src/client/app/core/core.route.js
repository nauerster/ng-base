(function() {

  'use strict';

  angular
    .module('app.core')
    .run(appRun);


  appRun.$inject = ['routerHelper'];

  // see blocks/router-helper.provider.js
  function appRun(routerHelper) {

    // var otherwise = '/404';
    routerHelper.configureStates(getStates());

  }

  function getStates() {
    return [
      {
        state: '404',
        config: {
          url: '/404',
          templateUrl: 'app/core/404.partial.html',
          title: '404'
        }
      }
    ];
  }

})();
