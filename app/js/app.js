'use strict';

/* App Module */

var projectcatApp = angular.module('projectcatApp', [
  'ngRoute',
  'ngSanitize',
  'projectcatAnimations',

  'projectcatControllers',
  'projectcatFilters'
]);

projectcatApp.config(function($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix("show");
    $locationProvider.html5Mode(false);

    $routeProvider.
      when('/projects', {
        template: PartialProjectList(),
        controller: 'projectListCtrl'
      }).
      when('/project/:projectId', {
        template: PartialProjectDetail(),
        controller: 'projectDetailCtrl'
      }).
      otherwise({
        redirectTo: '/projects'
      });
  });
