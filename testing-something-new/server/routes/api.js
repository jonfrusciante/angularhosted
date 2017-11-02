const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

const db = "mongodb://rebootcampspotad:j0bsecuritymakesme_sad@ds131854.mlab.com:31854/rebootcampspot";
mongoose.Promise = global.Promise;
mongoose.connect(db, {
	useMongoClient: true
	},
	function(err){
	if(err){
			console.error("Error! " + err);
	}
});

router.get('/', function(req, res){
	res.send('api works');
});

router.get('/users', function(req,res){
	console.log("Get request for all users. For testing purposes.");
	User.find({})
	.exec(function(err, users){
		if (err){
			console.log("Error retrieving users.");
		}else{
			res.json(users);
		}
	});
});

router.get('/users/:email', function(req,res){
	console.log("Get request for a single user. For testing purposes.");
	User.findone({userEmail: req.params.email})
	.exec(function(err, user){
		if (err){
			console.log("Error retrieving user.");
		}else{
			res.json(user);
		}
	});
});

router.post('/user', function(res,req){
		console.log('Post a new user.');
		var newUser = new User();
		newUser.email = req.body.email;
		newUser.type = req.body.type;
		newUser.name = req.body.name;
		newUser.save(function(err, insertedUser){
			if (err){
				console.log("Error saving new user. Quel dommage.");
			}else{
				res.json(insertedUser);
			}
		});
});

router.put('/user/:id', function(req, res){
	console.log("Update a user profile.");
	User.findByIdAndUpdate(req.params.id, 
	{
			$set: {userID: req.body.id, fullName: req.body.fullName, givenName: req.body.givenName, familyName: req.body.familyName, imageUrl:req.body.imageUrl}
	},
	{
		new: true
	},
	function(err, updatedUser){
		if(err){
				res.send("Error updating user.");
		}else{
				res.json(updatedUser);
		}
	});
});

router.delete('/user/:id', function(req, res){
		console.log("Deleting a user. I sure hope you know what you are doing...");
		User.findByIdAndRemove(req.params.id, function(err, deletedUser){
			if(err){
				res.send("Error deleting user");
			}else{
				res.json(deletedUser);
			}
		});
});

module.exports = router;