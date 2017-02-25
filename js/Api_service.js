(function (app) {
	'use strict';
//	console.log("in service");
//	mailru.loader.require('api', function () {
//	mailru.connect.init('752318','83de107fba691d4967a109240fa0d56b');
//	mailru.common.photos.get(function (photos_list) {
//		// выведет название первой фотографии из альбома с aid 123
//		console.log(photos_list);
//	}, 1);
//	console.log(mailru.session);


//});
	//<![CDATA[
	// этот вызов обязателен, он осуществляет непосредственную загрузку
	// кода библиотеки; рекомендуем всю работу с API вести внутри callback'а
	mailru.loader.require('api', function () {
		// инициализируем внутренние переменные
		// не забудьте поменять на ваши значения app_id и private_key
		mailru.connect.init('752318', '83de107fba691d4967a109240fa0d56b');
		// регистрируем обработчики событий,
		// которые будут вызываться при логине и логауте
		mailru.events.listen(mailru.connect.events.login, function (session) {
			window.location.reload();
		});
		mailru.events.listen(mailru.connect.events.logout, function () {
			window.location.reload();
		});
		// проверка статуса логина, в result callback'a приходит
		// вся информация о сессии (см. следующий раздел)
		mailru.connect.getLoginStatus(function (result) {
			if (result.is_app_user != 1) {
				// пользователь не залогинен, надо показать ему кнопку логина

				// вешаем кнопку логина (пример для jquery)
				$('<a class="mrc__connectButton">вход@mail.ru</a>').appendTo('body');
				// эта функция превращает только что вставленный элемент в
				// стандартную кнопку Mail.Ru
				mailru.connect.initButton();
			} else {
				// все ок, можно работать
					mailru.common.photos.get(function (photos_list) {
						// выведет название первой фотографии из альбома с aid 123
						console.log(photos_list);
					}, 1);
				// получаем полную информацию о текущем пользователе
				mailru.common.users.getInfo(function (result) { console.log(result[0].uid) });
			}
		});
	});
	//]]>
})(angular.module('TextBookApp'));