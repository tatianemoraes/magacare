const clientsController = require('./clients-controller');
const { ClientSchemaController } = require('../validate/schema-controller');
const validator = require('../validate/validate');

module.exports = (app) => {
  const defaultRoute = '/clients';
  app.post(
    defaultRoute,
    validator.validateFields(ClientSchemaController),
    clientsController.createClient,
  );
  app.get(
    `${defaultRoute}/:_id`,
    clientsController.searchOneClienteById
  );
  app.get(
    defaultRoute,
    clientsController.searchAllClients
  );
};
