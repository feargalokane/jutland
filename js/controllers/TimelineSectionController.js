angular.module('TimelineSectionController', [])
	.controller('TimelineSectionController', function ($scope, $stateParams) {
		$scope.sectionTimeline = getObjects($scope.timelineItems, "field_section", $stateParams.sectionId);

		angular.element(document).ready(function () {
				document.getElementsByClassName('timeline-list')[0].style.width = ($scope.sectionTimeline.length * 375) + 'px';
				alert(document.getElementsByClassName('timeline-list')[0].style.width);
		});
	});