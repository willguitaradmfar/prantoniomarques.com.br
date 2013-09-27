'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 .controller('HomeControle', ['$scope', '$http', '$templateCache', 'PostREST', function($scope, $http, $templateCache, PostREST) {  
      console.log('HomeControle');
      $scope.breadcrumb = "Home"

      $scope.posts = PostREST.list(function (res) {
          $scope.posts = res;
      });    

  }])

  ; 
