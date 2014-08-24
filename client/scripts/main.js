angular.module('App', [
	'App.controllers',
	'ngRoute'
	]);

angular.module('App')
	.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.
				when('/items', {
					templateUrl: 'partials/item-list.html',
					controller: 'listItemsController'
				}).
				when('/item/add', {
					templateUrl: 'partials/item-add.html',
					controller: 'addItemController'
				}).
				when('/item/edit', {
					templateUrl: 'partials/item-edit.html',
					controller: 'editItemController'
				}).
				when('/item/view/:itemId', {
					templateUrl: 'partials/item-view.html',
					controller: 'viewItemController'
				}).
				otherwise({redirectTo: '/items'});
		}]);

angular.module('App.controllers', []);