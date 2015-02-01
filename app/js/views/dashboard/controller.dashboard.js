'use strict';

angular
  .module('app')
  .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl() {

    var vm = this;

    //setting a variable to run our initial jasmine test against
    vm.test = 'I\'m a test. Use me to run your initial TDD';

  }

