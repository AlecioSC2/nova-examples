const server = require("@palecio/nova-server").server; // Nova Server framework
const pathAwareContextProcessor = require("@palecio/nova-server") // Context Processor especial para Nova Server
  .contextProcessors.pathAware;
const helloWorldContextProcessor = pathAwareContextProcessor.extend({ // Extender el Path Aware Context Processor
  name: "Hello World",
  patterns: ["*/hello*"], // Patrón de la URL al que este Context Processor está 'atado'
  process(executionContext, contentModel) {
    contentModel.helloWorld = "Hello World";
  }
});

/* Configuración del servidor */
const serverConfig = {
  contextProcessors: [helloWorldContextProcessor] // Lista de Context Processors
};

server
  .start(serverConfig) // Iniciar Nova Server
  .then(() =>
    console.log(`> http://localhost:9001/api/hello`)
  );
