const describe = require('riteway').describe; // importar la herramienta de pruebas unitarias
const nova = require('@palecio/nova-core'); // importar Nova
const path = require('path');

describe('ArithmeticTest', async assert => {
  const configuration = { paths: path.resolve(__dirname, '../arithmetic/context-processors') }; // especificar la ruta de la carpeta que contiene los Context Processors
  const contextProcessorEngine = await nova.fetchContextProcessorEngine(configuration); // obtener el motor que ejecuta los Context Processors
  const initialContentModel = {num1: 3, num2: 1}; // definir el Content Model inicial
  const executionContext = { categories: 'operaciones' }; // definir el Execution Context inicial
  const contentModel = await contextProcessorEngine.execute(executionContext, initialContentModel); // ejecutar Nova
  assert({
    given: 'num1 = 3 y num2 = 1',
    should: `retornar 8.`,
    actual: contentModel.result,
    expected: 8
  });

});