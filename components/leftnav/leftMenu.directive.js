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
		$rootScope.currentTopic = 1;
		//Reveal.slide(1, 1);
		$scope.selectTopic = function (i) {
			$rootScope.currentTopic = i;
			$rootScope.currentSlide = 1;
		}
	}

})(angular.module('TextBookApp'));