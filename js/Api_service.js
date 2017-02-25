(function (app) {
	'use strict';
	console.log("in service");
mailru.loader.require('api', function () {
	mailru.connect.init('752318','83de107fba691d4967a109240fa0d56b');
	mailru.common.photos.get(function (photos_list) {
		// выведет название первой фотографии из альбома с aid 123
		console.log(photos_list);
	}, 1);
	console.log("in connect");


});

})(angular.module('TextBookApp'));