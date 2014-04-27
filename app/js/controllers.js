'use strict';

/* Controllers */

var projectcatControllers = angular.module('projectcatControllers', []);

projectcatControllers.controller('projectListCtrl', ['$scope', 'project',
  function($scope, project) {
    $scope.projects = project.query();
    $scope.orderProp = 'age';
  }]);

projectcatControllers.controller('projectDetailCtrl', ['$scope', '$routeParams', 'project',
  function($scope, $routeParams, project) {
    $scope.project = project.get({projectId: $routeParams.projectId}, function(project) {
      $scope.mainImageUrl = project.images[0];
      $scope.project.description = project.description.join(' ');
      console.log($scope);
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
      console.log($scope.mainImageUrl);
    }
  }]);
