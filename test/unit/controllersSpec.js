'use strict';

/* jasmine specs for controllers go here */
describe('projectCat controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('projectcatApp'));
  beforeEach(module('projectcatServices'));

  describe('projectListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('projects/projects.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();
      ctrl = $controller('projectListCtrl', {$scope: scope});
    }));


    it('should create "projects" model with 2 projects fetched from xhr', function() {
      expect(scope.projects).toEqualData([]);
      $httpBackend.flush();

      expect(scope.projects).toEqualData(
          [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });


  describe('projectDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        xyzprojectData = function() {
          return {
            name: 'project xyz',
                images: ['image/url1.png', 'image/url2.png']
          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('projects/xyz.json').respond(xyzprojectData());

      $routeParams.projectId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('projectDetailCtrl', {$scope: scope});
    }));


    it('should fetch project detail', function() {
      expect(scope.project).toEqualData({});
      $httpBackend.flush();

      expect(scope.project).toEqualData(xyzprojectData());
    });
  });
});
