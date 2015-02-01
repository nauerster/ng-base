'use strict';


angular
  .module('app')
  .controller('InfoCtrl', InfoCtrl);

  function InfoCtrl() {

    var vm = this;

    vm.version = '0.0.1';
    vm.todos = [
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
