var elementum = angular.module('elementum',[]);

elementum.controller('elementumCtrl', ['$scope', function($scope) {
	$scope.hello = 'Hello World!';

	angular.element(document).ready(function () {
		var windowHeight = $(window).height();
		$('#base').css('height', windowHeight);
		$('#leftBar').css('height', windowHeight);
		$('#board').css('height', windowHeight);
		$('#rightBar').css('height', windowHeight);

		$(window).resize(function() {
			var windowHeight = $(window).height();
			$('#base').css('height', windowHeight);
			$('#leftBar').css('height', windowHeight);
			$('#board').css('height', windowHeight);
			$('#rightBar').css('height', windowHeight);
		});
	});
}]);

elementum.directive("elementCard", function() {
    return {
        templateUrl : "assets/templates/element-card.html"
    };
});