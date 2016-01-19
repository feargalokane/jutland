angular.module('TimelineSectionsController', [])
.controller('TimelineSectionsController', function ($scope, $stateParams) {
   
	$scope.SelectedSectionId = $stateParams.sectionId;  
	$categoryItem = getObjects($scope.timelineSections, "TID", $stateParams.sectionId);
	$scope.categoryName = $categoryItem[0]['name']; 

	angular.element(document).ready(function () {
		//alert(document.getElementById('category-'+$stateParams.sectionId).outerHTML);
		document.getElementById('category-'+$stateParams.sectionId+'-link').click();
	});
});