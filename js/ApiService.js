console.log("in script");

(function (app) {
	'use strict';
	app.directive('apiconnect', ApiConnect);
	app.controller('ApiConnectCtrl', ApiConnectCtrl);

	function ApiConnect() {
		return {
			bindToController: true,
			controller: 'ApiConnectCtrl',
			replace: true,
			restrict: 'E',
			
		}
	}

	function ApiConnectCtrl($rootScope) {
		console.log('in ctrl');
		function requests() {
			mailru.common.photos.getAlbums(function (albums_list) {
				console.log(albums_list);
				$rootScope.albums_list = albums_list
			});
			mailru.common.photos.get(function (photos_list) {
				$rootScope.photos_list = photos_list;
			}, 1);
		}
		mailru.loader.require('api', function () {

			mailru.connect.init('752318', '83de107fba691d4967a109240fa0d56b');

			mailru.events.listen(mailru.connect.events.login, function (session) {
				window.location.reload();
			});
			mailru.events.listen(mailru.connect.events.logout, function () {
				window.location.reload();
			});

			mailru.connect.getLoginStatus(function (result) {
				if (result.is_app_user != 1) {
					console.log("no connect To user");
				} else {
					requests();
						
				}
			});
		});
	}

})(angular.module('TextBookApp'));