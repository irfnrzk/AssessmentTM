const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var jobController = require('./controllers/jobController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://192.168.0.181:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/jobs', jobController);