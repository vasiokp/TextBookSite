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
					mailru.common.photos.get(function (photos_list) {
						console.log(photos_list);
					}, 1);
					mailru.common.users.getInfo(function (result) { console.log(result[0]) });
				}
			});
		});
	}

})(angular.module('TextBookApp'));