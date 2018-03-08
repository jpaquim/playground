const fastify = require('fastify');

const app = fastify();

const opts = {
  schema: {
    querystring: {
      name: { type: 'string' },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
    beforeHandler: async (req, res) => {
      app.log.info('Checking permissions');
    },
  },
};

app.get('/', opts, async (req, res) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await app.listen(4321);
    app.log.info(`server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
