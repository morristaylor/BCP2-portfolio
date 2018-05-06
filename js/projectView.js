'use strict';
var projectView = {};

// if h2 target === project title, show that project title
projectView.handleClicks = function() {
  $('.project-list').on('click', 'h2', function(event) {
    if (event.target.firstChild === $('#projects'));
    $('#projects').fadeIn(500);
  });
};

$(document).ready(function() {
  $('#projects').hide();
  projectView.handleClicks();
})
