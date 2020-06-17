const nova = require('@palecio/nova-core');
const helloWorldContextProcessor = require('./helloWorldContextProcessor'); // Se carga el Context Processor deseado

(async () => {

  // Se obtiene el Context Processor Engine. Le mandamos como argumentos el listado de Context Processors
  const contextProcessorEngine = await nova.fetchContextProcessorEngine({
    contextProcessors: [helloWorldContextProcessor]
  });

  // Se ejecuta el Context Processor Engine. Le mandamos como argumentos las categorías que se desean ejecutar y el estado inicial.
  const finalContentModel = await contextProcessorEngine.execute(
    { categories: 'hw' },
    {}
  );

  // Se despliega el resultado en la consola.
  console.log('Content Model:', finalContentModel);

  /*
    La salida del programa es:
    {
      helloWorld: 'Hello World';
    }
  */
})();
