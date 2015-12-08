angular.module('HomeController', [])
.controller('HomeController', function ($scope, $stateParams) {
	angular.element(document.getElementsByTagName('body')[0]).addClass("home-page");
});