'use strict';

/**
 * @ngdoc function
 * @name patchboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the patchboardApp
 */
angular.module('patchboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
