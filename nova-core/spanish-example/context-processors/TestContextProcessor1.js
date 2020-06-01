'use strict';

module.exports = {
  name: 'TestContextProcessor1',
  priority: 100,
  categories: 'test',
  process(executionContext, contentModel) {
    contentModel.testContextProcessor1 = 'Vengo del TestContextProcessor1';
  }
};
