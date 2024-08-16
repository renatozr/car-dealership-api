import swaggerJsDoc from 'swagger-jsdoc';

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Car Dealership API',
      version: '1.0.0',
      description: 'An API that handles vehicle data from a car dealership',
    },
    servers: [
      {
        url: process.env.SERVER_URL || 'http://localhost:3001',
      },
    ],
  },
  apis: ['./src/routes/*'],
};

const specs = swaggerJsDoc(options);

export default specs;
