const nova = require('@palecio/nova-core');

nova
  .fetchContextProcessorEngine({paths: __dirname + '/context-processors'})
  .then(contextProcessorEngine =>
    contextProcessorEngine.execute({ categories: 'operaciones' }, {num1: 5, num2: 2})
  )
  .then(contentModel => {
    console.log('Content Model:', contentModel);
  });
