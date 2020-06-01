'use strict';

module.exports = {
  name: 'AddBaseSalaryContextProcessor',
  priority: 100,
  categories: 'salary',
  process(executionContext, contentModel) {
    contentModel.salary.total = 1000;
  }
};
