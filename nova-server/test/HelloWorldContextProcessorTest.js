const describe = require('riteway').describe; // se importa la herramienta de pruebas unitarias
const pathAwareContextProcessor = require('@palecio/nova-server') // Context Processor especial para Nova Server
  .contextProcessors.pathAware;

// Context Processor que se desea probar
const helloWorldContextProcessor = pathAwareContextProcessor.extend({
  name: 'Hola Mundo',
  patterns: ['*/hello*'],
  process(executionContext, contentModel) {
    contentModel.helloWorld = 'Hola Mundo';
  }
});

describe('HelloWorldContextProcessor', async assert => {
  const contentModel = {}; // Se define el Content Model inicial
  await helloWorldContextProcessor.process({}, contentModel); // Se ejecuta el Context Processor
  // Se ejecuta la prueba unitaria
  assert({
    given: 'Un Content Model vacío',
    should:
      'Retornar un Content Model con una propiedad llamada "helloWorld" cuyo valor es "Hola Mundo".',
    actual: contentModel.helloWorld,
    expected: 'Hola Mundo'
  });
});
