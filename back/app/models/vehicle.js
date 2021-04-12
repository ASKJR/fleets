const mongoose = require('mongoose');

const { Schema } = mongoose;

const vehicleSchema = new Schema(
  {
    chassisSerie: {
      type: String,
      required: true,
    },
    chassisNumber: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    passengersNumber: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

vehicleSchema.statics.getModelName = function name() {
  return 'Vehicle';
};

module.exports = mongoose.model('Vehicle', vehicleSchema);
