const Fleet = require('../../models/fleet');
const base = require('../../common/baseController');

exports.create = base.createOne(Fleet);
exports.update = base.updateOne(Fleet);
exports.delete = base.deleteOne(Fleet);
exports.get = base.get(Fleet);
