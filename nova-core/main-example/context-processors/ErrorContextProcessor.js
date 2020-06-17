'use strict';

const NonFatalError = require('@palecio/nova-core').errors.NonFatalError;
module.exports = {
  name: 'ErrorContextProcessor',
  priority: 100,
  categories: 'test',
  process(executionContext, contentModel) {
    console.log(
      '> ErrorContextProcessor - this Context Processor will throw a non fatal error.'
    );
    throw new NonFatalError('This is a nonfatal error');
  }
};
