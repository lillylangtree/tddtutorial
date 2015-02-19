/**
 * Created by sean on 19/02/2015.
 */
var appControllers = angular.module('myControllers', []);

appControllers.controller('IndexCtrl', ['$scope','$location','DeviceService', function($scope,$location,DeviceService) {
    $scope.title = "Index Page";
    $scope.devices = DeviceService.query();

    $scope.remove = function(index){
        $scope.devices.splice(index, 1);
    }
    $scope.add = function(){
        $location.path('/add');
    }

}]);
appControllers.controller('AddCtrl', ['$scope','$location','DeviceService', function($scope,$location,DeviceService) {
    $scope.add=true;

    $scope.add = function(device) {
        if (!device) return;
        console.log("in AddCtrl add");

        DeviceService.add(device);

        // redirect to main screen
        $location.path('/');
    }

}]);
appControllers.controller('EditCtrl', ['$scope','$location','$routeParams','DeviceService', function($scope,$location,$routeParams,DeviceService) {
    // get the device based on parameter id
    var device = DeviceService.query()[$routeParams.id];

    // set the add/edit flag
    $scope.add=false;

    // deep copies the selected item into scope
    $scope.device = angular.copy(device);

    $scope.update = function(device) {
        if (!device) return;
        console.log("in EditCtrl add");

        DeviceService.update(device);

        // redirect to main screen
        $location.path('/');
    }

}]);