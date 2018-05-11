'use strict';
var projectView = {};

projectView.handleClicks = function() {
  $('#project-list').on('click', 'a', function(event) {
    $('#projects').children().hide();
    $(`.${event.target.id}`).fadeIn(500);
  });
};

$(document).ready(function() {
  $('#projects').children().hide();;
  projectView.handleClicks();
  renderMenu();
});
