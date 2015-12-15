angular.module('TimelineSectionsController', [])
.controller('TimelineSectionsController', function ($scope, $stateParams) {
   
	$scope.SelectedSectionId = $stateParams.sectionId;  

	angular.element(document).ready(function () {
		//alert(document.getElementById('category-'+$stateParams.sectionId).outerHTML);
		document.getElementById('category-'+$stateParams.sectionId+'-link').click();
	});
});