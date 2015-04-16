'use strict';

/**
 * @ngdoc function
 * @name patchboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the patchboardApp
 */
angular.module('patchboardApp')
  .controller('MainCtrl', ['$scope', '$firebaseArray', '$sce', function ($scope, $firebaseArray, $sce) {
	
	$scope.posts = $firebaseArray(new Firebase('https://patchboard.firebaseio.com/Posts/'));

	$scope.posts.$loaded()
	.then(function(x){
		x.forEach(function(e){
			// $scope["useHtml" + e.$id] = $sce.trustAsHtml(e.content);
			e.useHtml = $sce.trustAsHtml(e.content);
		});
	})
	.catch(function(err){
		console.log('Ya got errors, son' + err);
	});
	
  }]);


