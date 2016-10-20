'use strict';

angular.module('uiApp')
  .controller('ListCtrl', function ($state) {
    var vm = this;
    vm.tabs = [
      {
        index: 0,
        title: 'Angular',
        state: 'angular',
      },
      {
        index: 1,
        title: 'Java',
        state: 'java',
      }
    ];
    
    vm.select = select;

    function select(index) {
      $state.go(vm.tabs[index].state);
    }
    //$scope.message = 'Hello';
  });
