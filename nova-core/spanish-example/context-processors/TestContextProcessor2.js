'use strict';

module.exports = {
  name: 'TestContextProcessor2',
  priority: 100,
  categories: 'test',
  process(executionContext, contentModel) {
    contentModel.testContextProcessor2 = 'Vengo del TestContextProcessor2';
  }
};
