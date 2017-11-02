const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const Lesson = require('../models/lesson');
const User = require('../models/user');
const Homework = require('../models/homework');
const Attendance = require('../models/attendance');
const Cohort = require('../models/cohort');


const db = "mongodb://rebootcampspotad:j0bsecuritymakesme_sad@ds131854.mlab.com:31854/rebootcampspot";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving videos");
        }else {
            res.json(videos);
        }
    });
});

router.get('/videos/:id', function(req, res){
    console.log('Get request for a single video');
    Video.findById(req.params.id)
    .exec(function(err, video){
        if (err){
            console.log("Error retrieving video");
        }else {
            res.json(video);
        }
    });
});

router.post('/video', function(req, res){
    console.log('Post a video');
		var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if (err){
            console.log('Error saving video');
        }else{
            res.json(insertedVideo);
        }
    });
});


router.put('/video/:id', function(req, res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    }

    );
});


router.delete('/video/:id', function(req, res){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting video");
        }else{
            res.json(deletedVideo);
        }
    });
});



////////////////////////////////////////////////////////////////////////
//				LESSONS
////////////////////////////////////////////////////////////////////////
router.get('/lessons', function(req, res){
	console.log('Get request for all lessons');
	Lesson.find({})
	.exec(function(err, lessons){
			if (err){
					console.log("Error retrieving lessons");
			}else {
					res.json(lessons);
			}
	});
});

router.get('/lessons/:id', function(req, res){
	console.log('Get request for a single lesson');
	Lesson.findById(req.params.id)
	.exec(function(err, lesson){
			if (err){
					console.log("Error retrieving lesson");
			}else {
					res.json(lesson);
			}
	});
});

router.post('/lesson', function(req, res){
	console.log('Post a lesson');
	var newLesson = new Lesson();
	newLesson.title = req.body.title;
	newLesson.cohort = req.body.cohort;
	newLesson.description = req.body.description;
	newLesson.date = req.body.date;	
	newLesson.save(function(err, insertedLesson){
			if (err){
					console.log('Error saving lesson');
			}else{
					res.json(insertedLesson);
			}
	});
});


router.put('/lesson/:id', function(req, res){
	console.log('Update a lesson');
	Lesson.findByIdAndUpdate(req.params.id,
	{
			$set: {title: req.body.title, cohort: req.body.cohort, description: req.body.description, date: req.body.date}
	},
	{
			new: true
	},
	function(err, updatedLesson){
			if(err){
					res.send("Error updating lesson");
			}else{
					res.json(updatedLesson);
			}
	}

	);
});


router.delete('/lesson/:id', function(req, res){
	console.log('Deleting a lesson');
	Lesson.findByIdAndRemove(req.params.id, function(err, deletedLesson){
			if(err){
					res.send("Error deleting lesson");
			}else{
					res.json(deletedLesson);
			}
	});
});


////////////////////////////////////////////////////////////////////////
//				USERS
////////////////////////////////////////////////////////////////////////
router.get('/users', function(req, res){
	console.log('Get request for all users');
	User.find({})
	.exec(function(err, users){
			if (err){
					console.log("Error retrieving users");
			}else {
					res.json(users);
			}
	});
});

router.get('/users/:id', function(req, res){
	console.log('Get request for a single user');
	User.findById(req.params.id)
	.exec(function(err, user){
			if (err){
					console.log("Error retrieving user");
			}else {
					res.json(user);
			}
	});
});

router.post('/user', function(req, res){
	console.log('Post a user');
	var newUser = new User();
	newUser.name = req.body.name;
	newUser.gmail = req.body.gmail;
	newUser.type = req.body.type;	
	newUser.save(function(err, insertedUser){
			if (err){
					console.log('Error saving user');
			}else{
					res.json(insertedUser);
			}
	});
});


router.put('/user/:id', function(req, res){
	console.log('Update a user');
	User.findByIdAndUpdate(req.params.id,
	{
			$set: {name: req.body.name, gmail: req.body.gmail, type: req.body.type}
	},
	{
			new: true
	},
	function(err, updatedUser){
			if(err){
					res.send("Error updating user");
			}else{
					res.json(updatedUser);
			}
	}

	);
});


