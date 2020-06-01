'use strict';

module.exports = {
  name: 'TestContextProcessor3',
  priority: 50,
  categories: 'test',
  process(executionContext, contentModel) {
    contentModel.testContextProcessor3 = 'Vengo del TestContextProcessor3';
  }
};
