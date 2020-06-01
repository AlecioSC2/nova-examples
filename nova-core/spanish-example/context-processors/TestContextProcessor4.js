'use strict';

module.exports = {
  name: 'TestContextProcessor4',
  categories: 'test',
  process(executionContext, contentModel) {
    contentModel.testContextProcessor4 = 'Vengo del TestContextProcessor4, el cual es independiente.';
  }
};
