'use strict';

/* Filters */

angular.module('projectcatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
})

.filter('join', function() {
  return function(input) {
    if (input && input instanceof Array)
    	return input.join(' ');

   return input;
  };
});
