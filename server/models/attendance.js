const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    userId: String,
    classId: String,
    attend: String
});

module.exports = mongoose.model('attendace', attendanceSchema, 'attendances');