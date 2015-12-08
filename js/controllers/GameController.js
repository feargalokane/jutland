angular.module('GameController', [])
.controller('GameController', function ($scope, $stateParams) {
	angular.element(document.getElementsByTagName('body')[0]).removeClass("home-page");   
});