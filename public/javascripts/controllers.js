/**
 * Created by sean on 19/02/2015.
 */
var appControllers = angular.module('myControllers', []);

appControllers.controller('IndexCtrl', ['$scope', function($scope) {
    $scope.title = "Index Page";
}]);