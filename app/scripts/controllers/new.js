'use strict';

/**
 * @ngdoc function
 * @name patchboardApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the patchboardApp
 */

angular.module('patchboardApp')
  .controller('NewCtrl', ['$scope', '$firebaseArray', '$location', function ($scope, $firebaseArray, $location) {
	  $scope.posts = $firebaseArray(new Firebase('https://patchboard.firebaseio.com/Posts/'));

	  $scope.addPost = function(){
		  $scope.posts.$add({title:$scope.title,content:$scope.content,user:$scope.user, comments:[{user:'No Comments Yet', content:""}]});
		  $scope.title = '';
		  $scope.content = '';
		  $scope.user = '';
		  $location.path('/');
		  console.log("done");
	  };
}]);

