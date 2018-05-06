'use strict';
var projects = [];

function Project (rawProjectObj) {
  this.title = rawProjectObj.title;
  this.date = rawProjectObj.date;
  this.overview = rawProjectObj.overview;
  this.body = rawProjectObj.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');
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

// projects.push(new Project("Lab 01 Portfolio", "April 28, 2018", "First assignment", "img.jpg"));
// ... as a developer, I want to make a data model (object constructor) for my portfolio data, so I can store individual projects and render them to the DOM.
// basics, roughly: json datastore -> new Project constructor -> jquery element selector from new Project
// ???
