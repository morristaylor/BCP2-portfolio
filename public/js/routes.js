const showProject = (ctx, next) => {
  $('#projects').children().hide();
  $(`.${ctx.params.id}`).show();
}

page('/', projectView.init);
page('/projects/:id', showProject);
page();
