var express = require('express');
var router = express.Router();
var models = require('../models');
var sequlizeCOnnection = models.sequelize;
router.use('/', function (req, res) {
    //res.redirect('file', {name: req.body.name});
    res.sendFile ('file', {name: req.body.name});
});
router.post('/create', function (req, res) {
    //console.log("req.body.burger_name",req.body.burgerName);
	return models.users.create({username:req.body.username, url:req.body.url})
	.then(function (user) {
	    console.log(user);
	    return res.redirect('/users');
	}).catch(function (error){
	    	console.log(error);
	    	res.json(error);
    })
});


router.use(function(req, res) {
    res.sendFile(path.join(__dirname + './../index.html'));
});







// app.use(express.bodyParser());
// app.use(express.static('public'));
// app.get('/', function (req, res) {
//     "use strict";
//     res.sendFile(path.join(__dirname, 'index.html'));
// });