'use strict';
var projects = [];

function Project (rawProjectObj) {
  var keys = Object.keys(rawProjectObj);
  for (var index = 0; index < keys.length; index++) {
    var key = keys[index];
    var value = rawProjectObj[key];
    this[key] = value;
  }
}

Project.prototype.toHtml = function() {
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');
  $newProject.attr('id', this.id);
  $newProject.find('h1.title').html(this.title);
  $newProject.find('h3.project-date').html(this.date);
  $newProject.find('h4.overview').html(this.overview);
  $newProject.find('p.body').html(this.body);
  return $newProject;
};

  rawProject.forEach(function(projectObject) {
    // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
    projects.push(new Project(projectObject));
  });

  projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });

function renderMenu() {
  var projectList = document.getElementById('project-list');
  for (var index = 0; index < projects.length; index++) {
    projectList.innerHTML += `<h2><a href="#" data-project-id="${projects[index].id}">${projects[index].title}</a></h2>`;
  }
}
