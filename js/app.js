var Reveal;


(function () {
	'use strict';

	angular.module('TextBookApp', [])
	.run(['$timeout', run]);

	function run($timeout) {
		$timeout(function () {
			Reveal.initialize(
				{

					margin: 0,
					minScale: 1,
					maxScale: 1,
					width: 1000,
					height: 800,
					controls: true,
					mouseWheel: false,
				}
			);
		}, 300);
	}

})();