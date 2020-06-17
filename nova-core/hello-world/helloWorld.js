const nova = require("/Users/palecio/Documents/personal/nova/nova-core");

const t = nova.contextProcessor.extend({
  name: "HelloWorld",
  categories: "hw",
  process(executionContext, contentModel) {
    console.log(executionContext);
    contentModel.helloWorld = "Hello World";
  }
});

nova
  .fetchContextProcessorEngine({
    contextProcessors: t.extend({config:{gd:'ddd'}})
  })
  .then(contextProcessorEngine =>
    contextProcessorEngine.execute({ categories: "hw", config: {v:'d'}}, {})
  )
  .then(contentModel => {
    console.log("Content Model:", contentModel);
  });
