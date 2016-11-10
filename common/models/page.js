'use strict';

module.exports = function(Page) {
  Page.validatesUniquenessOf('title', {message: 'title is not unique'});
};
