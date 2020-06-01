const pathAwareContextProcessor = require('@palecio/nova-server').contextProcessors.pathAware;

module.exports = pathAwareContextProcessor.extend({
  priority: 0,
  name: 'Remove Config',
  patterns: ['*'],
  process(executionContext, contentModel) {
    delete contentModel.config;
  }
});
