'use strict';

/* Controllers */

var projectcatControllers = angular.module('projectcatControllers', []);

projectcatControllers.controller('projectListCtrl', ['$scope',
  function($scope) {
    $scope.projects = ProjectList();
    //$scope.projects = project.query();
    $scope.user = user();    
    $scope.orderProp = 'weight';
  }]);

projectcatControllers.controller('projectDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {

    $scope.project = ProjectDetails($routeParams.projectId);
    $scope.mainImageUrl = $scope.project.images[0];
 
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);