'use strict';
var projectView = {};

projectView.handleClicks = function() {
  $('#project-list').on('click', 'a', function(event) {
    $('#projects').children().hide();
    $(`.${event.target.id}`).fadeIn(500);
  });
};

projectView.initIndex = function() {
  projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });

    $('#projects').children().hide();
    projectView.handleClicks();
    renderMenu();
};


//routes
//(/, projectView.initIndex)

    
