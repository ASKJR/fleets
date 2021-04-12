const { Router } = require('express');
const VehicleController = require('./vehicle.controller');
const { validateVehicleInput } = require('./vehicle.validation');

const routes = Router();

routes.post('/', validateVehicleInput, VehicleController.create);

module.exports = routes;
