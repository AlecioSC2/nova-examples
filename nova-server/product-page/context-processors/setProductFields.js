const pathAwareContextProcessor = require('@palecio/nova-server').contextProcessors
  .pathAware;

module.exports = pathAwareContextProcessor.extend({
  name: 'Set Product Fields',
  priority: 95,
  patterns: ['*/product/*'],
  process(executionContext, contentModel) {
    contentModel.config.productFields = [
      'title',
      'description',
      'price',
      'seller',
      'rating'
    ];
  }
});
