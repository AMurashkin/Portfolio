'use strict';

/* Services */

var projectcatServices = angular.module('projectcatServices', ['ngResource']);

projectcatServices.factory('project', ['$resource',
  function($resource){
    return $resource('projects/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }]);
