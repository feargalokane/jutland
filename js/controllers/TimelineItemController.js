angular.module('TimelineItemController', ['ngPDFViewer'])
.controller('TimelineItemController',['$scope','PDFViewerService','$stateParams', function ($scope,pdf,$stateParams) {
	timelineItem = getObjects($scope.timelineItems, "nid", $stateParams.id); 
	$scope.item = timelineItem[0];
	
	if(timelineItem[0].type == '360'){
		$scope.threesixtyurl = "360/"+timelineItem[0].Dir +"/iframe.html"
	}
	
	
	if(timelineItem[0].type == 'PDF'){
		$scope.pdfURL = 'pdf/'+timelineItem[0].PDFileName;
		$scope.instance = pdf.Instance("viewer");

		$scope.nextPage = function() {
			$scope.instance.nextPage();
		};
		
		$scope.prevPage = function() {
			$scope.instance.prevPage();
		};
	
		$scope.gotoPage = function(page) {
			$scope.instance.gotoPage(page);
		};
	
		$scope.pageLoaded = function(curPage, totalPages) {
			$scope.currentPage = curPage;
			$scope.totalPages = totalPages;
		};
	
		$scope.loadProgress = function(loaded, total, state) {
			console.log('loaded =', loaded, 'total =', total, 'state =', state);
		};		
	}
}]);