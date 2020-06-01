const pathAwareContextProcessor = require('@palecio/nova-server').contextProcessors
  .pathAware;
module.exports = pathAwareContextProcessor.extend({
  priority: 80,
  patterns: ['*greeting'],
  process(executionContext, contentModel) {
    const user = contentModel.user;
    if (user) {
      const firstName = user.name;
      const lastName = user.lastName;
      const locale = user.language;

      if (firstName && lastName && locale) {
        contentModel.user.fullName =
          locale === 'es'
            ? `${lastName}, ${firstName}`
            : `${firstName} ${lastName}`;
      }
    }
  }
});
