//  To avoid polluting the global namespace, wrap all of your functions in an IIFE.
//  It is advised to have this happen at compilation/concatenation but including it here as an example.
(function() {

  'use strict';

  angular
    .module('app.welcome')
    .controller('WelcomeCtrl', WelcomeCtrl);

    function WelcomeCtrl() {
      // we store our controller instance in the vm variable (ViewModel)
      /*jshint validthis: true */
      var vm = this;

          vm.page = 'welcome';
          vm.title = 'Welcome to ngBase';
          vm.body = 'A AngularJS Starter Projects';

    }

})();


