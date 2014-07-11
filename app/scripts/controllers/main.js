'use strict';

/**
 * @ngdoc function
 * @name patchboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the patchboardApp
 */
angular.module('patchboardApp')
  .controller('MainCtrl', ['$scope', '$firebase', function ($scope, $firebase) {
	
	/*$scope.posts = [
		{
			title: 'First post yeet',
			content:'So basically this is just an awesome first post. Revitalized Patchboard is a go.',
			user:'Connor'
		},
		{
			title: 'Second Post',
			content:'Second post I guess?',
			user:'Connor'
		},
		{
			title: 'Approval',
			content:'I approve.',
			user:'Elon Musk'
		}
    ];*/
	
	$scope.posts = $firebase(new Firebase('https://patchboard.firebaseio.com/Posts/'));
	
	
  }]);
