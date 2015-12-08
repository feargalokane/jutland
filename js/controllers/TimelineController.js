angular.module('TimelineController', [])
.controller('TimelineController', function ($scope, $stateParams) {
	angular.element(document.getElementsByTagName('body')[0]).removeClass("home-page");   
	$scope.SelectedSectionId = $stateParams.sectionId;  
});