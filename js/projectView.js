'use strict';
var projectView = {};

projectView.handleClicks = function() {
  $('#project-list').on('click', 'a', function(event) {
    $('.project').hide();
    var projectId = this.dataset.projectId;
    $(`#${projectId}`).fadeIn(750);
  });
};

$(document).ready(function() {
  $('.project').hide();
  projectView.handleClicks();
  renderMenu();
})
