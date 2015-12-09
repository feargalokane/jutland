angular.module('TimelineSectionsController', [])
.controller('TimelineSectionsController', function ($scope, $stateParams) {
   
	$scope.SelectedSectionId = $stateParams.sectionId;  

	angular.element(document).ready(function () {
		document.getElementById('section-'+$stateParams.sectionId).click();
	});
});