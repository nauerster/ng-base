(function () {

  'use strict';

  var core = angular.module('app.core');

  var config = {
    appTitle: '<%= appName %>'
  };

  // Turns the above into a string and assigns the value to the apps module
  core.value('config', config);

  core.config(configure);

  // Inject function dependencies
  configure.$inject = ['$logProvider', 'routerHelperProvider'];

  function configure($logProvider, routerHelperProvider) {

      if ($logProvider.debugEnabled) {
          $logProvider.debugEnabled(true);
      }

      routerHelperProvider.configure({docTitle: config.appTitle + ': '});
  }

})();
