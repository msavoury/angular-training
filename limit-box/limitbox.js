var app = angular.module('app', []);
app.directive('limitBox', function() {

	return {
		restrict: 'E',
		scope: {},
		link: function(scope, elem, attr) {
			scope.maxChars = attr.maxchars;
		},
		controller: function($scope) {
			$scope.content = "";
			$scope.percentConsumed = function() {
				return parseInt($scope.content.length / $scope.maxChars * 100); 
			};
		},
		template: 
		'<div>' +
		  '<textarea style="width:100%;" maxlength={{maxChars}} ng-model="content"></textarea>' +
		  '<div class="progress">'+
			  '<div class="progress-bar" role="progressbar" aria-valuenow="{{percentConsumed()}}" aria-valuemin="0" aria-valuemax="100" style="width: {{percentConsumed()}}%;">' +
				  '<span class="sr-only">{{percentConsumed()}}% Complete</span>' +
			  '</div>' +
	      '</div>' +
		'</div>'
	};

});
