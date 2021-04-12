const { Router } = require('express');
const VehicleController = require('./vehicle.controller');
const {
  validateVehicleInput,
  validateVehicleUpdate,
} = require('./vehicle.validation');

const routes = Router();

routes.post('/', validateVehicleInput, VehicleController.create);
routes.put('/:id', validateVehicleUpdate, VehicleController.update);
routes.delete('/:id', VehicleController.delete);
routes.get('/', VehicleController.get);

module.exports = routes;
