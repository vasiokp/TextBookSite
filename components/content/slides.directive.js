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
		$rootScope.countTopics = 3;

		var topicsName = [];
		topicsName[0] = 'Розробка мовних процесорів мов програмування';
		topicsName[1] = 'Елементи теорії формальних мов';
		topicsName[2] = 'Регулярні множини';


		$rootScope.slides = [];

		function initSlides(count, topicNum) {

				var slides =[];
				for (var i = 0; i < count; i++) {
					slides[i] = 'img/sistemne-prog/tema' + topicNum + '/Слайд' + (i + 1) + '.PNG';
				}
				var topic = {
					Name: 'Тема ' + topicNum + '. ' + topicsName[topicNum-1],
					Slides: slides
				}
				$rootScope.topics.push(topic);
		}

		initSlides(24, 1);
		initSlides(28, 2);
		initSlides(14, 3);

		console.log($rootScope.topics);

	}

})(angular.module('TextBookApp'));

