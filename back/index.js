const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const AppError = require('./app/common/appError');
const globalErrHandler = require('./app/common/errorController');
const apiV1 = require('./app/routes/v1/routes');

dotenv.config({
  path: '.env',
});

const app = express();

const corsOpts = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOpts));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'healthcheck',
  });
});

app.use('/api/v1', apiV1);

app.all('*', (req, res, next) => {
  next(
    new AppError(404, 'fail', `Can't find ${req.originalUrl} on this server!`)
  );
});

app.use(globalErrHandler);

// Start the server
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, res);
    console.log(`Application is running on port ${port}`);
  })
  .catch((error) => {
    console.log(error);
  });
mongoose.set('useFindAndModify', false);

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION!!!  shutting down ...');
  console.log(err.name, err.message);
  process.exit(1);
});
