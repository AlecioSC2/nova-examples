
module.exports =
const substractNumbers = {
  name: 'Subtract Numbers',
  priority: 100,
  categories: 'operaciones',
  process(executionContext, contentModel) {
    contentModel.subtraction = contentModel.num1 - contentModel.num2;
  }
};
