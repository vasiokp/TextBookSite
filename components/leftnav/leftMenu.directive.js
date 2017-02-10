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

	function leftMenuCtrl($scope, $rootScope, $timeout) {
		$rootScope.countTopics = 3;
		$rootScope.currentTopic = 0;
		$rootScope.currentSlide = 0;
		$rootScope.lastSlide = $rootScope.slidesCountT1

		$scope.selectTopic = function (i) {

			$rootScope.currentTopic = i;
			$rootScope.currentSlide = 1;
			Reveal.slide($rootScope.currentTopic, 0);
			$rootScope.lastSlide = $rootScope.topics[$rootScope.currentTopic].Slides.length;
			console.log($rootScope.currentTopic);
			console.log($rootScope.topics[$rootScope.currentTopic]);

		}

			$scope.getNumber = function (num) {
				return new Array(num);
			}

	}

})(angular.module('TextBookApp'));