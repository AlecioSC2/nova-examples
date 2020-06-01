const pathAwareContextProcessor = require('@palecio/nova-server').contextProcessors
  .pathAware;

const http = require('axios');
const translateText = (text, sourceLanguage, targetLanguage) =>
  http
    .request({
      method: 'post',
      url: 'https://translation.googleapis.com/language/translate/v2',
      params: {
        key: process.env.GOOGLE_TRANSLATE_API_KEY, //TODO REMOVE THIS
        target: targetLanguage,
        source: sourceLanguage,
        format: 'text',
        q: text
      }
    })
    .then(({ data }) => data.data.translations[0].translatedText)
    .catch(error => console.error(error.response) || '');

module.exports = pathAwareContextProcessor.extend({
  name: 'Translate Properties',
  priority: 50,
  patterns: ['*/es/product*'],
  async process(executionContext, contentModel) {
    contentModel.product.title = await translateText(
      contentModel.product.title,
      'en',
      'es'
    );
    contentModel.product.description = await translateText(
      contentModel.product.description,
      'en',
      'es'
    );
    contentModel.product.reviews = await Promise.all(
      contentModel.product.reviews.map(review =>
        translateText(review, 'en', 'es')
      )
    );
  }
});
