'use strict';
var projects = [];

function Project (rawProjectObj) {
  var keys = Object.keys(rawProjectObj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = rawProjectObj[key];
    this[key] = value;
  }
}

Project.prototype.toHtml = function() {
  var theTemplateScript = $("#projects-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context = {
      "id": this.id,
      "title": this.title,
      "date": this.date,
      "overview": this.overview,
      "body": this.body
    };
  var $newProject = theTemplate(context);
  return $newProject;
};

Project.loadAll = function(rawProject) {
  rawProject.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
}

Project.fetchAll = function() {
 if (sessionStorage.rawProject) {
   Project.loadAll(JSON.parse(sessionStorage.rawProject));
 }
 else {
    $.get('../data/projects.json', function(rawProject) {
      Project.loadAll(rawProject);
      projectView.init();
      sessionStorage.rawProject = JSON.stringify(rawProject);
    })
  }
}
Project.fetchAll();
