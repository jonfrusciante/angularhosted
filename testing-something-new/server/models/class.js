const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema ({
		classTitle: String,
		classDescription: String,
		classStart: Date,
		classLate: Date,
		classEnd: Date,
		program: String,
		teachers: String
});

module.exports = mongoose.model('class', classSchema, 'classes');