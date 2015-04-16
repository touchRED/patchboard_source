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

 	$scope.posts.$bindTo($scope, 'data')
	.then(function(){
		$scope.detailed_post = $scope.data[deets];
		$scope.useHtml = $sce.trustAsHtml($scope.detailed_post.content);
		if($scope.data[deets].comments){
			if($scope.data[deets].comments[0].user === 'No Comments Yet' && $scope.data[deets].comments.length == 1){
				$scope.comments = $scope.data[deets].comments;
				console.log('event 1 triggered');
			}
			else if($scope.data[deets].comments[0].user === 'No Comments Yet' && $scope.data[deets].comments.length == 2){
				$scope.comments = $scope.data[deets].comments;
				console.log('event 2 triggered');
			}
			else{
				$scope.comments = $scope.data[deets].comments;
				console.log('event 3 triggered');
			}
		}
		$scope.addComment = function(){
			$scope.comments.push({content:$scope.content, user:$scope.user});
			$scope.user = '';
			$scope.content = '';
			if($scope.data[deets].comments[0].user === 'No Comments Yet' && $scope.data[deets].comments.length == 2){
				$scope.comments.shift();
			}
			$scope.posts.$save();
		}
	})
	.catch(function(err){
		console.log('Ya got errors, son' + err);
	});
	
  }]);
//this stays here forever
 
