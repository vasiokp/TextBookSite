﻿var Reveal;

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
		console.log('Slides directive');
		$scope.slidesSistemne = [];
		for (var i = 0; i <= 23; i++) {
			$scope.slidesSistemne[i] = '../../img/sistemne-prog/Слайд' + (i+1) + '.PNG';
		}
		console.log($scope.slidesSistemne);
		$timeout(function() {
		Reveal.initialize(
			{
				controls: false,
			}
		);
		}, 300);

	}

})(angular.module('TextBookApp'));

