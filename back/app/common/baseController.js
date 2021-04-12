const { validationResult } = require('express-validator');
const AppError = require('./appError');

exports.createOne = (Model) => async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(new AppError(422, 'fail', { errors: errors.array() }));
    }
    const entity = await Model.create(req.body);

    return res.status(201).json({
      status: 'success',
      data: {
        [Model.getModelName()]: entity,
      },
    });
  } catch (error) {
    return next(new AppError(404, 'fail', 'Not able to create a new resource'));
  }
};

exports.updateOne = (Model) => async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(new AppError(422, 'fail', { errors: errors.array() }));
    }
    const entity = await Model.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    return res.status(200).json({
      status: 'success',
      data: {
        [Model.getModelName()]: entity,
      },
    });
  } catch (error) {
    return next(new AppError(404, 'fail', 'Not able to update'));
  }
};

exports.deleteOne = (Model) => async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(new AppError(422, 'fail', { errors: errors.array() }));
    }
    await Model.deleteOne({ _id: req.params.id });
    return res.status(204).json({});
  } catch (error) {
    return next(new AppError(404, 'fail', 'Not able to delete'));
  }
};

exports.get = (Model) => async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(new AppError(422, 'fail', { errors: errors.array() }));
    }
    const { sort, ...filter } = req.query;
    const sortBy = sort ? { [sort]: 1 } : {};
    Object.keys(filter).map((key) => {
      if (!key.includes('_id')) {
        filter[key] = new RegExp(`^.*${filter[key]}.*$`, 'i');
      }
      return filter[key];
    });

    const entities = await Model.find(filter).sort(sortBy);
    return res.status(200).json({
      status: 'success',
      data: {
        [`${Model.getModelName()}s`]: entities,
      },
    });
  } catch (error) {
    return next(new AppError(404, 'fail', 'Not able to load resource'));
  }
};
