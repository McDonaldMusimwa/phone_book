const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/contacts'];


const doc = {
  info: {
    version: '1.0.0',
    title: 'Phonebook node js api',
    description: 'This is the documentaion for a phonebook api.',
    termsOfService: 'null',
    contact: {
      name: 'McDonald Musimwa',
      email: 'mcdonald.musimwa74@gmail.com',
      url: 'https://mcdonaldphone-book.onrender.com'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  host: 'https://mcdonaldphone-book.onrender.com/api-docs',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json']
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./app.js');
});
