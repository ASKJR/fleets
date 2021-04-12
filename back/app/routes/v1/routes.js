const express = require('express');

const router = express.Router();

const vehicles = require('../../core/vehicles/vehicle.routes');
const fleets = require('../../core/fleets/fleet.routes');

router.use('/fleets', fleets);
router.use('/vehicles', vehicles);

module.exports = router;
