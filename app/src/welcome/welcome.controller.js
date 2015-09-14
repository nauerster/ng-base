// To avoid polluting the global namespace, wrap all of your functions in an IIFE.
(function() {

  'use strict';

  angular
    .module('app.welcome')
    .controller('Welcome', Welcome);

    function Welcome() {
      // we store our controller instance in the vm variable (ViewModel)
      /*jshint validthis: true */
      var vm = this;

          vm.title = "Welcome to ASAP";
          vm.body = "A Sassy AngularJS Plate";

    }

})();


