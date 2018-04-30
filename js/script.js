// ... as a developer, I want to make a data model (object constructor) for my portfolio data, so I can store individual projects and render them to the DOM.
// basics, roughly: json datastore -> new Project constructor -> jquery element selector from new Project
// ???

"use strict";
function Project(title, date, overview, imgs) {
  this.title = title;
  this.date = date;
  this.overview = overview;
  this.imgs = imgs;
}

// basic functionality //
var projects = [];
projects.push(new Project("Lab 01 Portfolio", "April 28, 2018", "First assignment", "img.jpg"));

// long is main description for project page
// overview is short description for index page
// main needs to be main image
// addl needs to be additional images, as an array probably
