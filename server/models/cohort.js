const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cohortSchema = new Schema({
    title: String,
		program: String
});

module.exports = mongoose.model('cohort', cohortSchema, 'cohorts');