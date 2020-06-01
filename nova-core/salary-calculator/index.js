const nova = require('../../index');

nova
  .fetchContextProcessorEngine({paths: __dirname + '/context-processors'})
  .then(contextProcessorEngine =>
    contextProcessorEngine.execute({ categories: 'salary' }, {salary: {}})
  )
  .then(contentModel => {
    console.log('Content Model:', contentModel);
    if (contentModel.debug) {
      //Output the visual representation to an HTML file
      require('fs').writeFileSync(
        __dirname + '/debug.html',
        contentModel.debug.visualRepresentation
      );
    }
  });
