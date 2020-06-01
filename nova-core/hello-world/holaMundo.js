const nova = require("@palecio/nova-core");

nova
  .fetchContextProcessorEngine({
    contextProcessors: {
      name: "Hola Mundo",
      categories: "hw",
      process(executionContext, contentModel) {
        contentModel.helloWorld = "Hola Mundo";
      }
    }
  })
  .then(contextProcessorEngine =>
    contextProcessorEngine.execute({ categories: "hw" }, {})
  )
  .then(contentModel => {
    console.log("Content Model:", contentModel);
  });
