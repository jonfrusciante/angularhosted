const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
		userID: String,
		fullName: String,
		givenName: String,
		familyName: String,
		imageUrl: String,
		userEmail: String,
		userType: String
});

module.exports = mongoose.model('attendance', userSchema, 'attendances');