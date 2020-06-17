
module.exports = {
  name: 'Multiply Numbers',
  priority: 90,
  categories: 'operaciones',
  process(executionContext, contentModel) {
    contentModel.result = contentModel.addition * contentModel.subtraction;
  }
};
