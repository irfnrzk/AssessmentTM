const mongoose = require('mongoose');

var Job = mongoose.model('Job', {
    JobID: { type: Number },
    JobTitle: { type: String },
    Company: { type: String },
    State: { type: String },
    CloseDate: { type: String },
    JobStatus: { type: String }
});

module.exports = { Job };