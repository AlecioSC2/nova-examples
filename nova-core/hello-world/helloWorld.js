const nova = require("@palecio/nova-core");

nova
  .fetchContextProcessorEngine({
    contextProcessors: {
      name: "HelloWorld",
      categories: "hw",
      process(executionContext, contentModel) {
        contentModel.helloWorld = "Hello World";
      }
    }
  })
  .then(contextProcessorEngine =>
    contextProcessorEngine.execute({ categories: "hw" }, {})
  )
  .then(contentModel => {
    console.log("Content Model:", contentModel);
  });
