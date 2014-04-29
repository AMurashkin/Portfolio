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

    $locationProvider.hashPrefix("!");
    $locationProvider.html5Mode(false);

    $routeProvider.
      when('/projects', {
        template: PartialProjectList(),
        controller: 'projectListCtrl'
      }).
      when('/projects/:projectId', {
        template: PartialProjectDetail(),
        controller: 'projectDetailCtrl'
      }).
      otherwise({
        redirectTo: '/projects'
      });
  });
