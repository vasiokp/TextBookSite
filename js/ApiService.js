﻿console.log("in script");
function gg() {
	console.log("in script2");

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
(function (app) {
	'use strict';
	console.log("in App");
	app.controller('ApiConnect', ApiConnect);
	function ApiConnect($rootScope){
		gg();
		console.log("after gg");

	}

})(angular.module('TextBookApp'));