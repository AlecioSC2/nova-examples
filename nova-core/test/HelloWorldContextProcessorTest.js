const describe = require('riteway').describe; // se importa la herramienta de pruebas unitarias

// Context Processor que se desea probar
const helloWorldContextProcessor = {
  name: 'Hola Mundo',
  categories: ['hola-mundo'],
  process(executionContext, contentModel) {
    contentModel.helloWorld = 'Hola Mundo';
  }
};

describe('HelloWorldContextProcessor', async assert => {
  const contentModel = {}; // Se define el Content Model inicial
  await helloWorldContextProcessor.process({}, contentModel); // Se ejecuta el Context Processor
  // Se ejecuta la prueba unitaria
  /* En lenguaje natural, la prueba se leería como: afirmar que dado un Content Model vacío, debería
  retornar un Content Model con una propiedad llamada "helloWorld" cuyo valor es "Hola Mundo". */
  assert({
    given: 'Un Content Model vacío',
    should:
      'Retornar un Content Model con una propiedad llamada "helloWorld" cuyo valor es "Hola Mundo".',
    actual: contentModel.helloWorld,
    expected: 'Hola Mundo'
  });
});
