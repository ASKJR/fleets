const Vehicle = require('../../models/vehicle');
const base = require('../../common/baseController');

exports.create = base.createOne(Vehicle);
