'use strict';

/**
 * @ngdoc function
 * @name patchboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the patchboardApp
 */
angular.module('patchboardApp')
  .controller('MainCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
	
	$scope.posts = $firebaseArray(new Firebase('https://patchboard.firebaseio.com/Posts/'));
	
  }]);


