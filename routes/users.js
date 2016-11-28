var express = require('express');
var router = express.Router();
var tableData = require('../data/table-data.js');
var bodyParser = require('body-parser');
var app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
var urlencodedParser = bodyParser.urlencoded({ extended: false });

function User (username, picPath){
	this.username = username;
	this.picPath = picPath;
}

router.post('/create', function(req,res){
    var obj = {};
	res.send(req.body);
	var userName = req.body.username;
	var userPicFilePath = "./pics/" + req.body.username + ".png";
	//console.log('body: ' + JSON.stringify(req.body));
	require("fs").writeFile(userPicFilePath, req.body.pic, 'base64', function(err) {
  	console.log(err);
  	var user = new User(userName, userPicFilePath);
  	console.log(user);
});
	});

module.exports = router;








