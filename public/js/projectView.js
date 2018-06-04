'use strict';
var projectView = {};

projectView.renderMenu = function() {
  var projectList = document.getElementById('project-list');
  for (var i = 0; i < projects.length; i++) {
    projectList.innerHTML += `<h2><a href="/projects/${projects[i].id}" id="${projects[i].id}">${projects[i].title}</a></h2>`;
  };
};

projectView.handleClicks = function() {
  $('#project-list').on('click', 'a', function(event) {
    $('#projects').children().hide();
    $(`.${event.target.id}`).show();
  });
};

projectView.init = function() {
  projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
    $('#projects').children().hide();
  })
  projectView.renderMenu();
  // projectView.handleClicks();
};
