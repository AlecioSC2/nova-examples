const server = require('@palecio/nova-server').server;
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const removeConfig = require('../generic-context-processors/removeConfig');
app.use('/static', express.static(path.join(__dirname, 'static')));

const serverConfig = {
  contextProcessorPaths: __dirname + '/context-processors',
  contextProcessors: [removeConfig],
  baseContentModel: {
    config: {}
  }
};

server.start(serverConfig).then(() => {
  app.listen(port, () =>
    console.log(
      `Open the static app in the browser: http://localhost:3000/static/test.html`
    )
  );
});
