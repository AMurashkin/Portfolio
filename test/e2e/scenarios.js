'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('projectCat App', function() {

  it('should redirect index.html to index.html#/projects', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/projects');
      });
  });


  describe('project list view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/projects');
    });


    it('should filter the project list as user types into the search box', function() {

      var projectList = element.all(by.repeater('project in projects'));
      var query = element(by.model('query'));

      expect(projectList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(projectList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(projectList.count()).toBe(8);
    });


    it('should be possible to control project order via the drop down select box', function() {

      var projectNameColumn = element.all(by.repeater('project in projects').column('{{project.name}}'));
      var query = element(by.model('query'));

      function getNames() {
        return projectNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);

      element(by.model('orderProp')).findElement(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
    });


    it('should render project specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element(by.css('.projects li a')).click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/projects/nexus-s');
      });
    });
  });


  describe('project detail view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/projects/nexus-s');
    });


    it('should display nexus-s page', function() {
      expect(element(by.binding('project.name')).getText()).toBe('Nexus S');
    });


    it('should display the first project image as the main project image', function() {
      expect(element(by.css('img.project.active')).getAttribute('src')).toMatch(/img\/projects\/nexus-s.0.jpg/);
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
      element(by.css('.project-thumbs li:nth-child(3) img')).click();
      expect(element(by.css('img.project.active')).getAttribute('src')).toMatch(/img\/projects\/nexus-s.2.jpg/);

      element(by.css('.project-thumbs li:nth-child(1) img')).click();
      expect(element(by.css('img.project.active')).getAttribute('src')).toMatch(/img\/projects\/nexus-s.0.jpg/);
    });
  });
});
