// Un Context Processor es un simple objeto de JavaScript
module.exports = {
  name: "Hola Mundo",
  categories: "hw",
  process(executionContext, contentModel) {
    contentModel.helloWorld = "Hola Mundo";
  }
};