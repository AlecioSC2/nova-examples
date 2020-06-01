'use strict';

module.exports = {
  name: 'SubstractISRContextProcessor',
  priority: 90,
  categories: 'salary',
  process(executionContext, contentModel) {
    contentModel.salary.total = contentModel.salary.total - (contentModel.salary.total * 0.05);
  }
};
