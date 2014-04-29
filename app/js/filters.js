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
    	return input.join(' ').replaceAll('\n', '<br/>');

   return input;
  };
})

.filter('getProjectScriptSrc', function() {
  return function(input) {
    return 'data/' + input + '.js';
  };
})

.filter('filterUrl', function() {
  return function(input) {
    var re = /\[([^\]]*)\]\(([-a-z0-9+&@#\/%?=~_()|!:,.;]*)\)/ig;
    return input.replace(re, function(match, title, url) {
        return '<a target="_blank" href="' + url + '">' + title + '</a>';
    });    
  };
});

String.prototype.replaceAll = function (replaceThis, withThis) {
  return this.split(replaceThis).join(withThis);
}

function replaceURLWithHTMLLinks(text) {
    
}