const pathAwareContextProcessor = require('@palecio/nova-server').contextProcessors
  .pathAware;
const fs = require('fs').promises;
const FatalError = require('@palecio/nova-core').errors.FatalError;
const path = require('path');

module.exports = pathAwareContextProcessor.extend({
  priority: 90,
  patterns: ['*greeting'],
  async process(executionContext, contentModel) {
    const userId = contentModel.userId || '';
    const users = JSON.parse(
      (await fs.readFile(path.resolve(__dirname + '/../db/users.json'))).toString()
    );
    const user = users.find(user => userId === user.id);
    if (user) {
      contentModel.user = user;
    } else {
      throw new FatalError('User does not exist.');
    }
  }
});
