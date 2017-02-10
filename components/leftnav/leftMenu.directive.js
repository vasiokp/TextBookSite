(function (app) {
	'use strict';
	app.directive('leftMenu', leftMenu);
	app.controller('leftMenuCtrl',leftMenuCtrl);

	function leftMenu(){
		return{
			bindToController: true,
			controller: 'leftMenuCtrl',
			replace: true,
			restrict: 'E',
			templateUrl: 'components/leftnav/leftMenu.template.html'
		}
	}

	function leftMenuCtrl($scope, $rootScope) {
		console.log('leftmeny work!!)')
	}

})(angular.module('TextBookApp'));