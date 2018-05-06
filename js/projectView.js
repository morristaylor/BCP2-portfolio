'use strict';
var projectView = {};

projectView.handleClicks = function() {
  $('.project-list').on('click', 'h2', function(event) {
    if (event.target.firstChild === $('#title'));
    $('#projects').fadeIn(750);
  });
};

$(document).ready(function() {
  $('#projects').hide();
  projectView.handleClicks();
})
