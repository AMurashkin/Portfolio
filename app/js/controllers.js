'use strict';

/* Controllers */

var projectcatControllers = angular.module('projectcatControllers', []);

projectcatControllers.controller('projectListCtrl', ['$scope', 'project',
  function($scope, project) {
    $scope.projects = project.query();
    $scope.user = {};
    $scope.user.name = 'Alexandr Murashkin';
    $scope.user.photoUrl = 'img/core/alexandr_murashkin.png';
    $scope.user.linkedInUrl = 'http://www.linkedin.com/pub/alexander-murashkin/59/262/527';
    $scope.user.labUrl = 'http://gsd.uwaterloo.ca/amurashk';
    $scope.user.cvUrl = 'binary/alexandr_murashkin.pdf';
    $scope.user.degree = [];
    $scope.user.degree[0] = {
      'title': 'MMath in Computer Science, University of Waterloo, ON, Canada (expected Aug 2014)',
      'icon': 'img/core/ca.png'
    };
    $scope.user.degree[1] = {
      'title': 'BSc in Computer Systems and Software, Kazakh-British Technical University, Kazakhstan (2012)',
      'icon': 'img/core/kz.png'
    };

    $scope.user.status = 'Graduate Research Assistant, writing a Master\'s thesis';
    $scope.user.phone = '+1 (226) 600 5529';
    $scope.user.email = 'amurashk@gsd.uwaterloo.ca';
    
    $scope.orderProp = 'weight';
  }]);

projectcatControllers.controller('projectDetailCtrl', ['$scope', '$routeParams', 'project',
  function($scope, $routeParams, project) {
    $scope.project = project.get({projectId: $routeParams.projectId}, function(project) {
      $scope.mainImageUrl = project.images[0];
//      $scope.project.description = project.description.join(' ');
      console.log($scope);
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
      console.log($scope.mainImageUrl);
    }
  }]);
