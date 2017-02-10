(function (app) {
	'use strict';
	app.directive('controllButton', controll);
	app.controller('controllCtrl', controllCtrl);

	function controll() {
		return {
			bindToController: true,
			controller: 'controllCtrl',
			replace: true,
			restrict: 'E',
			templateUrl: 'components/controll/controll.template.html'
		}
	}

	function controllCtrl($scope, $rootScope) {
		$rootScope.currentSlide = 1;

		$scope.goToSlide = function (slide) {
			Reveal.slide(1,slide-1);
		}

		$scope.nextSlide = function () {
			if ($rootScope.currentSlide < $rootScope.slidesCountT1)
				$rootScope.currentSlide++;
		}

		$scope.prewSlide = function () {
			if ($rootScope.currentSlide > 1)
				$rootScope.currentSlide--;
		}
	}

})(angular.module('TextBookApp'));