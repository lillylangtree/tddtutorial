/**
 * Created by sean on 19/02/2015.
 */
angular.module('myApp', ['ngRoute','myServices','myControllers','myDirectives'])
    .config([
        '$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/', { templateUrl: '/partials/index.html', controller: 'IndexCtrl' }).
                when('/add', { templateUrl: '/partials/add.html', controller: 'AddCtrl' }).
                when('/edit/:id', {controller: 'EditCtrl', templateUrl: 'partials/edit.html'}).
                otherwise({ redirectTo: '/' });
        }]);