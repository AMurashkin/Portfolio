'use strict';

/* App Module */

var projectcatApp = angular.module('projectcatApp', [
  'ngRoute',
  'projectcatAnimations',

  'projectcatControllers',
  'projectcatFilters',
  'projectcatServices'
]);

projectcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/projects', {
        templateUrl: 'partials/project-list.html',
        controller: 'projectListCtrl'
      }).
      when('/projects/:projectId', {
        templateUrl: 'partials/project-detail.html',
        controller: 'projectDetailCtrl'
      }).
      otherwise({
        redirectTo: '/projects'
      });
  }]);
