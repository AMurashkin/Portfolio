function PartialProjectDetail()
{
  return [
'<div class="project-images">\n',
'  <img ng-src="{{img}}"\n',
'       class="project"\n',
'       ng-repeat="img in project.images"\n',
'       ng-class="{active: mainImageUrl==img}">\n',
'</div>\n',
'\n',
'<div>\n',
'  <h1>{{project.title}}</h1>\n',
'  <a href="index.html#show/projects">&#8592; Back to Project List</a>\n',
'  <br/><br/>\n',
'  <ul class="specs">\n',
'    <li>\n',
'      <dt>Category:</dt>\n',
'      <dd>{{project.category}}</dd>\n',
'      <dt>Commercial:</dt>\n',
'      <dd>{{project.commercial | checkmark}}</dd>\n',
'      <dt>Developed in:</dt>\n',
'      <dd>{{project.years}}</dd>\n',
'    </li>\n',
'    <li>\n',
'      <dt>Authors:</dt>\n',
'      <dd>{{project.authors}}</dd>\n',
'      <dt>Languages and Technologies:</dt>\n',
'      <dd>{{project.technologies}}</dd>\n',
'    </li>\n',
'    <li>\n',
'      <div ng-if="project.url">\n',
'        <dt>Links:</dt>\n',
'        <dd ng-bind-html="project.url | filterUrl"></dd> \n',
'      </div>\n',
'      <div ng-if="project.binaryurl">\n',
'        <dt>Download:</dt>\n',
'        <dd ng-bind-html="project.binaryurl | filterUrl"></dd> \n',
'      </div>\n',
'      <div ng-if="project.sourceurl">\n',
'        <dt>Source:</dt>\n',
'        <dd ng-bind-html="project.sourceurl | filterUrl"></dd> \n',
'      </div>\n',
'    </li>\n',
'  </ul>\n',
'  <br/>\n',
'  <dt>Description</dt>\n',
'  <dd ng-bind-html="project.description | join"></dd>\n',
'  <br/>\n',
'  <dt>My Contribution</dt>\n',
'  <dd class="contribution">\n',
'    <ul class="contribution">\n',
'      <li ng-repeat="item in project.contribution">\n',
'        {{item}}\n',
'      </li>\n',
'    </ul>\n',
'  </dd>\n',
'  <br/>\n',
'  <dt>Recognition and Acceptance</dt>\n',
'  <dd class="recognition">\n',
'    <ul class="recognition">\n',
'      <li ng-repeat="item in project.recognition">\n',
'        {{item}}\n',
'      </li>\n',
'    </ul>\n',
'  </dd>\n',
'  <br/>\n',
'  <div class="backlink"><a href="index.html#show/projects/">&#8592; Back to Project List</a></div>\n',
'</div>\n',
'\n',
'<div class="project-thumbs-container">\n',
'<span>Click to enlarge the images below:</span>\n',
'<ul class="project-thumbs">\n',
'  <li ng-repeat="img in project.images">\n',
'    <img ng-src="{{img}}" ng-click="setImage(img)">\n',
'  </li>\n',
'</ul>\n',
'\n',
'\n',
'\n',
'</div>'
].join("");
}