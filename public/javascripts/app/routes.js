'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers', 'myApp.resource', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home1', controller: 'HomeControle'});  
    $routeProvider.otherwise({redirectTo: '/home'});
 }]);


 
