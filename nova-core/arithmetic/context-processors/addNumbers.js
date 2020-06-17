
module.exports = {
  name: 'Add Numbers',
  priority: 100,
  categories: 'operaciones',
  process(executionContext, contentModel) {
    contentModel.addition = contentModel.num1 + contentModel.num2;
  }
};
