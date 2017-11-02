const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    title: String,
    cohort: String,
		description: String,
		date: Date
});

module.exports = mongoose.model('lesson', lessonSchema, 'lessons');