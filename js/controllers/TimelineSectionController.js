angular.module('TimelineSectionController', [])
.controller('TimelineSectionController', function ($scope, $stateParams) {
	$scope.sectionPersonalTimeline = getObjects($scope.timelinePersonal, "field_section", $stateParams.sectionId);
	$scope.sectionWorldTimeline = getObjects($scope.timelineWorld, "field_section", $stateParams.sectionId);
});