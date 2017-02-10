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
		$scope.currentSlide = 1;

		$scope.goToSlide = function (slide) {
			Reveal.slide(1,slide-1);
		}

		$scope.nextSlide = function () {
			if ($scope.currentSlide < $rootScope.slidesCount) 
				$scope.currentSlide++;
		}

		$scope.prewSlide = function () {
			if ($scope.currentSlide > 1)
				$scope.currentSlide--;
		}
	}

})(angular.module('TextBookApp'));