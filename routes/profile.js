var express = require('express');
var router = express.Router();

router.post('/login', function(req,res){
	console.log("this is the beggining of the login route");
	//res.redirect('/:username');
	});

router.post('/:username', function(req,res){
	var username = req.body.username;
	console.log("this is the beggining of the login route");
	//res.redirect('/:username');
	});

module.exports = router;









