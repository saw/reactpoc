var express = require('express');

var User = require('./models/user.js');


var api = new express.Router();

api.get('/', function (req, res) {
	res.send([{title:'Api!', status:'OK'}]);
});

api.get('/user', function (req, res) {
	User.find({}).exec(function(err, data) {
		console.log(data);
		res.send(data);
	})
});

api.get('/user/:id', function (req, res) {
	User.findOne({_id:req.params.id}).exec(function(err, data) {
		console.log(data);
		res.send(data);
	})
});

api.put('/user/:id', function (req, res) {
	User.findOneAndUpdate({_id:req.params.id}, req.body, {}, function(err, data) {
		console.log(arguments);
		console.log(req.body);
		if(err) {
			res.send(err);
		} else {
			res.json({status:'ok', newValue: data});
		}
	});
	
});

api.post('/user', function(req, res) {
	var user = new User(req.body);

	user.save(function(err) {
		if(err) {
			res.send(err);
		} else {
			
			res.json({status:'Ok', id:user._id})
		}
	});
})

module.exports = api;