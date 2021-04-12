const mongoose = require('mongoose');

const { Schema } = mongoose;

const fleetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    vehicles: [
      { type: Schema.Types.ObjectId, ref: 'Vehicle', required: false },
    ],
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

fleetSchema.statics.getModelName = function name() {
  return 'Fleet';
};

module.exports = mongoose.model('Fleet', fleetSchema);
