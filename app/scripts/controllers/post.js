'use strict';

/**
 * @ngdoc function
 * @name patchboardApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the patchboardApp
 */

angular.module('patchboardApp')
 .controller('PostCtrl', ['$scope', '$firebaseObject', '$routeParams', '$location', '$sce', function ($scope, $firebaseObject, $routeParams, $location, $sce) {
	
	$scope.posts = $firebaseObject(new Firebase('https://patchboard.firebaseio.com/Posts/'));

	var deets = $routeParams.detailKey;

	$scope.posts.$loaded()
	.then(function(x){
		$scope.detailed_post = x[deets];
		$scope.useHtml = $sce.trustAsHtml($scope.detailed_post.content);
		if(x[deets].comments){
			$scope.comments = x[deets].comments.splice(1);
		}
		$scope.addComment = function(){
			$scope.comments.push({content:$scope.content, user:$scope.user});
			$scope.user = '';
			$scope.content = '';
			$scope.posts.$save();
		}
		console.log(x[deets]);
	})
	.catch(function(err){
		console.log('Ya got errors, son' + err);
	});
	
  }]);

 
