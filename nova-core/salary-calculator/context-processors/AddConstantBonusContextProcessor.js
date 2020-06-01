'use strict';

module.exports = {
  name: 'AddConstantBonusContextProcessor',
  priority: 80,
  categories: 'salary',
  process(executionContext, contentModel) {
    contentModel.salary.total = contentModel.salary.total + (contentModel.salary.total * 0.1) + 100;
  }
};
