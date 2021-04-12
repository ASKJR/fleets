const Vehicle = require('../../models/vehicle');
const base = require('../../common/baseController');

exports.create = base.createOne(Vehicle);
exports.update = base.updateOne(Vehicle);
exports.delete = base.deleteOne(Vehicle);
exports.get = base.get(Vehicle);
