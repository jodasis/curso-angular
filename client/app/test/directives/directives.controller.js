'use strict';

angular.module('uiApp')
  .controller('DirectivesCtrl', function () {
    var vm = this;

    vm.message = 'success';
    // vm.showMenu = true;
    vm.show = true;
    vm.showMenu = function () {
      vm.show = !vm.show;
      return vm.show;
    };
    vm.switch = 'admina';

    vm.getAccess = function () {
      return vm.message;
    }
    vm.timeNow = new Date();

    vm.myObject = {
      name: 'david',
      ega: 25
    };

    vm.price = 50.5;
    vm.users = [
      {
        name: 'juan',
        age: 30
      },
      {
        name: 'david',
        age: 25
      },
      {
        name: 'padro',
        age: 45
      }
    ];

    vm.cadena = 'Hola Mundo';
  });
