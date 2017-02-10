(function (app) {
	'use strict';
	app.directive('slides', slides);
	app.controller('slidesCtrl', slidesCtrl);


	function slides() {
		return {
			bindToController: true,
			controller: 'slidesCtrl',
			replace: true,
			restrict: 'E',
			templateUrl: 'components/content/slides.template.html'
		}
	}

	function slidesCtrl($scope, $rootScope,$timeout) {
		$scope.slidesSistemneT1 = [];
		$scope.slidesSistemneT2 = [];

		for (var i = 0; i < 24; i++) {
			$scope.slidesSistemneT1[i] = 'img/sistemne-prog/tema1/Слайд' + (i + 1) + '.PNG';
		}
		for (var i = 0; i < 28; i++) {
			$scope.slidesSistemneT2[i] = 'img/sistemne-prog/tema2/Слайд' + (i + 1) + '.PNG';
		}

		$rootScope.slidesCountT2 = angular.copy($scope.slidesSistemneT2.length);
		$rootScope.slidesCountT1 = angular.copy($scope.slidesSistemneT1.length);
		$rootScope.lastSlide = angular.copy($scope.slidesSistemneT1.length);

	}

})(angular.module('TextBookApp'));

