const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeworkSchema = new Schema({
    title: String,
    description: String,
		cohort: String,
		due: Date,
		//hwlink: [String],
		//comments: [{user: string, comment: string}]
});

module.exports = mongoose.model('homework', homeworkSchema, 'homeworks');