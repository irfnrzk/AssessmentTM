const express = require('express');
var router = express.Router();

var { Job } = require('../models/job');

// => localhost:3000/jobs
router.get('/', (req, res) => {
    Job.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Jobs :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;