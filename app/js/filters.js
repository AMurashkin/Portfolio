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
})

.filter('filterUrl', function() {
  return function(input) {
   return replaceURLWithHTMLLinks(input);
  };
});


function replaceURLWithHTMLLinks(text) {
	text = '' + text;
    var re = /\[([^\]]*)\]\(([-a-z0-9+&@#\/%?=~_()|!:,.;]*)\)/ig;
    return text.replace(re, function(match, title, url) {
        return "<a href='" + url + "'>" + title + "</a>";
    });
}