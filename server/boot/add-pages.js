'use strict';

module.exports = function(app) {
  var Page = app.models.Page;
  var pages = [{
    title: 'Page 1 title',
  }, {
    title: 'Page 2 title',
  }, {
    title: 'Page 2 title',
  }];

  // When adding an array of objects the validatesUniquenessOf rule does NOT apply
  Page.create(pages)
    .then(function(res) {
      // I don't expect this to happen, I expect the outer .catch() to be triggered
      console.log('Created array of pages', res);
    })
    .then(function() {
      // When adding a single object the validatesUniquenessOf DOES apply
      Page.create(pages[1])
        .then(function(res) {
          console.log('Created single page', res);
        })
        .catch(function(err) {
          // This catch gets triggered as expected
          console.log('Error creating single page', err);
        });
    })
    .catch(function(err) {
      console.log('Error creating array of pages', err);
    });
};
