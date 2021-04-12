const { Router } = require('express');
const FleetController = require('./fleet.controller');

const routes = Router();

routes.post('/', FleetController.create);
routes.put('/:id', FleetController.update);
routes.delete('/:id', FleetController.delete);
routes.get('/', FleetController.get);

module.exports = routes;
