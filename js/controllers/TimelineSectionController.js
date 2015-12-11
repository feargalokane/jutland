angular.module('TimelineSectionController', [])
.controller('TimelineSectionController', function ($scope, $stateParams) {
	$scope.sectionTimeline = getObjects($scope.timelineItems, "field_section", $stateParams.sectionId);
});