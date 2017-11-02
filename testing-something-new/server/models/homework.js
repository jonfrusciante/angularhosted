const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeworkSchema = new Schema ({
	homeworkTitle: String,
	homeworkDescription: String,
	homeworkComments: Array,
	homeworkLinks: Array,
	dueDate: Date,
	program: String,
	class: String,
	teachers: String
});

module.exports = mongoose.model('homework', homeworkSchema, 'homeworks');