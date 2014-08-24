angular.module('App.controllers')
.controller('viewItemController', [
	'$scope',
	'$routeParams',
	function ($scope, $routeParams) {
		$scope.item = {
			id: 'abcdefgh',
			header: 'Målning dinosaurie',
			img: 'resources/img/basquette.jpg',
			description: 'Akvarell målning gjord i färgglada färger',
			artist: 'Anna Mörner',
			price: '2500',
			dateAdded: '11-02-14',
			email: 'annamorner@hotmail.com',
			phoneNr: '0735008212'
		}

		console.log('Item Id: ', $routeParams.itemId);
	}]);