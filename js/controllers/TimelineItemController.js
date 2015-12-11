angular.module('TimelineItemController', [])
.controller('TimelineItemController', function ($scope, $stateParams) {
	timelineItem = getObjects($scope.timelineItems, "nid", $stateParams.id); 
	$scope.item = timelineItem[0];
});