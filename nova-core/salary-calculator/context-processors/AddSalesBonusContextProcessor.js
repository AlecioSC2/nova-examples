'use strict';

module.exports = {
  name: 'AddSalesBonusContextProcessor',
  priority: 70,
  categories: '',
  process(executionContext, contentModel) {
    const salesBonus = 300;
    contentModel.salary.total = contentModel.salary.total + salesBonus;
  }
};
