'use strict';

angular.module('uiApp')
  .controller('AngularCtrl', function (NgTableParams) {

    var vm = this;
    var data = [
      { name: "Usuario 1", age: 15 },
      { name: "Usuario 2", age: 16 },
      { name: "User 3", age: 16 },
      { name: "User 4", age: 16 },
      { name: "User 5", age: 16 },
      { name: "User 6", age: 16 },
      { name: "User 7", age: 16 },
      { name: "User 8", age: 16 },
      { name: "User 9", age: 16 },
      { name: "User 10", age: 16 },
      { name: "User 11", age: 16 },
      { name: "User 12", age: 16 },
      { name: "User 13", age: 16 },
      { name: "User 14", age: 16 },
      { name: "User 15", age: 16 },
    ];
    vm.tableParams = new NgTableParams({}, { dataset: data });

  });
