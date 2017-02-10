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
		$rootScope.topics = [];
		$scope.slidesSistemneT1 = [];
		$scope.slidesSistemneT2 = [];
		$scope.slidesSistemneT3 =[];

		$rootScope.slides = [];

		function initSlides(count, topicNum) {
			var slides =[];
			for (var i = 0; i < count; i++) {
				slides[i] = 'img/sistemne-prog/tema' + topicNum + '/Слайд' + (i + 1) + '.PNG';
			}
			var topic = {
				Name : 'Тема '+ topicNum+'.',
				Slides: slides
			}
			$rootScope.topics.push(topic);
		}

		initSlides(24, 1);
		initSlides(28, 2);
		initSlides(14, 3);

		console.log($rootScope.topics);
		$rootScope.slidesCountT2 = angular.copy($scope.slidesSistemneT2.length);
		$rootScope.slidesCountT1 = angular.copy($scope.slidesSistemneT1.length);
		$rootScope.lastSlide = angular.copy($scope.slidesSistemneT1.length);

	}

})(angular.module('TextBookApp'));

