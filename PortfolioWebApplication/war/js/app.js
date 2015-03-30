/**
 * 
 */
(function(){
	var app=angular.module('test',[]);
	
	app.controller('GreetingController',['$scope',function($scope){
		$scope.greeting='Hello World!';
	}])
	
})();