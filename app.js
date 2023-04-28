const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
//const swaggerJsDoc = require('swagger-jsdoc');
const mongodb = require('./db/connection');
const PORT = 3000;
const app = express();

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })

  .use('/', require('./routes'));

mongodb.mongoConnect((client) => {
  console.log('The database is available', client);
  app.listen(PORT);
});
