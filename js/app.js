var Reveal;


(function () {
	'use strict';

	angular.module('TextBookApp', ['ngm.ngDrive'])
	.run(['$timeout', run]);

	function run($timeout) {
		$timeout(function () {
			DriveService.files.insert({ title: 'file title', mimeType: 'text/plain' })
			.promise.then(() => { console.log('new file inserted') })
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

	angular.module('ngm.ngDrive')
		.provider('OauthService', ngDrive.Config)
		.config(function (OauthServiceProvider) {
			OauthServiceProvider.setScopes('https://www.googleapis.com/auth/drive.file');
			OauthServiceProvider.setClientID('1026968371544-7bckrdh480112e1r1ku9fnj6gd0a3rie.apps.googleusercontent.com');
			OauthServiceProvider.setTokenRefreshPolicy(ngDrive.TokenRefreshPolicy.ON_DEMAND);
		});



})();