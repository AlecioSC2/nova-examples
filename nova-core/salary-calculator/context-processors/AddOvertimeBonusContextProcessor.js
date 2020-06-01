'use strict';

module.exports = {
  name: 'AddOvertimeBonusContextProcessor',
  priority: 80,
  categories: '',
  process(executionContext, contentModel) {
    const overtimeHours = 30;
    const hourlyRate = 2;
    contentModel.salary.total = contentModel.salary.total + (overtimeHours * hourlyRate);
  }
};
