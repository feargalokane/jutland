angular.module('BattlePageController', [])
.controller('BattlePageController', function ($scope, $stateParams) {
		battlePageItem = getObjects($scope.battleItems, "id", $stateParams.id); 
		$scope.item = battlePageItem[0];
		
		
		angular.element(document.getElementsByTagName('body')[0]).removeClass("home-page");   
	
		angular.element(document).ready(function () {
		document.getElementById('battlepage'+ $stateParams.id).click();
	});
	
});