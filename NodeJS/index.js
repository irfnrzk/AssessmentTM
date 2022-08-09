var PORT = process.env.PORT || 3000
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var jobController = require('./controllers/jobController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(PORT, () => console.log('Server started at port : 3000'));


app.use('/jobs', jobController);
