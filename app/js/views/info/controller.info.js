'use strict';

app.controller('InfoCtrl', ['$scope',
  function($scope) {
    $scope.version = '0.0.1';
    $scope.todos = [
      {
        item: 'add task',
        description: 'add task description.',
        githubUrl: '#',
        completed: true
      },
      {
        item: 'add another task',
        description: 'add another task description.',
        githubUrl: '#',
        completed: false
      }
    ];
  }
]);
