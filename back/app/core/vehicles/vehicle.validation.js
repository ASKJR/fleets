const { body, check } = require('express-validator');
const Vehicle = require('../../models/vehicle');

exports.validateVehicleInput = [
  body('chassisSerie').custom((chassisSerie, { req }) =>
    Vehicle.findOne({
      chassisSerie,
      chassisNumber: req.body.chassisNumber,
    }).then((chassisId) => {
      if (chassisId) {
        return Promise.reject(new Error('ChassisId in use.'));
      }
      return true;
    })
  ),
  check('type')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Field type is required')
    .isIn(['Bus', 'Truck', 'Car'])
    .withMessage('Wrong type value for vehicle.'),
  check('passengersNumber')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Field passengersNumber is required')
    .isIn([1, 4, 42])
    .withMessage('Wrong type value for passengersNumber.'),
  check('color').trim().not().isEmpty().withMessage('Field color is required'),
];

exports.validateVehicleUpdate = [
  check('color').trim().not().isEmpty().withMessage('Field color is required'),
];
