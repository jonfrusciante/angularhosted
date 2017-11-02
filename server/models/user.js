const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    gmail: String,
		type: String
});

module.exports = mongoose.model('user', userSchema, 'users');