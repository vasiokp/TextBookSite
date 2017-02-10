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

	function leftMenuCtrl($scope, $rootScope,$timeout) {
		$rootScope.currentTopic = 1;
		$rootScope.currentSlide = 1;
		$rootScope.lastSlide = $rootScope.slidesCountT1

		$scope.selectTopic = function (i) {
			$rootScope.currentTopic = i;
			$rootScope.currentSlide = 1;
			if (i == 1) {
				$rootScope.lastSlide = $rootScope.slidesCountT1
				Reveal.slide(0, 0);
			}
			if (i == 2) {
				Reveal.slide(1, 0);
				$rootScope.lastSlide = $rootScope.slidesCountT2;
			}
		
		}

	}

})(angular.module('TextBookApp'));