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
  // var $newProject = $('div.template').clone();
  // $newProject.removeClass('template');
  // $newProject.attr('id', this.id);
  // "$newProject.find('h1.title').html"(this.title);
  // $newProject.find('h3.project-date').html(this.date);
  // $newProject.find('h4.overview').html(this.overview);
  // $newProject.find('p.body').html(this.body);
  // return $newProject;
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

rawProject.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

function renderMenu() {
  var projectList = document.getElementById('project-list');
  for (var i = 0; i < projects.length; i++) {
    projectList.innerHTML += `<h2><a href="#" id="${projects[i].id}">${projects[i].title}</a></h2>`;
  }
}
