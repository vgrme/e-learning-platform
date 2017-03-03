var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	password:{
		type:String,
		bcrypt: true
	},
	type:{
		type:String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);


//  {{    *-^-*    Bottom of model   *-^-*    }}
//   --------------------------------------

// Get User By Id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

// Get User by Username
module.exports.getUserByUsername = function(username, callback){
	var query = { username: username };
	User.findOne(query, callback);
}

// Compare password
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch){
		if(err) throw err;
		callback(null, isMatch);
	});
}

// Create Student User
module.exports.saveStudent = function(newUser, newStudent, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		console.log('Student is being saved');
		newUser.save();
		newStudent.save();
		//async.parallel([newUser.save(), newStudent.save()], callback);
	});
}

// Create Instructor User
module.exports.saveInstructor = function(newUser, newInstructor, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		console.log('Instructor is being saved');
		newUser.save(callback);
		newInstructor.save(callback);
		//async.parallel([newUser.save, newInstructor.save], callback);
	});
}

// Create Ta User
module.exports.saveTa = function(newUser, newTa, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		console.log('Teacher Assistant is being saved');
		newUser.save(callback);
		newTa.save(callback);
		//async.parallel([newUser.save(), newTa.save()], callback);
	});
}