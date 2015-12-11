angular.module('TimelineController', [])
.controller('TimelineController', function ($scope, $stateParams) {
	$scope.sectionTimeline = getObjects($scope.timelineItems, "field_section", $stateParams.sectionId);
	section =getObjects($scope.timelineSections, "TID", $stateParams.sectionId);
	$scope.section = section[0];
	
	angular.element(document).ready(function () {
		document.getElementById('item-'+$stateParams.timelineId).click();
	});
});