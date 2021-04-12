const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.listen(3000);
