'use strict';

/**
 * @ngdoc function
 * @name patchboardApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the patchboardApp
 */

angular.module('patchboardApp')
 .controller('PostCtrl', ['$scope', '$firebaseObject', '$routeParams', function ($scope, $firebaseObject, $routeParams) {
	
	$scope.posts = $firebaseObject(new Firebase('https://patchboard.firebaseio.com/Posts/'));

	var deets = $routeParams.detailKey;

	$scope.posts.$loaded()
	.then(function(x){
		$scope.detailed_post = x[deets];
		console.log(x[deets]);
	})
	.catch(function(err){
		console.log('Ya got errors, son' + err);
	});

	
  }]);

 