router.delete('/user/:id', function(req, res){
	console.log('Deleting a user');
	User.findByIdAndRemove(req.params.id, function(err, deletedUser){
			if(err){
					res.send("Error deleting user");
			}else{
					res.json(deletedUser);
			}
	});
});


////////////////////////////////////////////////////////////////////////
//				HOMEWORKS
////////////////////////////////////////////////////////////////////////
router.get('/homeworks', function(req, res){
	console.log('Get request for all homeworks');
	Homework.find({})
	.exec(function(err, homeworks){
			if (err){
					console.log("Error retrieving homeworks");
			}else {
					res.json(homeworks);
			}
	});
});

router.get('/homeworks/:id', function(req, res){
	console.log('Get request for a single homework');
	Homework.findById(req.params.id)
	.exec(function(err, homework){
			if (err){
					console.log("Error retrieving homework");
			}else {
					res.json(homework);
			}
	});
});

router.post('/homework', function(req, res){
	console.log('Post a homework');
	var newHomework = new Homework();
	newHomework.title = req.body.title;
	newHomework.description = req.body.description;
	newHomework.cohort = req.body.cohort;
	newHomework.date = req.body.date;
	//newHomework.hwlink = req.body.hwlink;
	//newHomework.comments = req.body.comments;
	newHomework.save(function(err, insertedHomework){
			if (err){
					console.log('Error saving homework');
			}else{
					res.json(insertedHomework);
			}
	});
});


router.put('/homework/:id', function(req, res){
	console.log('Update a homework');
	Homework.findByIdAndUpdate(req.params.id,
	{
			$set: {title: req.body.title, description: req.body.description, cohort: req.body.cohort, date: req.body.date, hwlink: req.body.hwlink, comments: req.body.comments}
	},
	{
			new: true
	},
	function(err, updatedHomework){
			if(err){
					res.send("Error updating homework");
			}else{
					res.json(updatedHomework);
			}
	}

	);
});


router.delete('/homework/:id', function(req, res){
	console.log('Deleting a homework');
	Homework.findByIdAndRemove(req.params.id, function(err, deletedHomework){
			if(err){
					res.send("Error deleting homework");
			}else{
					res.json(deletedHomework);
			}
	});
});


////////////////////////////////////////////////////////////////////////
//				COHORTS
////////////////////////////////////////////////////////////////////////
router.get('/cohorts', function(req, res){
	console.log('Get request for all cohorts');
	Cohort.find({})
	.exec(function(err, cohorts){
			if (err){
					console.log("Error retrieving cohorts");
			}else {
					res.json(cohorts);
			}
	});
});

router.get('/cohorts/:id', function(req, res){
	console.log('Get request for a single cohort');
	Cohort.findById(req.params.id)
	.exec(function(err, cohort){
			if (err){
					console.log("Error retrieving cohort");
			}else {
					res.json(cohort);
			}
	});
});

router.post('/cohort', function(req, res){
	console.log('Post a new cohort');
	var newCohort = new Cohort();
	newCohort.title = req.body.title;
	newCohort.program = req.body.program;
	newCohort.save(function(err, insertedCohort){
			if (err){
					console.log('Error saving cohort');
			}else{
					res.json(insertedCohort);
			}
	});
});


router.put('/cohort/:id', function(req, res){
	console.log('Update a cohort');
	Cohort.findByIdAndUpdate(req.params.id,
	{
			$set: {title: req.body.title, program: req.body.program}
	},
	{
			new: true
	},
	function(err, updatedCohort){
			if(err){
					res.send("Error updating cohort");
			}else{
					res.json(updatedCohort);
			}
	}

	);
});


router.delete('/cohort/:id', function(req, res){
	console.log('Deleting a cohort');
	Cohort.findByIdAndRemove(req.params.id, function(err, deletedCohort){
			if(err){
					res.send("Error deleting cohort");
			}else{
					res.json(deletedCohort);
			}
	});
});



module.exports = router;