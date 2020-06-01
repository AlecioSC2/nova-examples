'use strict';
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

const contextProcessor1 = {
  name: 'FirstAsyncContextProcessor',
  priority: 0,
  categories: 'test',
  process(executionContext, contentModel) {
    return setTimeoutPromise(100).then(() => {
      contentModel.helloWorld = "Hello World"
    });
  }
};

