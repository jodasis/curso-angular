'use strict';

angular.module('uiApp')
  .filter('myFilter', function () {
    return function (input) {
      return input.toLowerCase();
    };
  });
