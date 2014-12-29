'use strict';

app.controller('DashboardCtrl', ['$scope',
  function($scope) {
    //setting a variable to run our initial jasmine test against
    $scope.test = 'I\'m a test. Use me to run your initial TDD';
  }
]);
